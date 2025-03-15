"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BookingRepositroy_1 = __importDefault(require("../../repositories/implementations/BookingRepositroy"));
const UserRepository_1 = __importDefault(require("../../repositories/implementations/UserRepository"));
const mailNotification_1 = __importDefault(require("../../utils/mailNotification"));
class BookingService {
    bookingRepository;
    userRepository;
    constructor() {
        this.bookingRepository = new BookingRepositroy_1.default();
        this.userRepository = new UserRepository_1.default();
    }
    async getBookingForDashboard() {
        const bookings = await this.bookingRepository.getLastSevenBookings();
        return bookings;
    }
    async createBooking(booking) {
        const createdBooking = await this.bookingRepository.createBooking(booking);
        if (createdBooking) {
            const userData = await this.userRepository.findById(booking.userId.toString());
            if (userData) {
                (0, mailNotification_1.default)(userData.email, "Booking Confirmed", userData.fullName.toString(), `Congratulations ${userData.fullName}, your booking has been confirmed for details check the booking history`);
            }
            return createdBooking;
        }
        return null;
    }
    async getBookingsByUserId(id) {
        const bookingResponse = await this.bookingRepository.getBookingsByUserId(id);
        if (bookingResponse) {
            return bookingResponse;
        }
        return null;
    }
    async getBookings(page, limit) {
        const bookingResponse = await this.bookingRepository.getBookings(page, limit);
        if (bookingResponse) {
            return bookingResponse;
        }
        return null;
    }
    async getBookingsByOwnerId(id, page, limit) {
        const bookingResponse = await this.bookingRepository.getBookingsByOwnerId(id, page, limit);
        if (bookingResponse) {
            return bookingResponse;
        }
        return null;
    }
    async getTotalBookings() {
        const totalBookings = await this.bookingRepository.getTotalBookings();
        if (totalBookings) {
            return totalBookings;
        }
    }
    async getBookingsReport(query) {
        const { name, status, startDate, endDate, limit = 10, page = 1 } = query;
        const filter = {};
        if (name)
            filter.fullName = name;
        if (status)
            filter.status = status;
        if (startDate || endDate) {
            filter.date = {};
            if (startDate)
                filter.date.$gte = new Date(startDate);
            if (endDate)
                filter.date.$lte = new Date(endDate);
        }
        const bookingsReport = await this.bookingRepository.getBookingsReport(filter, page, limit);
        return bookingsReport;
    }
    async countByOwnerId(id) {
        try {
            const bookings = await this.bookingRepository.getBookingsByOwnerId(id);
            return { count: bookings ? bookings.length : null };
        }
        catch (error) {
            console.error("Error counting bookings by owner ID:", error);
            return { count: null };
        }
    }
    async ReportByOwnerId(query) {
        const { buildingName, ownerId, status, startDate, endDate, limit = 10, page = 1 } = query;
        const filter = { ownerId: ownerId };
        if (buildingName)
            filter.buildingName = buildingName;
        if (status)
            filter.status = status;
        if (startDate || endDate) {
            filter.date = {};
            if (startDate)
                filter.date.$gte = new Date(startDate);
            if (endDate)
                filter.date.$lte = new Date(endDate);
        }
        const bookingsReport = await this.bookingRepository.reportByOwnerId(filter, page, limit);
        return bookingsReport;
    }
    async cancelBooking(bookingId) {
        const booking = await this.bookingRepository.findById(bookingId);
        if (booking.status == 'canceled')
            return null;
        const today = new Date();
        const bookingDate = new Date(booking.date);
        if (bookingDate.getTime() <= today.getTime())
            return null;
        if (!booking)
            return null;
        booking.status = 'canceled';
        await booking.save();
        return booking;
    }
}
exports.default = BookingService;
//# sourceMappingURL=BookingServices.js.map