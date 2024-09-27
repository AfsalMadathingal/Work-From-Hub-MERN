import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Star, Wifi, Battery } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getAvailableSeats,
  getSingleWorkspace,
} from "../../services/userServices";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { setLoading } from "../../redux/slices/userSlice";
import WorkspaceSkeleton from "./WorkspaceSkeleton";
import { IWorkspace } from "../../@types/workspace";
import {
  FaArrowAltCircleDown,
  FaArrowLeft,
  FaCalendar,
  FaChair,
  FaClock,
  FaLocationArrow,
  FaMap,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRupeeSign,
  FaTicketAlt,
} from "react-icons/fa";

const WorkspaceView = () => {
  const [workspace, setWorkspace] = useState({});
  const [availableSeats, setAvailableSeats] = useState(0);
  const { loading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const { id } = useParams<string>();

  const fetchDetails = async () => {
    try {
      dispatch(setLoading(true));
      const response = await getSingleWorkspace(id as string);
      if (response.status === 200) {
        const seatsAvailable = await getAvailableSeats(id as string);
        if (seatsAvailable.status === 200) {
          const seatData = seatsAvailable.data.data;
          const available = seatData.reduce((acc: number, el) => {
            if (el.isAvailable) {
              acc++;
            }
            return acc;
          }, 0);
          setAvailableSeats(available);
        }
      }
      await new Promise((resolve) => setTimeout(resolve, 300));
      setWorkspace(response.data.data);
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      toast.error("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchDetails();
  }, []);

  return (
    <>
      {loading || !workspace ? (
        <WorkspaceSkeleton />
      ) : (
        <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg mt-6">
          <div className="bg-gray-100 flex  items-center rounded-lg ps-4 pt-1 pb-1 mb-1">
            <FaArrowLeft onClick={() => window.history.back()}  className="text-orange-500 font-bold text-2xl me-2 cursor-pointer " />
            <div>
              <h1 className="text-2xl font-bold mb-2 text-gray-800">
                {workspace.buildingName}
              </h1>
              <h2 className="text-2xl text-gray-600 mb-1">
                {workspace.district}
              </h2>
            </div>
          </div>

          <div className="grid bg-orange-50 grid-cols-1 lg:grid-cols-2 gap-8 mb-8 rounded-lg shadow-xl">
            <Carousel
              showThumbs={false}
              showStatus={false}
              className="rounded-lg overflow-hidden"
            >
              {workspace.photos && workspace.photos.length > 0 ? (
                workspace.photos.map((image: string, index: number) => (
                  <div key={index} className="relative w-full h-96">
                    <img
                      src={image}
                      alt="Office space"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                ))
              ) : (
                <div className="relative w-full h-96 flex items-center justify-center bg-gray-200 rounded-lg">
                  <p className="text-gray-600">No photos available</p>
                </div>
              )}

              {workspace.video && (
                <div className="relative w-full h-96">
                  <ReactPlayer
                    controls
                    width="100%"
                    height="100%"
                    className="absolute top-0 left-0 h-full rounded-lg"
                    url={workspace.video}
                  />
                </div>
              )}
            </Carousel>

            <div className="space-y-2 p-12">
              <div className="flex  items-center text-lg text-gray-700">
                <FaChair className="mr-2" />
                <strong> Seat Available:</strong>
                <p className="ml-2">
                  {workspace.seatsPerTable * workspace.tablesAvailable}
                </p>
              </div>
              <div className="flex items-center text-lg text-gray-700">
                <FaClock className="mr-2" />
                <strong>Open Hours:</strong>
                <p className="ml-2">{workspace.timing}</p>
              </div>
              <div className="flex items-center text-lg text-gray-700">
                <FaCalendar className="mr-2" />
                <strong>Working Days:</strong>
                <p className="ml-2">{workspace.workingDays}</p>
              </div>
              <div className="flex items-center text-lg text-gray-700">
                <FaRupeeSign className="mr-2" />
                <strong>Price:</strong>
                <p className="ml-2">₹{workspace?.pricePerSeat}/Seat</p>
              </div>
              <div className="flex items-center text-lg text-gray-700">
                <FaMapMarkerAlt className="mr-2" />
                <strong>Location:</strong>
                <p className="ml-2">
                  {workspace.state + " " + workspace.district}
                </p>
                <FaLocationArrow
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=${workspace.location}`,
                      "_blank"
                    )
                  }
                  className="m-5 text-blue-700 cursor-pointer"
                />
              </div>
              <div className="flex items-center text-lg text-gray-700">
                <FaPhoneAlt className="mr-2" />
                <strong>Contact:</strong>
                <p className="ml-2">+91 {workspace.contactNo}</p>
              </div>
              <div className="flex items-center justify-center mt-8 space-x-4">
                <Link
                  state={{ workspace }}
                  to={`/workspace/${workspace?._id}/book`}
                >
                  <button className="bg-orange-500 flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-600 transition">
                    <FaTicketAlt />
                    Book Seat
                  </button>
                </Link>

                <button className="border border-orange-500 text-orange-500 font-semibold px-6 py-3 rounded-lg hover:bg-orange-100 transition">
                  Book for Team
                </button>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Amenities
            </h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center text-gray-700">
                <Battery className="mr-2" /> AC
              </div>
              <div className="flex items-center text-gray-700">
                <Wifi className="mr-2" /> Free Wifi
              </div>
              <div className="flex items-center text-gray-700">
                <Battery className="mr-2" /> Power Backup
              </div>
            </div>
            <button className="text-orange-500 mt-3 hover:underline">
              Show more
            </button>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Ratings and Reviews
            </h3>
            <div className="flex items-center mb-6">
              <div className="bg-green-500 text-white p-4 rounded-lg mr-4">
                <span className="text-2xl font-bold">3.7</span>
                <Star className="inline-block ml-1 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">GOOD</p>
                <p className="text-sm text-gray-500">100 Ratings</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-b pb-4">
                <h4 className="font-semibold text-gray-800">
                  Afsal Madathingal
                </h4>
                <p className="text-gray-600">
                  I am a regular customer at this place. It's a great atmosphere
                  to work in, with no disturbances. The workspace is fresh and
                  clean, making it an ideal place to be productive.
                </p>
              </div>
            </div>

            <button className="text-orange-500 mt-6 hover:underline">
              View More
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkspaceView;
