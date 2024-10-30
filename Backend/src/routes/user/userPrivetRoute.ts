import { Router } from "express";
import userController from "../../controllers/userController";
import upload from "../../utils/multer";
import paymentRouter from "./payment";



const userPrivetRoute = Router();


userPrivetRoute.patch('/', userController.editUser)
userPrivetRoute.get('/validate-session', userController.validateSuccessResponse)
userPrivetRoute.use('/payment', paymentRouter)


userPrivetRoute.patch('/upload-profile-photo', upload.single('image'), userController.editProfilePhoto)
userPrivetRoute.get('/active-plan', userController.getActivePlan)


userPrivetRoute.get('/workspace/filters',  userController.getWorkspace)
userPrivetRoute.get('/workspace/:workspaceId/available-seats', userController.getAvailableSeatsOfWorkspace)
userPrivetRoute.get('/workspace/:id',  userController.getSingleWorkspace)
userPrivetRoute.patch('/workspace/:workspaceId/reserve-seat/:seatId/date/:date', userController.reserveSeat)
userPrivetRoute.post('/workspace/:workspaceId/book-seat/:seatId/date/:date',  userController.bookSeat)

userPrivetRoute.post('/booking', userController.confirmBooking)
userPrivetRoute.get('/bookings/:userId', userController.getBookings)
userPrivetRoute.patch('/bookings/cancel-booking/:bookingId',userController.cancelBooking)


userPrivetRoute.post('/reviews/:workspaceId',  userController.saveReview)
userPrivetRoute.get('/reviews/:workspaceId', userController.getReviews)


userPrivetRoute.get('/seat/:id', userController.getSeatById)



export default userPrivetRoute;
