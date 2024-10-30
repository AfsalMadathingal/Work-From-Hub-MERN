import { IBookingRepository } from "repositories/interface/IBookingRepository";
import { ISeat } from "../../entities/Seat";
import { SeatRepository } from "../../repositories/implementations/SeatRepository";
import { ISeatRepository } from "../../repositories/interface/ISeatRepository";
import { ISeatService } from "../../services/interface/ISeatService";
import BookingRepository from "../../repositories/implementations/BookingRepositroy";

export class SeatService implements ISeatService {
  private seatRepository: ISeatRepository;
  private bookingRepository: IBookingRepository;

  constructor() {
    this.bookingRepository = new BookingRepository();
    this.seatRepository = new SeatRepository();
  }


  async makeAvailableByDate(seatId: string, date: string): Promise<ISeat | null> {
    
    const seat = await this.seatRepository.getSeatById(seatId);

    if (!seat) {
      return null;
    }

    seat.availability.set(date, true);

    try {
      await seat.save();
    } catch (error) {
      console.error("Error making seat available:", error);
      return null;
    }

    return seat;
  }

  async getSeatsByWorkspaceId(workspaceId: string): Promise<ISeat[] | null> {
    const response = await this.seatRepository.getSeatsByWorkspaceId(
      workspaceId
    );

    if (response) {
      return response;
    }

    return null;
  }

  async getAvailableSeatsByWorkspaceId(
    workspaceId: string,
    date: string
  ): Promise<ISeat[] | null> {
    const response = await this.seatRepository.getAvailableSeatsByWorkspaceId(
      workspaceId,
      date
    );

    if (response) {
      return response;
    }

    return null;
  }

  async getSeatById(id: string): Promise<ISeat | null> {
    const response = await this.seatRepository.getSeatById(id);

    if (response) {
      return response;
    }

    return null;
  }

  async reserveSeatForBooking(id: string, date: string): Promise<ISeat | null> {
    const response = await this.seatRepository.reserveSeatForBooking(id, date);

    setTimeout(async () => {
      const updatedSeat = await this.getSeatById(id);


      if (updatedSeat && updatedSeat.availability.get(date) === false) {
        const booking = await this.bookingRepository.findBySeatId(id);
        const bookingDate = new Date(booking?.date).toISOString().split("T")[0];

        if (bookingDate == date) {
            console.log( `Seat ${id} has been booked for date ${date} after verification.`);
            
          return;
        }

        updatedSeat.availability.set(date, true);
        await updatedSeat.save();
        console.log(
          `Seat ${id} has been released for date ${date} after timeout.`
        );
      }
    }, 6 * 60 * 1000);

    if (response) {
      return response;
    }

    return null;
  }

  async bookSeat(
    workspaceId: string,
    seatId: string,
    date: string
  ): Promise<ISeat | null> {
    const response = await this.seatRepository.bookSeat(
      workspaceId.toString(),
      seatId,
      date
    );

    if (response) {
      return response;
    }

    return null;
  }
}
