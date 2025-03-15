"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../../controllers/userController"));
const multer_1 = __importDefault(require("../../utils/multer"));
const payment_1 = __importDefault(require("./payment"));
const userPrivetRoute = (0, express_1.Router)();
userPrivetRoute.use(userController_1.default.isBlocked);
userPrivetRoute.patch('/', userController_1.default.editUser);
userPrivetRoute.get('/validate-session', userController_1.default.validateSuccessResponse);
userPrivetRoute.use('/payment', payment_1.default);
userPrivetRoute.patch('/upload-profile-photo', multer_1.default.single('image'), userController_1.default.editProfilePhoto);
userPrivetRoute.get('/active-plan', userController_1.default.getActivePlan);
userPrivetRoute.get('/workspace/filters', userController_1.default.getWorkspace);
userPrivetRoute.get('/workspace/:workspaceId/available-seats', userController_1.default.getAvailableSeatsOfWorkspace);
userPrivetRoute.get('/workspace/:id', userController_1.default.getSingleWorkspace);
userPrivetRoute.patch('/workspace/:workspaceId/reserve-seat/:seatId/date/:date', userController_1.default.reserveSeat);
userPrivetRoute.post('/workspace/:workspaceId/book-seat/:seatId/date/:date', userController_1.default.bookSeat);
userPrivetRoute.post('/booking', userController_1.default.confirmBooking);
userPrivetRoute.get('/bookings/:userId', userController_1.default.getBookings);
userPrivetRoute.patch('/bookings/cancel-booking/:bookingId', userController_1.default.cancelBooking);
userPrivetRoute.post('/reviews/:workspaceId', userController_1.default.saveReview);
userPrivetRoute.get('/reviews/:workspaceId', userController_1.default.getReviews);
userPrivetRoute.get('/seat/:id', userController_1.default.getSeatById);
exports.default = userPrivetRoute;
//# sourceMappingURL=userPrivetRoute.js.map