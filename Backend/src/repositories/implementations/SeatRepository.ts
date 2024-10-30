import { ISeatRepository } from "../../repositories/interface/ISeatRepository";
import { ISeat } from "../../entities/Seat";
import { Seat } from "../../models/seatModel";
import { IWorkspace } from "../../entities/workspace";

export class SeatRepository implements ISeatRepository {
  async createSeatsForWorkspace(
    workspace: IWorkspace
  ): Promise<ISeat[] | null> {
    try {
      console.log("====================================");
      console.log(workspace);
      console.log("====================================");

      const { tablesAvailable, seatsPerTable } = workspace;
      const seatPromises: Promise<ISeat>[] = [];

      for (let tableNumber = 1; tableNumber <= tablesAvailable; tableNumber++) {
        for (let seatNumber = 1; seatNumber <= seatsPerTable; seatNumber++) {
          const newSeat = {
            workspaceId: workspace.id,
            tableNumber,
            seatNumber,
            availability: {},
          };

          seatPromises.push(Seat.create(newSeat) as Promise<ISeat>);
        }
      }

      const seats = await Promise.all(seatPromises);
      return seats as ISeat[];
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getSeatsByWorkspaceId(workspaceId: string): Promise<ISeat[] | null> {
    try {
      const seats = await Seat.find({ workspaceId });
      return seats as ISeat[]; // This will include the availability field
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getAvailableSeatsByWorkspaceId(
    workspaceId: string,
    date: string
  ): Promise<ISeat[] | null> {
    try {
      const seats = await Seat.find({ workspaceId });

      // Filter based on availability for the specific date
      return seats.filter((seat) => seat.availability.get(date) !== false);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // async bookSeat(workspaceId: string, tableNumber: number, seatNumber: number, selectedDate: string): Promise<ISeat | null> {
  //   try {
  //     // Fetch the specific seat
  //     const seat = await Seat.findOne({ workspaceId, tableNumber, seatNumber });

  //     if (!seat) {
  //       throw new Error("Seat not found");
  //     }

  //     // Check if seat is available on the selected date
  //     if (seat.availability.get(selectedDate)) {
  //       throw new Error("Seat is already booked on the selected date");
  //     }

  //     // Update seat availability for the selected date
  //     seat.availability.set(selectedDate, false); // Mark as unavailable

  //     // Save updated seat
  //     await seat.save();

  //     return seat;
  //   } catch (error) {
  //     console.error("Error booking seat:", error);
  //     return null;
  //   }
  // }

  async reserveSeat(
    workspaceId: string,
    tableNumber: number,
    seatNumber: number,
    selectedDate: string
  ): Promise<ISeat | null> {
    try {
      // Fetch the specific seat
      const seat = await Seat.findOne({ workspaceId, tableNumber, seatNumber });

      if (!seat) {
        throw new Error("Seat not found");
      }

      // Update seat availability for the selected date
      seat.availability.set(selectedDate, false); // Mark as unavailable

      // Save updated seat
      await seat.save();

      // Start a timer to release the seat after 5 minutes
      setTimeout(async () => {
        // Check if the seat is still reserved (i.e., payment completed)
        // const isReserved = await this.checkIfSeatIsReserved(workspaceId, tableNumber, seatNumber);
        // if (!isReserved) {
        //     // If not reserved, make the seat available again
        //     seat.availability.set(selectedDate, true); // Mark as available
        //     await seat.save();
        //     console.log(`Seat ${tableNumber}-${seatNumber} released due to non-payment.`);
        // }
      }, 5 * 60 * 1000); // 5 minutes in milliseconds

      return seat;
    } catch (error) {
      console.error("Error reserving seat:", error);
      return null;
    }
  }

  async checkIfSeatIsReserved(seatId: string, date: string): Promise<boolean> {
    // Implement your logic here (e.g., check payment status)
    // Return true if seat is still reserved, false otherwise
    // You might need to query your payment system or database
    // to determine whether the payment was completed.
    // For simplicity, I'm assuming it always returns true.

    return false;
  }

  async getSeatById(seatId: string): Promise<ISeat | null> {
    try {
      const seat = await Seat.findById(seatId);

      if (!seat) {
        throw new Error("Seat not found");
      }

      return seat;
    } catch (error) {
      console.error("Error getting seat by id:", error);
      return null;
    }
  }

  async reserveSeatForBooking(id: string, date: string): Promise<ISeat | null> {
    const seat = await this.getSeatById(id);

    if (!seat) {
      return null;
    }

    const isSeatReserved = seat.availability.get(date) === false;

    console.log(isSeatReserved);

    if (isSeatReserved) {
      return null;
    }

    seat.availability.set(date, false);

    try {
      await seat.save();
    } catch (error) {
      console.error("Error reserving seat:", error);
      return null;
    }

    return seat;
  }

  async listSeatsWithAvailabilityCheck(
    workspaceId: string,
    date: string
  ): Promise<any> {
    const seats = await this.getSeatsByWorkspaceId(workspaceId); // Get all seats for the workspace

    // Check availability for each seat
    const seatsWithAvailability = await Promise.all(
      seats.map(async (seat) => {
        const isAvailable = await this.isSeatAvailableForDate(
          seat._id as string,
          date
        );
        return {
          seatId: seat._id,
          seatNumber: seat.seatNumber,
          tableNumber: seat.tableNumber,
          isAvailable, // true if seat is available on the given date
        };
      })
    );

    return seatsWithAvailability; // Return the list with availability status
  }

  async isSeatAvailableForDate(id: string, date: string): Promise<boolean> {
    const seat = await this.getSeatById(id); // Fetch the seat by its ID

    if (!seat) {
      throw new Error("Seat not found");
    }

    const isAvailable =
      seat.availability.get(date) === true || !seat.availability.has(date);
    // true -> Seat is available, false -> Seat is not available,
    // undefined (!has(date)) -> no bookings for that date, so it is available by default

    return isAvailable; // Return true if available, otherwise false
  }

  async bookSeatById(
    workspaceId: string,
    seatId: string,
    date: string
  ): Promise<ISeat | null> {
    const seat = await this.getSeatById(seatId);
    if (!seat) {
      throw new Error("Seat not found");
    }

    if (seat.availability.get(date) === false) {
      throw new Error("Seat is already booked on the selected date");
    }

    seat.availability.set(date, false); // Mark as unavailable
    await seat.save();

    return seat;
  }

  async bookSeat(
    workspaceId: string,
    seatId: string,
    selectedDate: string
  ): Promise<ISeat | null> {
    return null;
  }
}
