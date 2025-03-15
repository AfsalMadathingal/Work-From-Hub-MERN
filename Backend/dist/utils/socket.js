"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeSocket = void 0;
const socket_io_1 = require("socket.io");
// Function to initialize Socket.IO
const initializeSocket = (server) => {
    const io = new socket_io_1.Server(server, {
        cors: {
            origin: '*', // Allow all origins (customize this for security)
        },
    });
    // Array to hold connected users
    let connectedUsers = [];
    let adminSocket = null; // Store the admin connection
    // When a user connects
    io.on('connection', (socket) => {
        console.log(`User connected: ${socket.id}`);
        // Listen for 'connectUser' event from users
        socket.on('connectUser', (userData) => {
            // Check if the user is already connected
            const isUserAlreadyConnected = connectedUsers.find(user => user.id === userData.id);
            if (!isUserAlreadyConnected) {
                // Add new user to the connectedUsers list
                connectedUsers.push({ id: socket.id, userId: userData.id, ...userData });
                console.log('New user connected:', userData);
            }
            // Notify admin of new user
            if (adminSocket) {
                io.to(adminSocket).emit('newUser', connectedUsers);
            }
            // Send the updated list of connected users to everyone
            io.emit('connectedUsers', connectedUsers);
        });
        // Listen for user messages
        socket.on('userMessage', (data) => {
            const { userId, message } = data;
            // Send message to all users
            io.emit('userMessage', { message, from: 'user', userId });
        });
        // Listen for individual admin-user chat messages
        socket.on('message', (data) => {
            const { userId, message } = data;
            // Send message to the particular user (by socket ID)
            io.emit('message', { message, from: 'user' });
        });
        // Listen for admin connection
        socket.on('adminConnected', () => {
            adminSocket = socket.id; // Store admin socket ID
            console.log('Admin connected:', adminSocket);
            // Send connected users to admin upon connection
            io.to(adminSocket).emit('connectedUsers', connectedUsers);
        });
        // Listen for admin messages to users
        socket.on('adminMessage', (data) => {
            const { userId, message } = data;
            const userData = connectedUsers.find((user) => user.id == userId);
            console.log('==============userData======================');
            console.log(userData);
            console.log('====================================');
            // Send message to the specific user
            io.to(userData.socketId).emit('adminMessage', { message, from: 'admin', to: userId });
            console.log(`Admin sent message to ${userId}: ${message}`);
        });
        // Listen for user disconnection
        socket.on('disconnect', () => {
            // Remove user from connectedUsers
            connectedUsers = connectedUsers.filter(user => user.socketId !== socket.id);
            console.log(`User disconnected: ${socket.id}`);
            console.log('====================================');
            console.log(adminSocket);
            console.log('====================================');
            // Notify admin of user disconnection
            if (adminSocket) {
                io.to(adminSocket).emit('newUser', socket.id);
            }
            // Send updated list of users after disconnection
            io.emit('connectedUsers', connectedUsers);
        });
    });
};
exports.initializeSocket = initializeSocket;
//# sourceMappingURL=socket.js.map