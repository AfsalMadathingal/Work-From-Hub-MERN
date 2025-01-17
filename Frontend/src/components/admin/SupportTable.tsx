import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { io, Socket } from 'socket.io-client';
import { Users, User, Mail, MessageSquare, X, Send, AlertCircle, Loader2 } from 'lucide-react';

type User = {
  id: string;
  name: string;
  email: string;
  unreadCount: number;
};

type Message = {
  userId: string;
  message: string;
  isAdmin?: boolean;
};

const SOCKET_URL = import.meta.env.VITE_API_URL;

const AdminChat: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<{ id: string; name: string } | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatStarted, setIsChatStarted] = useState(false);
  const messageListRef = useRef<HTMLDivElement | null>(null);
  const chatWindowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const newSocket = io(SOCKET_URL);
    setSocket(newSocket);
    newSocket.emit('adminConnected');

    // Handle initial users list
    newSocket.on('connectedUsers', (userList) => {
      if (!userList) return;
    const updatedUsers = Object.values(userList).map((user) => ({ ...user as object, unreadCount: 0 }));
      setUsers(updatedUsers as User[]);
    });

    // Handle new user messages with improved notification
    newSocket.on('userMessage', (msg) => {
      setMessages((prev) => [...prev, { message: msg.message, isAdmin: false, userId: msg.userId }]);
      
      // Only increment unread count if the chat window is not focused or it's a different user
      setUsers((prevUsers) => 
        prevUsers.map(user => {
          if (user.id === msg.userId) {
            const shouldIncrement = !document.hasFocus() || selectedUser?.id !== user.id;
            return {
              ...user,
              unreadCount: shouldIncrement ? user.unreadCount + 1 : user.unreadCount
            };
          }
          return user;
        })
      );

      // Show toast notification if chat is not focused
      if (!document.hasFocus() || selectedUser?.id !== msg.userId) {
        toast(`New message from ${users.find(u => u.id === msg.userId)?.name || 'User'}`);
      }
    });

    // Handle user disconnection
    newSocket.on('userDisconnected', (userId) => {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      if (selectedUser?.id === userId) {
        setSelectedUser(null);
        setIsChatOpen(false);
        setIsChatStarted(false);
        toast('User has disconnected');
      }
    });

    // Cleanup
    return () => {
      newSocket.disconnect();
    };
  }, [selectedUser]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  // Reset unread count when chat window gains focus
  useEffect(() => {
    const handleFocus = () => {
      if (selectedUser) {
        setUsers((prevUsers) =>
          prevUsers.map(user => 
            user.id === selectedUser.id ? { ...user, unreadCount: 0 } : user
          )
        );
      }
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [selectedUser]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (socket && selectedUser && message.trim()) {
      socket.emit('adminMessage', { userId: selectedUser.id, message });
      setMessages((prev) => [...prev, { userId: selectedUser.id, message, isAdmin: true }]);
      setMessage('');
    }
  };

  const handleStartChat = () => {
    setIsChatStarted(true);
    // Reset unread count when chat is started
    if (selectedUser) {
      setUsers((prevUsers) =>
        prevUsers.map(user => user.id === selectedUser.id ? { ...user, unreadCount: 0 } : user)
      );
    }
  };

  const handleUserSelect = (user: { id: string; name: string }) => {
    setSelectedUser(user);
    setIsChatOpen(true);
    // Reset unread count when user is selected
    setUsers((prevUsers) =>
      prevUsers.map(u => u.id === user.id ? { ...u, unreadCount: 0 } : u)
    );
  };

  // const handleEndChat = () => {
  //   setIsChatStarted(false);
  //   setSelectedUser(null);
  //   setIsChatOpen(false);
  // };

  const hasUsers = users.length > 0;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Users Table Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-orange-500" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Active Users
            </h2>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Name
                  </div>
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </div>
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleUserSelect(user)}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Open Chat
                        {user.unreadCount > 0 && (
                          <span className="px-2 py-0.5 text-xs font-semibold bg-red-500 text-white rounded-full">
                            {user.unreadCount}
                          </span>
                        )}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="px-6 py-12 text-center">
                    <AlertCircle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 dark:text-gray-400 font-medium">No active users</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                      Check back later or refresh the page
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Chat Window */}
      {isChatOpen && selectedUser && (
        <div
          ref={chatWindowRef}
          className="fixed bottom-0 right-6 w-96 bg-white dark:bg-gray-800 rounded-t-lg shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col"
          style={{ height: '600px' }}
        >
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-orange-500 to-orange-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <User className="w-5 h-5" />
                <span className="font-medium">{selectedUser.name}</span>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="p-1 hover:bg-orange-600 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Chat Content */}
          <div className="flex-1 overflow-hidden flex flex-col">
            {!isChatStarted ? (
              <div className="flex-1 flex items-center justify-center">
                <button
                  onClick={handleStartChat}
                  className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium transition-colors"
                >
                  Start Chat
                </button>
              </div>
            ) : (
              <>
                {/* Messages */}
                <div
                  ref={messageListRef}
                  className="flex-1 overflow-y-auto p-4 space-y-3"
                >
                  {messages
                    .filter((msg) => msg.userId === selectedUser.id)
                    .map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${msg.isAdmin ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[75%] p-3 rounded-lg ${
                            msg.isAdmin
                              ? 'bg-orange-500 text-white ml-auto'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                          }`}
                        >
                          {msg.message}
                        </div>
                      </div>
                    ))}
                  {messages.length === 0 && (
                    <div className="flex-1 flex items-center justify-center text-gray-500 dark:text-gray-400">
                      No messages yet
                    </div>
                  )}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <form onSubmit={sendMessage} className="flex gap-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-gray-200"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors flex items-center gap-2"
                      disabled={!message.trim()}
                    >
                      <Send className="w-4 h-4" />
                      Send
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminChat;