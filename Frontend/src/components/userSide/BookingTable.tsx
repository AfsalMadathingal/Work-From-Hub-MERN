import React, { useState, useEffect } from "react";
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone, isWeekend } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { IWorkspace } from "../../@types/workspace";
import { toast } from "react-toastify";
import {
  getAvailableSeats,
  getSingleWorkspace,
} from "../../services/userServices";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { setLoading } from "../../redux/slices/userSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BookingTable = () => {
  const now = today(getLocalTimeZone());
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [seatIdSelected, setIdSeatSelected] = useState("");
  const [selectedDate, setSelectedDate] = useState();
  const [dateSelected, setDateSelected] = useState(false);
  const [availableSeats, setAvailableSeats] = useState<string[]>([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);
  const [tables, setTables] = useState<any[]>([]);
  const { id } = useParams();
  const { state } = useLocation();
  const { workspace } = state || {};
  const [workspaceData, setWorkspace] = useState<IWorkspace>(workspace);
  const [currentTableIndex, setCurrentTableIndex] = useState(0);
  const navigate = useNavigate();

  const toggleSeat = (seatKey: string, seatId: string) => {
    setSelectedSeat(selectedSeat === seatKey ? null : seatKey);
    setIdSeatSelected(seatId);
  };

  const { locale } = useLocale();
  const minDate = now;
  const maxDate = now.add({ days: 10 });

  const isDateUnavailable = (date: any) => {
    return (
      isWeekend(date, locale) ||
      date.compare(minDate) < 0 ||
      date.compare(maxDate) > 0
    );
  };

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    setDateSelected(true);
  };

  const fetchAvailableSeats = async (selectedDate: string) => {
    try {
      dispatch(setLoading(true));
      const workspaceResponse = await getSingleWorkspace(id as string);
      const seatsAvailableResponse = await getAvailableSeats(id as string);

      if (
        workspaceResponse.status === 200 &&
        seatsAvailableResponse.status === 200
      ) {
        const seatData = seatsAvailableResponse.data.data;

        console.log("====================================");
        console.log(selectedDate);
        console.log("====================================");

        const availableSeatsArray = seatData
          .filter((seat: any) => {
            const availability = seat.availability[selectedDate];
            return (
              availability === undefined ||
              availability === null ||
              availability === true
            );
          })
          .map((seat: any) => `${seat.tableNumber}-${seat.seatNumber}`);

        console.log("====================================");
        console.log(availableSeats);
        console.log("====================================");

        setAvailableSeats(availableSeatsArray);

        const groupedTables = seatData.reduce((tables: any[], seat: any) => {
          let table = tables.find((t) => t.tableNumber === seat.tableNumber);
          if (!table) {
            table = { tableNumber: seat.tableNumber, seats: [] };
            tables.push(table);
          }
          table.seats.push(seat);
          table.seats.sort((a, b) => a.seatNumber - b.seatNumber);
          return tables;
        }, []);

        console.log(groupedTables);

        setTables(groupedTables);
        setWorkspace(workspaceResponse.data.data);
      }
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleBooking = async () => {
    navigate(
      `/workspace/${id}/booking?seat=${selectedSeat}&seatId=${seatIdSelected}&date=${selectedDate}`
    );
    console.log("Booked seat:", selectedSeat);
  };

  const nextTable = () => {
    setCurrentTableIndex((prevIndex) => (prevIndex + 1) % tables.length);
  };

  const prevTable = () => {
    setCurrentTableIndex(
      (prevIndex) => (prevIndex - 1 + tables.length) % tables.length
    );
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h2 className="text-xl font-bold mb-4">{workspaceData.buildingName}</h2>
        <p>
          {workspaceData.state}, {workspaceData.district}
        </p>

        <div className="flex flex-col items-center mb-4">
          <h3 className="font-semibold text-lg mb-2">Select Date</h3>
          <p className="p-2">Please select a date to check available seats</p>
          <Calendar
            aria-label="Select a date"
            isDateUnavailable={isDateUnavailable}
            onChange={handleDateChange}
            value={selectedDate}
          />
        </div>

        <div className="flex justify-center mb-4">
          <button
            disabled={!dateSelected}
            onClick={() => fetchAvailableSeats(selectedDate.toString())}
            className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-400 transition duration-300"
          >
            Check Available Seats
          </button>
        </div>

        {dateSelected && tables.length > 0 && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={prevTable}
                className="p-2 bg-orange-100 rounded-full"
              >
                <ChevronLeft className="w-6 h-6 text-orange-500" />
              </button>
              <h3 className="font-semibold text-lg">
                Table {tables[currentTableIndex].tableNumber}
              </h3>
              <button
                onClick={nextTable}
                className="p-2 bg-orange-100 rounded-full"
              >
                <ChevronRight className="w-6 h-6 text-orange-500" />
              </button>
            </div>

            <div className="flex justify-center w-full space-x-8">
              {/* Left side (first half of the seats) */}
              <div className="flex flex-col space-y-2">
                {tables[currentTableIndex].seats
                  .slice(
                    0,
                    Math.ceil(tables[currentTableIndex].seats.length / 2)
                  )
                  .map((seat: any) => {
                    const seatKey = `${tables[currentTableIndex].tableNumber}-${seat.seatNumber}`;
                    const seatId = `${seat._id}`;
                    const isSelected = selectedSeat === seatKey;
                    const isAvailable = availableSeats.includes(seatKey);

                    return (
                      <button
                        key={seatKey}
                        onClick={() =>
                          isAvailable && toggleSeat(seatKey, seatId)
                        }
                        className={`w-10 h-10 rounded-full border-2 
                        ${
                          isSelected
                            ? "bg-orange-500 text-white"
                            : isAvailable
                            ? "bg-white text-black border-orange-500"
                            : "bg-gray-200 text-gray-400"
                        } 
                        hover:bg-orange-400 hover:text-white transition duration-300`}
                        disabled={!isAvailable}
                      >
                        {seat.seatNumber}
                      </button>
                    );
                  })}
              </div>

              {/* Table visualization */}
              <div className="bg-brown-500 w-24 h-34 rounded-lg shadow-lg flex justify-center items-center">
                <p className="text-orange-500 text-center">Table</p>
              </div>

              {/* Right side (second half of the seats) */}
              <div className="flex flex-col space-y-2">
                {tables[currentTableIndex].seats
                  .slice(Math.ceil(tables[currentTableIndex].seats.length / 2))
                  .map((seat: any) => {
                    const seatKey = `${tables[currentTableIndex].tableNumber}-${seat.seatNumber}`;
                    const isSelected = selectedSeat === seatKey;
                    const isAvailable = availableSeats.includes(seatKey);

                    const seatId = `${seat._id}`;
                    return (
                      <button
                        key={seatKey}
                        onClick={() =>
                          isAvailable && toggleSeat(seatKey, seatId)
                        }
                        className={`w-10 h-10 rounded-full border-2 
                        ${
                          isSelected
                            ? "bg-orange-500 text-white"
                            : isAvailable
                            ? "bg-white text-black border-orange-500"
                            : "bg-gray-200 text-gray-400"
                        } 
                        hover:bg-orange-400 hover:text-white transition duration-300`}
                        disabled={!isAvailable}
                      >
                        {seat.seatNumber}
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        )}

        {selectedSeat && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleBooking}
              className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-400 transition duration-300"
            >
              Confirm Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingTable;
