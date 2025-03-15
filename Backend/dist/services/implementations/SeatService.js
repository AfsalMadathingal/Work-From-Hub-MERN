"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeatService = void 0;
const SeatRepository_1 = require("../../repositories/implementations/SeatRepository");
const BookingRepositroy_1 = __importDefault(require("../../repositories/implementations/BookingRepositroy"));
class SeatService {
    seatRepository;
    bookingRepository;
    constructor() {
        this.bookingRepository = new BookingRepositroy_1.default();
        this.seatRepository = new SeatRepository_1.SeatRepository();
    }
    async makeAvailableByDate(seatId, date) {
        const seat = await this.seatRepository.getSeatById(seatId);
        if (!seat) {
            return null;
        }
        seat.availability.set(date, true);
        try {
            await seat.save();
        }
        catch (error) {
            console.error("Error making seat available:", error);
            return null;
        }
        return seat;
    }
    async getSeatsByWorkspaceId(workspaceId) {
        const response = await this.seatRepository.getSeatsByWorkspaceId(workspaceId);
        if (response) {
            return response;
        }
        return null;
    }
    async getAvailableSeatsByWorkspaceId(workspaceId, date) {
        const response = await this.seatRepository.getAvailableSeatsByWorkspaceId(workspaceId, date);
        if (response) {
            return response;
        }
        return null;
    }
    async getSeatById(id) {
        const response = await this.seatRepository.getSeatById(id);
        if (response) {
            return response;
        }
        return null;
    }
    async reserveSeatForBooking(id, date) {
        const response = await this.seatRepository.reserveSeatForBooking(id, date);
        setTimeout(async () => {
            const updatedSeat = await this.getSeatById(id);
            if (updatedSeat && updatedSeat.availability.get(date) === false) {
                const booking = await this.bookingRepository.findBySeatId(id);
                const bookingDate = new Date(booking?.date).toISOString().split("T")[0];
                if (bookingDate == date) {
                    console.log(`Seat ${id} has been booked for date ${date} after verification.`);
                    return;
                }
                updatedSeat.availability.set(date, true);
                await updatedSeat.save();
                console.log(`Seat ${id} has been released for date ${date} after timeout.`);
            }
        }, 6 * 60 * 1000);
        if (response) {
            return response;
        }
        return null;
    }
    async bookSeat(workspaceId, seatId, date) {
        const response = await this.seatRepository.bookSeat(workspaceId.toString(), seatId, date);
        if (response) {
            return response;
        }
        return null;
    }
}
exports.SeatService = SeatService;
//# sourceMappingURL=SeatService.js.map