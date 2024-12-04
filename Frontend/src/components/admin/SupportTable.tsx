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
  Box,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PRIMARY_COLOR } from '../../constant/colors';
import BadgeForSupport from './BadgeForSupport';

// Define types for users and messages
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
                          onClick={() => handleUserSelect(user)}
                        >
                          Open Chat
                          {user.unreadCount > 0 && <BadgeForSupport count={user.unreadCount} />}
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
   {/* Chat Box */}
   <div className="absolute bottom-0 right-0">
  {isChatOpen && selectedUser && (
    <div
      ref={chatWindowRef}
      className="fixed bottom-0 right-0 w-96 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg z-50 mb-12"
      style={{ minWidth: '300px', maxWidth: '600px', height: '500px' }}
    >
      <div className="flex flex-col h-full">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white dark:text-gray-100 p-3 rounded-t-lg flex justify-between items-center">
          <span className="font-medium text-lg">Chat with {selectedUser.name}</span>
          <button
            onClick={() => setIsChatOpen(false)}
            className="text-white bg-red-600 dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-800 px-4 py-2 rounded-md text-sm"
          >
            Close
          </button>
        </div>

        {/* Chat Body */}
        <div className="flex flex-col flex-grow overflow-hidden">
          {!isChatStarted ? (
            <div className="flex justify-center items-center h-full">
              <button
                onClick={handleStartChat}
                className="bg-orange-500 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-700 text-white py-2 px-4 rounded-md font-medium"
              >
                Start Chat
              </button>
            </div>
          ) : (
            <div className="flex flex-col h-full">
              {/* Messages Container */}
              <div
                ref={messageListRef}
                className="flex-grow overflow-y-auto p-4 space-y-2 dark:bg-gray-900"
                style={{ maxHeight: 'calc(100% - 100px)' }}
              >
                {messages.length ? (
                  messages
                    .filter((msg) => msg.userId === selectedUser.id)
                    .map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${msg.isAdmin ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[70%] p-3 rounded-lg shadow-sm dark:shadow-gray-700 ${
                            msg.isAdmin
                              ? 'bg-orange-100 dark:bg-orange-600 text-orange-700 dark:text-gray-100'
                              : 'bg-blue-100 dark:bg-blue-600 text-blue-700 dark:text-gray-100'
                          }`}
                        >
                          {msg.message}
                        </div>
                      </div>
                    ))
                ) : (
                  <div className="text-center text-gray-500 dark:text-gray-400 py-8">No messages yet</div>
                )}
              </div>

              {/* Chat Input - Fixed at bottom */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <form onSubmit={sendMessage} className="flex">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-grow border border-gray-300 dark:border-gray-600 rounded-lg p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
                  />
                  <button
                    type="submit"
                    className="bg-orange-500 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
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