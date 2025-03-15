"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BookingModel_1 = __importDefault(require("../../models/BookingModel"));
const mongoose_1 = __importDefault(require("mongoose"));
const userModel_1 = __importDefault(require("../../models/userModel"));
const workspace_1 = require("../../models/workspace");
class BookingRepository {
    userModel;
    constructor() {
        this.userModel = userModel_1.default;
    }
    async getBookingsReport(filter, pageNum, limitNum) {
        try {
            let userIds = [];
            if (filter.fullName) {
                const users = await this.userModel.find({ fullName: { $regex: filter.fullName ? filter.fullName : " ", $options: 'i' } }, '_id');
                userIds = users.map((user) => user._id);
            }
            const bookingFilter = { ...filter };
            if (userIds.length > 0) {
                bookingFilter.userId = { $in: userIds };
                delete bookingFilter.fullName;
            }
            const totalBookings = await BookingModel_1.default.countDocuments(bookingFilter);
            const bookings = await BookingModel_1.default.find(bookingFilter)
                .populate('userId')
                .limit(limitNum)
                .skip((pageNum - 1) * limitNum)
                .sort({ date: -1 });
            const result = { bookings, totalPages: Math.ceil(totalBookings / limitNum) };
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async reportByOwnerId(filter, pageNum, limitNum) {
        try {
            let workspaceIds = [];
            if (filter.ownerId) {
                const workspaceQuery = { ownerId: filter.ownerId };
                if (filter.buildingName) {
                    workspaceQuery.buildingName = {
                        $regex: filter.buildingName,
                        $options: 'i',
                    };
                }
                const workspaces = await workspace_1.WorkspaceModel.find(workspaceQuery);
                workspaceIds = workspaces.map((space) => space._id);
            }
            const bookingFilter = { ...filter };
            if (workspaceIds.length > 0) {
                bookingFilter.workspaceId = { $in: workspaceIds };
                delete bookingFilter.buildingName;
                delete bookingFilter.ownerId;
            }
            console.log('==================bookingFilter==================');
            console.log(bookingFilter);
            console.log('====================================');
            const totalBookings = await BookingModel_1.default.countDocuments(bookingFilter);
            const bookings = await BookingModel_1.default.find(bookingFilter)
                .populate('userId')
                .populate('workspaceId')
                .limit(limitNum)
                .skip((pageNum - 1) * limitNum)
                .sort({ date: -1 });
            const result = { bookings, totalPages: Math.ceil(totalBookings / limitNum) };
            return result;
        }
        catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
            throw error;
        }
    }
    async createBooking(booking) {
        try {
            const createdBooking = await BookingModel_1.default.create(booking);
            return createdBooking;
        }
        catch (error) {
            console.error("Error creating booking:", error);
            return null;
        }
    }
    async findBySeatId(id) {
        try {
            const booking = await BookingModel_1.default.findOne({ seatId: id });
            if (booking) {
                return booking;
            }
            return null;
        }
        catch (error) {
            return null;
        }
    }
    async getBookingsByUserId(id) {
        try {
            const userId = new mongoose_1.default.Types.ObjectId(id);
            const bookings = await BookingModel_1.default.find({
                userId,
            }).sort({ date: -1 });
            if (bookings) {
                return bookings;
            }
            return null;
        }
        catch (error) {
            return null;
        }
    }
    async getBookings(page, limit) {
        try {
            const skip = (page - 1) * limit;
            const totalBookings = await BookingModel_1.default.countDocuments();
            const bookingResponse = await BookingModel_1.default.find()
                .skip(skip)
                .limit(limit)
                .sort("-date")
                .populate("userId", "-password")
                .populate("seatId")
                .populate({
                path: "workspaceId",
                populate: {
                    path: "ownerId",
                    select: "fullName email",
                },
            })
                .exec();
            return {
                totalBookings,
                bookings: bookingResponse || null,
            };
        }
        catch (error) {
            console.error("Error fetching bookings:", error);
            throw new Error("Unable to fetch bookings.");
        }
    }
    async getBookingsByOwnerId(id, page, limit) {
        try {
            const ownerId = new mongoose_1.default.Types.ObjectId(id);
            const bookingPipeline = [
                {
                    $lookup: {
                        from: "workspaces",
                        localField: "workspaceId",
                        foreignField: "_id",
                        as: "workspaceInfo",
                    },
                },
                {
                    $unwind: "$workspaceInfo",
                },
                {
                    $match: {
                        "workspaceInfo.ownerId": ownerId,
                    },
                },
                {
                    $sort: { date: -1 },
                },
                {
                    $lookup: {
                        from: "users",
                        localField: "userId",
                        foreignField: "_id",
                        as: "userInfo",
                    },
                },
                {
                    $lookup: {
                        from: "seats",
                        localField: "seatId",
                        foreignField: "_id",
                        as: "seatInfo",
                    },
                },
                {
                    $project: {
                        "userInfo.password": 0,
                        "userInfo.refreshToken": 0,
                        "workspaceInfo.ownerId.password": 0,
                    },
                },
            ];
            if (page && limit) {
                const skip = (page - 1) * limit;
                bookingPipeline.push({ $skip: skip }, { $limit: limit });
            }
            const bookingResponse = await BookingModel_1.default.aggregate(bookingPipeline);
            console.log('==============bookingResponse======================');
            console.log(bookingResponse);
            console.log('====================================');
            return bookingResponse || null;
        }
        catch (error) {
            console.error("Error fetching bookings by owner id:", error);
            throw new Error("Unable to fetch bookings by owner id.");
        }
    }
    async getTotalBookings() {
        try {
            const bookingsCount = await BookingModel_1.default.countDocuments();
            const bookingsData = await BookingModel_1.default.find()
                .limit(5)
                .populate("userId", "-password")
                .exec();
            return { bookingsCount, bookingsData };
        }
        catch (error) {
            console.error("Error fetching total bookings:", error);
            throw new Error("Unable to fetch total bookings.");
        }
    }
    async getLastSevenBookings() {
        try {
            const currentDate = new Date();
            const tillDate = new Date(currentDate.setDate(currentDate.getDate() + 7));
            const data = await BookingModel_1.default.find({ date: { $lte: tillDate } })
                .populate("userId", "-password")
                .sort({ paymentDate: -1 })
                .limit(7)
                .exec();
            if (!data) {
                throw new Error("No data Found ");
            }
            return data;
        }
        catch (error) {
            throw error;
        }
    }
    async findById(id) {
        try {
            const booking = await BookingModel_1.default.findById(id).populate("userId", "-password");
            if (booking) {
                return booking;
            }
            return null;
        }
        catch (error) {
            console.error("Error fetching booking by id:", error);
            throw new Error("Unable to fetch booking by id.");
        }
    }
}
exports.default = BookingRepository;
//# sourceMappingURL=BookingRepositroy.js.map