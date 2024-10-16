import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { io, Socket } from 'socket.io-client';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Box
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PRIMARY_COLOR } from '../../constant/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#99', 
    },
    secondary: {
      main: PRIMARY_COLOR, 
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

const SOCKET_URL = 'http://localhost:5000';

const AdminChat: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [users, setUsers] = useState<{ id: string; name: string }[]>([]);
  const [selectedUser, setSelectedUser] = useState<{ id: string; name: string } | null>(null);
  const [messages, setMessages] = useState<{ userId: string; message: string; isAdmin?: boolean }[]>([]);
  const [message, setMessage] = useState<string>('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatStarted, setIsChatStarted] = useState(false);
  const messageListRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const newSocket = io(SOCKET_URL);
    setSocket(newSocket);

    // Notify the server that admin is connected
    newSocket.emit('adminConnected');

    // Listen for new users
    newSocket.on('newUser', (userList) => {

      console.log('====================================');
      console.log(userList);
      console.log('====================================');

    });


    newSocket.on('connectedUsers', (userList) => {

      if(!userList) return;
      console.log('====================================');
      console.log(userList);
      console.log('====================================');
      setUsers(Object.values(userList)); // Update the list of active users
    });
    // Listen for messages from users
    newSocket.on('userMessage', (msg) => {
      toast.info(msg.message);  
      console.log('====================================');
      console.log(selectedUser?.id, msg);
      console.log('====================================');
      setMessages((prev) => [...prev, { message: msg.message , isAdmin: false, userId: msg.userId}]); // Append new messages
    });

    // Remove user when they disconnect
    newSocket.on('userDisconnected', (userId) => {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    });

    return () => {
      newSocket.disconnect(); // Clean up on component unmount
    };
  }, []);

  useEffect(() => {
    // Scroll to the bottom when a new message is received
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  // Handle sending a message
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
  };

  const handleEndChat = () => {
    setIsChatStarted(false);
    setSelectedUser(null);
  };
  const hasUsers = users.length > 0;
  return (
    <>
    {/* User Table */}
    <ThemeProvider theme={theme}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: 'background.default' }}>
        <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold', mb: 3 }}>
          Active Users
        </Typography>
        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.main' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.main' }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'primary.main' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hasUsers ? (
                users.map((user) => (
                  <TableRow key={user.id} hover>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={() => {
                          setSelectedUser(user);
                          setIsChatOpen(true);
                        }}
                      >
                        Open Chat
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    <Box sx={{ py: 4, textAlign: 'center' }}>
                      <Typography variant="h6" color="text.secondary">
                        No active users at the moment
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        Check back later or refresh the page
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </ThemeProvider>
  
    {/* Chat Box */}
    <div className="absolute bottom-0 right-0">
      {isChatOpen && selectedUser && (
        <div
          className="fixed bottom-0 right-0 w-96 h-96 bg-white border border-gray-300 shadow-lg z-50 resize overflow-hidden"
          style={{ minWidth: '300px', minHeight: '400px', maxWidth: '600px' }}
        >
          <div className="h-full flex flex-col">
            {/* Chat Header */}
            <div className="bg-orange-500 text-white p-2 flex justify-between items-center">
              <span>Chat With {selectedUser.name}</span>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-sm bg-red-500 px-2 py-1 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
  
            {/* Chat Body */}
            <div className="flex-grow p-2 flex flex-col justify-between">
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
                      messages
                        .filter((msg) => msg.userId === selectedUser.id)
                        .map((msg, index) => (
                          <div
                            key={index}
                            className={`flex ${
                              msg.isAdmin ? 'justify-end' : 'justify-start'
                            }`}
                          >
                            <div
                              className={`max-w-xs p-2 rounded-md ${
                                msg.isAdmin ? 'bg-orange-100' : 'bg-blue-200'
                              }`}
                            >
                              {msg.message}
                            </div>
                          </div>
                        ))
                    ) : (
                      <div className="text-center text-gray-500">No messages yet</div>
                    )}
                  </div>
  
                  {/* Chat Input */}
                  <form onSubmit={sendMessage} className="mt-2 flex">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type a message"
                      className="flex-grow border border-gray-300 rounded-l-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <button
                      type="submit"
                      className="bg-orange-500 text-white p-2 rounded-r-md"
                    >
                      Send
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  </>
  
    
  );
};

export default AdminChat;
