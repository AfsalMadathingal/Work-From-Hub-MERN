import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Star, Wifi, Battery } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
  getAvailableSeats,
  getReviews,
  getSingleWorkspace,
} from "../../services/userServices";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { setLoading } from "../../redux/slices/userSlice";
import WorkspaceSkeleton from "./WorkspaceSkeleton";
import {
  FaArrowLeft,
  FaCalendar,
  FaChair,
  FaClock,
  FaLocationArrow,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRupeeSign,
  FaTicketAlt,
} from "react-icons/fa";
import ReviewForm from "./Review";

const WorkspaceView = () => {
  const [workspace, setWorkspace] = useState({});
  const [reviews, setReviews] = useState([]);
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
            if (el.isAvailable) acc++;
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

  const fetchReviews = async () => {
    try {
      const response = await getReviews(id as string);
      if (response.status === 200) setReviews(response.data.data);
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchDetails();
    fetchReviews();
  }, []);

  return (
    <>
      {loading || !workspace ? (
        <WorkspaceSkeleton />
      ) : (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-4">
          <div className="max-w-5xl mx-auto px-4">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-6">
              <button
                onClick={() => window.history.back()}
                className="p-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <FaArrowLeft className="text-gray-600 dark:text-gray-300" />
              </button>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {workspace.buildingName}
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">
                  {workspace.district}
                </span>
              </h1>
            </div>

            {/* Main Content */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              {/* Image Carousel */}
              <div className="h-[400px]">
                <Carousel showThumbs={false} showStatus={false}>
                  {workspace.photos?.length > 0 ? (
                    workspace.photos.map((image: string, index: number) => (
                      <div key={index} className="h-[400px]">
                        <img src={image} alt="Office" className="object-cover w-full h-full" />
                      </div>
                    ))
                  ) : (
                    <div className="h-[400px] flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                      <p className="text-gray-500 dark:text-gray-400">No photos available</p>
                    </div>
                  )}
                  {workspace.video && (
                    <div className="h-[400px]">
                      <ReactPlayer url={workspace.video} width="100%" height="100%" controls />
                    </div>
                  )}
                </Carousel>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                {[
                  { icon: FaChair, label: "Seats", value: workspace.seatsPerTable * workspace.tablesAvailable },
                  { icon: FaClock, label: "Hours", value: workspace.timing },
                  { icon: FaRupeeSign, label: "Price", value: `₹${workspace?.pricePerSeat}` },
                  { icon: FaCalendar, label: "Days", value: workspace.workingDays },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <Icon className="mx-auto text-gray-600 dark:text-gray-300 mb-1" />
                    <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
                    <p className="font-medium text-gray-900 dark:text-white">{value}</p>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3 p-4 border-t dark:border-gray-700">
                <Link
                  to={`/workspace/${workspace?._id}/book`}
                  state={{ workspace }}
                  className="flex-1"
                >
                  <button className="w-full py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg flex items-center justify-center gap-2">
                    <FaTicketAlt className="text-sm" />
                    <span>Book Now</span>
                  </button>
                </Link>
                <button
                  onClick={() => window.open(`tel:${workspace?.contactNo}`)}
                  className="px-4 py-2 border-2 border-orange-600 text-orange-600 dark:text-orange-400 dark:border-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700 rounded-lg"
                >
                  <FaPhoneAlt />
                </button>
                <button
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=${workspace.location}`,
                      "_blank"
                    )
                  }
                  className="px-4 py-2 border-2 border-orange-600 text-orange-600 dark:text-orange-400 dark:border-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700 rounded-lg"
                >
                  <FaMapMarkerAlt />
                </button>
              </div>
            </div>

            {/* Amenities */}
            <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Amenities</h3>
              <div className="flex flex-wrap gap-2">
                {["AC", "Free Wifi", "Power Backup"].map((amenity) => (
                  <div key={amenity} className="px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                    <Battery className="text-sm" />
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Reviews</h3>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm">
                    {(reviews.reduce((acc, curr) => acc + curr?.rating, 0) / reviews.length).toFixed(1)}
                    <Star className="inline ml-1" size={14} />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ({reviews.length})
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {reviews.length > 0 ? (
                  reviews.slice(0, 3).map((review: any, index: number) => (
                    <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {review.userId.fullName}
                        </h4>
                        <div className="flex">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="text-yellow-400" size={14} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500 dark:text-gray-400 py-4">No reviews yet</p>
                )}
              </div>
            </div>

            {/* Review Form */}
            <div className="mt-6">
              <ReviewForm workspaceId={workspace?._id} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkspaceView;