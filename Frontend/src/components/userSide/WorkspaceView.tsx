import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Star, Wifi, Battery, Rewind } from "lucide-react";
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
  
  const fetchReviews = async () => {

    try {

      const response = await getReviews(id as string);

      if (response.status === 200) {
 
        setReviews(response.data.data);
      }

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
<div className="max-w-6xl mx-auto p-4 sm:p-6 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-2xl mt-6">
  <div className="bg-gray-200 dark:bg-gray-700 flex items-center rounded-lg ps-4 pt-2 pb-2 mb-3 shadow-md">
    <FaArrowLeft onClick={() => window.history.back()} className="text-orange-500 font-bold text-2xl me-2 cursor-pointer transition-transform hover:scale-110" />
    <div>
      <h1 className="text-3xl font-bold mb-1 text-gray-800 dark:text-white transition-colors">{workspace.buildingName}</h1>
      <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-1 transition-colors">{workspace.district}</h2>
    </div>
  </div>

  <div className="grid bg-white dark:bg-gray-900 grid-cols-1 lg:grid-cols-2 gap-8 mb-8 rounded-lg shadow-xl">
    <Carousel showThumbs={false} showStatus={false} className="rounded-lg overflow-hidden">
      {workspace.photos && workspace.photos.length > 0 ? (
        workspace.photos.map((image: string, index: number) => (
          <div key={index} className="relative w-full h-96">
            <img src={image} alt="Office space" className="object-cover w-full h-full rounded-lg transform transition-transform duration-300 hover:scale-105" />
          </div>
        ))
      ) : (
        <div className="relative w-full h-96 flex items-center justify-center bg-gray-300 dark:bg-gray-600 rounded-lg">
          <p className="text-gray-600 dark:text-gray-300">No photos available</p>
        </div>
      )}
      {workspace.video && (
        <div className="relative w-full h-96">
          <ReactPlayer controls width="100%" height="100%" className="absolute top-0 left-0 h-full rounded-lg" url={workspace.video} />
        </div>
      )}
    </Carousel>

    <div className="space-y-4 p-12">
      {[
        { icon: FaChair, label: "Seat Available:", value: workspace.seatsPerTable * workspace.tablesAvailable },
        { icon: FaClock, label: "Open Hours:", value: workspace.timing },
        { icon: FaCalendar, label: "Working Days:", value: workspace.workingDays },
        { icon: FaRupeeSign, label: "Price:", value: `₹${workspace?.pricePerSeat}/Seat` },
        {
          icon: FaMapMarkerAlt,
          label: "Location:",
          value: `${workspace.state} ${workspace.district}`,
          action: () => window.open(`https://www.google.com/maps/search/?api=1&query=${workspace.location}`, "_blank"),
        },
        { icon: FaPhoneAlt, label: "Contact:", value: `+91 ${workspace.contactNo}` },
      ].map(({ icon: Icon, label, value, action }, index) => (
        <div key={index} className="flex items-center text-lg text-gray-700 dark:text-gray-300 transition-colors">
          <Icon className="mr-2" />
          <strong>{label}</strong>
          <p className="ml-2">{value}</p>
          {action && <FaLocationArrow onClick={action} className="ml-5 text-blue-700 cursor-pointer transition-transform hover:scale-110" />}
        </div>
      ))}
      <div className="flex items-center justify-center mt-8 space-x-4">
        <Link state={{ workspace }} to={`/workspace/${workspace?._id}/book`}>
          <button className="bg-orange-500 flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-lg shadow transition-transform hover:bg-orange-600 hover:shadow-lg">
            <FaTicketAlt />
            Book Seat
          </button>
        </Link>
        <button onClick={() => window.open(`tel:${workspace?.contactNo}`)} className="border border-orange-500 text-orange-500 font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-orange-100 transition-transform shadow hover:shadow-lg">
          <FaPhoneAlt />
          Call Us
        </button>
      </div>
    </div>
  </div>

  <div className="mb-8">
    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Amenities</h3>
    <div className="flex flex-wrap gap-6">
      {["AC", "Free Wifi", "Power Backup"].map((amenity) => (
        <div key={amenity} className="flex items-center text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 p-2 rounded-lg shadow transition-transform hover:scale-105">
          <Battery className="mr-2" /> {amenity}
        </div>
      ))}
    </div>
    <button className="text-orange-500 mt-3 hover:underline transition-transform">Show more</button>
  </div>

  <div>
    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Ratings and Reviews</h3>
    <div className="flex items-center mb-6">
      <div className="bg-green-500 text-white p-4 rounded-lg mr-4">
        <span className="text-3xl font-bold">{(reviews.reduce((acc, curr) => acc + curr?.rating, 0) / reviews.length).toFixed(1)}</span>
        <Star className="inline-block ml-1 text-white" />
      </div>
      <div>
        <p className="font-semibold text-gray-800 dark:text-white">GOOD</p>
        <p className="text-sm text-gray-500">{reviews?.length}</p>
      </div>
    </div>

    {reviews && reviews.length > 0 ? (
      reviews.map((review: any, index: number) => (
        <div key={index} className="border-b pb-4 transition-transform hover:scale-105">
          <h4 className="font-semibold text-gray-800 dark:text-white">{review.userId.fullName}</h4>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} className="inline-block text-yellow-500" />
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
        </div>
      ))
    ) : (
      <p className="text-gray-600 dark:text-gray-300">No reviews yet.</p>
    )}
    <button className="text-orange-500 mt-6 hover:underline transition-transform">View More</button>
  </div>
  <ReviewForm workspaceId={workspace?._id} />
</div>

  )}
</>

  );
};

export default WorkspaceView;
