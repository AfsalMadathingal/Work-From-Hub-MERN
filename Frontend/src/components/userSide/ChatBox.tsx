import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { io, Socket } from "socket.io-client";
import { RootState } from '../../redux/store/store';
import { Tooltip } from '@nextui-org/react';
import { FaBan } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { IUsers } from '../../@types/user';


const SOCKET_URL = 'http://localhost:5000';

const ChatBox: React.FC = () => {

  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<{ userId: string; message: string; isAdmin?: boolean }[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false); // Chatbox toggle state
  const [isChatStarted, setIsChatStarted] = useState(false); // Start chat state
  const messageListRef = useRef<HTMLDivElement>(null); // Scroll to bottom for messages
  const { isAuthenticated} = useSelector((state: RootState) => state.user);
  const user = useSelector((state: RootState) => state.user.user) as IUsers | null;
  const audioRef = useRef<HTMLAudioElement | null>(null); // Ref for audio element
  const currentUserId = user?._id;



  // Start chat and initialize socket connection
  const handleStartChat = () => {
    if (socket) {
      // Remove existing listeners if socket already exists
      socket.off('message');
      socket.off('adminMessage');
    }

    const newSocket = io(SOCKET_URL);
    setSocket(newSocket);
    setIsChatStarted(true);






    // Listen for the socket connection event
    newSocket.on('connect', () => {
      // Emit connectUser only after the socket is connected
      newSocket.emit('connectUser', { 
        socketId: newSocket.id,
        id: currentUserId,
        name: user?.fullName,
        email: user?.email,
        phone: user?.phone || '',
      });
    });

    // Listen for incoming messages
    newSocket.on('message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    // Listen for admin-specific messages
    newSocket.on('adminMessage', (msg) => {
      if (msg.to === currentUserId) {
        if (audioRef.current) {
          audioRef.current.play(); // Play audio when message is received
        }
        setMessages((prev) => [...prev, { ...msg, isAdmin: true }]);
      }
    });

    // Optional: Handle connection errors
    newSocket.on('connect_error', (err) => {
      console.error("Socket connection error:", err);
      toast.error("Socket connection error. Please try again."); // Show error notification
    });
  };

  // Automatically scroll to bottom when new messages arrive
  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  // Handle sending a message
const sendMessage = (e: React.FormEvent) => {
  e.preventDefault();
  if (socket && message.trim() && currentUserId) {
    // Send the message to the server
    socket.emit('userMessage', { userId: currentUserId, message });
    // Update messages state only if currentUserId is defined
    setMessages((prevMessages) => [...prevMessages, { userId: currentUserId, message }]);
    setMessage(''); // Clear input after sending
  } else {
    // Optionally handle the case where currentUserId is undefined
    toast.error("Unable to send message. User ID is undefined."); // Error notification
  }
};


  // Handle end chat and disconnect
  const handleEndChat = () => {
    if (socket) {
      socket.disconnect();
      setSocket(null);
      setIsChatStarted(false);
    }
  };

  // Cleanup on component unmount or when the socket changes
  useEffect(() => {
    return () => {
      if (socket) {
        socket.disconnect();
        setSocket(null);
      }
    };
  }, [socket]);


  
  if(isAuthenticated === false){
    return null
  }

  return (
<div>
  <audio ref={audioRef} src="/messgeIncoming.mp3" />
  
  {/* Chat Box */}
  <div
    className={`fixed bottom-2 right-2 z-50 ${isChatOpen ? 'w-full max-w-sm sm:max-w-md h-96' : 'w-16 h-16'} 
    bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out transform`}
  >
    {isChatOpen ? (
      <>
        {/* Chat Header */}
        <div className="bg-orange-500 text-white p-2 flex justify-between items-center">
          <span>Chat With Support</span>
          <button onClick={() => setIsChatOpen(false)} className="text-sm">Close</button>
        </div>

        {/* Chat Body */}
        <div className="h-full p-2 flex flex-col justify-between">
          {/* Start Chat Button */}
          {!isChatStarted ? (
            <div className="flex justify-center items-center h-full">
              <button
                onClick={handleStartChat}
                className="bg-orange-500 text-white py-2 px-4 rounded-md"
              >
                Start Chat
              </button>
            </div>
          ) : (
            <>
              {/* Messages */}
              <div
                ref={messageListRef}
                className="overflow-y-auto space-y-2 p-2 bg-gray-50 rounded-md h-full"
              >
                {messages.length ? (
                  messages.map((msgObj, index) => (
                    <div
                      key={index}
                      className={`flex ${msgObj.userId === currentUserId ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-xs p-2 rounded-md ${msgObj.isAdmin ? "bg-blue-200" : msgObj.userId === currentUserId ? "bg-orange-100" : "bg-gray-200"}`}>
                        {msgObj.message}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-500">No messages yet</div>
                )}
              </div>

              {/* End Chat Button */}
              <div className='flex justify-center'>
                <button
                  onClick={handleEndChat}
                  className="bg-blue-500 text-white mt-2 py-1 px-4 rounded-md self-end flex items-center gap-2"
                >
                  <FaBan /> End Chat
                </button>
              </div>

              {/* Chat Input */}
              <form onSubmit={sendMessage} className="mt-2 pb-12 flex">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)} // Update the message state
                  placeholder="Type a message"
                  className="flex-grow border border-gray-300 rounded-l-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button type="submit" className="bg-orange-500 text-white p-2 rounded-r-md">Send</button>
              </form>
            </>
          )}
        </div>
      </>
    ) : (
      <Tooltip showArrow={true} content="Chat With Support">
        <div
          className="text-white flex items-center justify-center bg-orange-500 h-full cursor-pointer"
          onClick={() => setIsChatOpen(true)} // Toggle chatbox open
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </div>
      </Tooltip>
    )}
  </div>
</div>

  );
};

export default ChatBox;
