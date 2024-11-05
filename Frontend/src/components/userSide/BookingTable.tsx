import { useState, useEffect } from "react";
import { Calendar, DateValue } from "@nextui-org/react";
import { today, getLocalTimeZone, isWeekend } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
import { useNavigate, useParams } from "react-router-dom";
import { IWorkspace } from "../../@types/workspace";
import toast from "react-hot-toast";
import {
  getAvailableSeats,
  getSingleWorkspace,
} from "../../services/userServices";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { setLoading } from "../../redux/slices/userSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReactLoading from "react-loading";
import { ISeat } from "../../@types/seat";


interface Table {
  tableNumber: number;
  seats: ISeat[]; // or define a more specific type for seats if possible
}



const BookingTable = () => {
  const now = today(getLocalTimeZone());
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [seatIdSelected, setIdSeatSelected] = useState("");
const [selectedDate, setSelectedDate] = useState<DateValue>(today(getLocalTimeZone()));
  const [dateSelected, setDateSelected] = useState(false);
  const [availableSeats, setAvailableSeats] = useState<string[]>([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);
  const [tables, setTables] = useState<Table[]>([]);
  const { id } = useParams();
const [workspaceData, setWorkspace] = useState<IWorkspace>({
  _id: '',
  buildingName: '',
  state: '',
  district: '',
  location: '',
  pinCode: '',
  street: '',
  contactNo: '',
  powerBackup: false,
  ac: false,
  bathroom: false,
  tablesAvailable: 0,
  seatsPerTable: 0,
  photos: null,
  video: null,
  imageAdded: false,
  videoAdded: false,
  pricePerSeat: 0,
  timing: '',
  workingDays: '',
  ownerId: '',
  createdAt: '',
  updatedAt: '',
  __v: 0,
});
  const [currentTableIndex, setCurrentTableIndex] = useState(0);
  const navigate = useNavigate();
  const { locale } = useLocale();
  const minDate = now;
  const maxDate = now.add({ days: 10 });

  const toggleSeat = (seatKey: string, seatId: string) => {
    setSelectedSeat(selectedSeat === seatKey ? null : seatKey);
    setIdSeatSelected(seatId);
  };

 


const isDateUnavailable = (date: DateValue) => {
  return (
    isWeekend(date, locale) ||
    date.compare(minDate) < 0 ||
    date.compare(maxDate) > 0
  );
};

const handleDateChange = (date: DateValue) => {
  setSelectedDate(date);
  setDateSelected(true);
};

  const fetchAvailableSeats = async (selectedDate: string) => {
    try {
      dispatch(setLoading(true));
      const workspaceResponse = await getSingleWorkspace(id as string);
      const seatsAvailableResponse = await getAvailableSeats(id as string);

      if (
        workspaceResponse?.status === 200 &&
        seatsAvailableResponse?.status === 200
      ) {
        const seatData = seatsAvailableResponse.data.data;


        const availableSeatsArray = seatData
          .filter((seat: ISeat) => {
            const availability = seat.availability[selectedDate];
            return (
              availability === undefined ||
              availability === null ||
              availability === true
            );
          })
          .map((seat: ISeat) => `${seat.tableNumber}-${seat.seatNumber}`);


        setAvailableSeats(availableSeatsArray);

        const groupedTables = seatData.reduce((tables: Table[], seat: ISeat) => {
          let table = tables.find((t) => t.tableNumber === seat.tableNumber);
          if (!table) {
            table = { tableNumber: seat.tableNumber, seats: [] };
            tables.push(table);
          }
          table.seats.push(seat);
          table.seats.sort((a, b) => a.seatNumber - b.seatNumber);
          return tables;
        }, []);

        

        setTables(groupedTables);
        setWorkspace(workspaceResponse.data.data);
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.error(error);
      dispatch(setLoading(false));
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleBooking = async () => {
    navigate(
      `/workspace/${id}/booking?seat=${selectedSeat}&seatId=${seatIdSelected}&date=${selectedDate}`
    );
    ;
  };

  const nextTable = () => {
    setCurrentTableIndex((prevIndex) => (prevIndex + 1) % tables.length);
  };

  const prevTable = () => {
    setCurrentTableIndex(
      (prevIndex) => (prevIndex - 1 + tables.length) % tables.length
    );
  };

  useEffect(() => {
    const fetchWorkSpace = async () => {
      try {
  
        dispatch(setLoading(true));
        const response = await getSingleWorkspace(id as string);
  
        if (response?.status === 200) {
          dispatch(setLoading(false));
          setWorkspace(response.data.data);
        } else {
          toast.error("Failed to fetch workspace details");
          dispatch(setLoading(false));
          navigate("/");
        }
      } catch (error) {
        console.error(error);
            
        dispatch(setLoading(false));
        navigate("/");
        toast.error("Failed to fetch workspace details");
      }
    };
  
    fetchWorkSpace();
  }, [dispatch, id, navigate]);



  return (
<div className="flex justify-center items-center p-4 min-h-screen bg-gradient-to-br dark:from-gray-800 dark:to-gray-900">
  <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 w-full max-w-3xl border border-gray-200 dark:border-gray-700 transition-transform duration-300 transform hover:scale-105">
    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{workspaceData.buildingName}</h2>
    <p className="text-gray-600 dark:text-gray-400">{workspaceData.state}, {workspaceData.district}</p>

    <div className="flex flex-col items-center mb-6">
      <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">Select Date</h3>
      <p className="text-gray-500 dark:text-gray-300 mb-2">Please select a date to check available seats</p>
      <Calendar
        aria-label="Select a date"
        isDateUnavailable={isDateUnavailable}
        onChange={handleDateChange}
        value={selectedDate}
      />
    </div>

    <div className="flex justify-center mb-6">
      <button
        disabled={!dateSelected}
        onClick={() => fetchAvailableSeats(selectedDate.toString())}
        className="bg-orange-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-orange-400 transition duration-300 flex items-center"
      >
        {loading ? <ReactLoading type="spin" height={20} width={20} color="white" /> : "Check Available Seats"}
      </button>
    </div>

    {dateSelected && tables.length > 0 && (
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <button onClick={prevTable} className="p-2 bg-orange-100 dark:bg-gray-700 rounded-full hover:bg-orange-200 dark:hover:bg-gray-600 transition duration-300">
            <ChevronLeft className="w-6 h-6 text-orange-500 dark:text-orange-400" />
          </button>
          <h3 className="font-semibold text-lg text-gray-800 dark:text-white">Table {tables[currentTableIndex].tableNumber}</h3>
          <button onClick={nextTable} className="p-2 bg-orange-100 dark:bg-gray-700 rounded-full hover:bg-orange-200 dark:hover:bg-gray-600 transition duration-300">
            <ChevronRight className="w-6 h-6 text-orange-500 dark:text-orange-400" />
          </button>
        </div>

        <div className="flex justify-center w-full space-x-8">
          {/* Left side (first half of the seats) */}
          <div className="flex flex-col space-y-2">
            {tables[currentTableIndex].seats.slice(0, Math.ceil(tables[currentTableIndex].seats.length / 2)).map((seat: ISeat) => {
              const seatKey = `${tables[currentTableIndex].tableNumber}-${seat.seatNumber}`;
              const isSelected = selectedSeat === seatKey;
              const isAvailable = availableSeats.includes(seatKey);
              const seatId = `${seat._id}`;

              return (
                <button
                  key={seatKey}
                  onClick={() => isAvailable && toggleSeat(seatKey, seatId)}
                  className={`w-12 h-12 rounded-full border-2 transition duration-300 transform hover:scale-105 
                    ${isSelected ? "bg-orange-500 text-white" : isAvailable ? "bg-white dark:bg-gray-700 text-black border-orange-500" : "bg-gray-200 dark:bg-gray-600 text-gray-400"}`}
                  disabled={!isAvailable}
                >
                  {seat.seatNumber}
                </button>
              );
            })}
          </div>

          {/* Table visualization */}
          <div className="bg-gray-300 dark:bg-gray-600 w-24 h-32 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <p className="text-orange-500 dark:text-orange-300 font-semibold">Table</p>
          </div>

          {/* Right side (second half of the seats) */}
          <div className="flex flex-col space-y-2">
            {tables[currentTableIndex].seats.slice(Math.ceil(tables[currentTableIndex].seats.length / 2)).map((seat: ISeat) => {
              const seatKey = `${tables[currentTableIndex].tableNumber}-${seat.seatNumber}`;
              const isSelected = selectedSeat === seatKey;
              const isAvailable = availableSeats.includes(seatKey);
              const seatId = `${seat._id}`;

              return (
                <button
                  key={seatKey}
                  onClick={() => isAvailable && toggleSeat(seatKey, seatId)}
                  className={`w-12 h-12 rounded-full border-2 transition duration-300 transform hover:scale-105 
                    ${isSelected ? "bg-orange-500 text-white" : isAvailable ? "bg-white dark:bg-gray-700 text-black border-orange-500" : "bg-gray-200 dark:bg-gray-600 text-gray-400"}`}
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

    {tables.length > 0 && (
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
