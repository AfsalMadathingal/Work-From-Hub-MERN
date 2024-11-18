import React, { useState, useRef, useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import {
  FaFilm,
  FaImage,
  FaLocationArrow,
  FaWindowClose,
  FaTrash,
} from "react-icons/fa";
import { IWorkspace } from "../../@types/workspace";
import { submitWorkspaceData } from "../../services/BuserService";
import toast from "react-hot-toast";
import { validateWorkspaceSubmission } from "../../utils/BUserValidator";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { setError } from "../../redux/slices/businessUserSlice";
import ReactLoading from "react-loading";
import { setLoading } from "../../redux/slices/businessUserSlice";

import AnimatedPage from "../Animation";
import { useNavigate, useParams } from "react-router-dom";
import { getWorkspace } from "../../services/adminService";
import MediaUploadForm from "./MediaUploadForm";

const BuildingFormEdit: React.FC = () => {
  const navigate = useNavigate();
  const workspaceId = useParams().workspaceId;
  const [formData, setFormData] = useState<Partial<IWorkspace>>({});
  const [previews, setPreviews] = useState<{
    photos: string[];
    video: string | null;
  }>({
    photos: [],
    video: null,
  });

  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [mapCenter, setMapCenter] = useState({ lat: 20.5937, lng: 78.9629 }); 
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const error = useSelector(
    (state: RootState) => state.businessUser.error
  ) as { [key: string]: string };

  const {loading} = useSelector((state:RootState)=>state.businessUser)
  const [secondStep, setSecondStep] = useState(false);
  const dispatch = useDispatch();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API,
    libraries: ["places"],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type } = e.target;
    
    if (type === "file") {
      const files = (e.target as HTMLInputElement).files;
      
      if (name === "photos") {
        const photoFiles = files ? Array.from(files) : null;
        setFormData((prev) => ({
          ...prev,
          [name]: photoFiles,
          imageAdded: true,
        }));
  
        if (photoFiles) {
          const newPreviews = photoFiles.map(file => URL.createObjectURL(file));
          setPreviews(prev => ({
            ...prev,
            photos: newPreviews
          }));
        }
      } else if (name === "video") {
        const videoFile = files && files.length > 0 ? files[0] : null;
        setFormData((prev) => ({
          ...prev,
          [name]: videoFile,
          videoAdded: true,
        }));
  
        if (videoFile) {
          setPreviews(prev => ({
            ...prev,
            video: URL.createObjectURL(videoFile)
          }));
        }
      }
    } else if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: e.target.value,
      }));
    }
  };

  const removePreview = (type: 'photos' | 'video', index?: number) => {
    if (type === 'photos') {
      // Remove specific photo preview
      if (index !== undefined) {
        setPreviews(prev => ({
          ...prev,
          photos: prev.photos.filter((_, i) => i !== index)
        }));
        // Update form data
        setFormData(prev => {
          const updatedPhotos = prev.photos ? 
            prev.photos.filter((_, i) => i !== index) : 
            [];
          return {
            ...prev,
            photos: updatedPhotos,
            imageAdded: updatedPhotos.length > 0
          };
        });
      }
    } else {
      // Remove video preview
      setPreviews(prev => ({
        ...prev,
        video: null
      }));
      // Update form data
      setFormData(prev => ({
        ...prev,
        video: null,
        videoAdded: false
      }));
    }
  };

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    const lat = e.latLng?.lat();
    const lng = e.latLng?.lng();
    if (lat && lng) {
      setMapCenter({ lat, lng });
      setFormData((prev) => ({
        ...prev,
        location: `${lat},${lng}`,
      }));
      setIsMapModalOpen(false);
    }
  };

  const handlePlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry && place.geometry.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        setMapCenter({ lat, lng });
        setFormData((prev) => ({
          ...prev,
          location: `${lat},${lng}`,
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));
    const validationError = validateWorkspaceSubmission(formData);

    if (validationError) {
      dispatch(setError(validationError));
      dispatch(setLoading(false));

      console.log('====================================');
      console.log(validationError);
      console.log('====================================');
      toast.error("Please fill all the required fields");
      return;
    }

    const formDataToSend = new FormData();

    // Append all form data to the FormData object
    Object.keys(formData).forEach((key) => {
      if (key === "photos") {
        if (formData[key]) {
          for (let i = 0; i < formData[key].length; i++) {
            formDataToSend.append("photos", formData[key][i]);
          }
        }
      } else if (key === "video") {
        if (formData[key]) {
          formDataToSend.append("video", formData[key]);
        }
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await submitWorkspaceData(formDataToSend);

      ;
      if (response?.data?.success) {
        toast.success("Data submitted successfully wait for admin approval");
        dispatch(setLoading(false));
        dispatch(setError({}));
        setFormData({
          buildingName: "",
          state: "",
          district: "",
          location: "",
          pinCode: "",
          street: "",
          contactNo: "",
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
          timing: "",
          workingDays: "",
        });
        navigate("/business/workspace-manage/submission");
        return;
      }

      toast.error("Something went wrong");
      dispatch(setLoading(false));
      dispatch(setError({}));
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const fetchWorkspaceData = async ()=>{

    try {

      const response = await getWorkspace(workspaceId as string)

   console.log(response);
   
   setFormData(response?.data.data)
      
    } catch (error) {
      console.error(error);
      
      toast.error("something went wrong")
    }
  }

  useEffect(() => {
    fetchWorkspaceData()
    dispatch(setError({}));

  }, []);



  return (
    <div className="dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      <AnimatedPage>
        {!secondStep ? (
          <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-md mt-4">
            <h2 className="text-center text-xl font-bold text-orange-500 dark:text-orange-400 mb-4">
              FILL THE FOLLOWING DETAILS
            </h2>
            <form
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              onSubmit={handleSubmit}
            >
              {/* Existing form fields, add dark mode classes to inputs */}
              <div>
                <label className="block text-sm font-medium dark:text-gray-300">
                  Building Name
                </label>
                <input
                  type="text"
                  name="buildingName"
                  value={formData.buildingName}
                  onChange={handleChange}
                  placeholder="Enter Building name"
                  className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded"
                />
                {/* Other existing elements remain the same */}
              </div>
              <div>
                <label className="block text-sm font-medium">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter State"
                  className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded"
                />
                {error?.state && (
                  <p className="text-red-500 mt-1">{error?.state}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">District</label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  placeholder="Enter District"
                  className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded"
                />
                {error?.district && (
                  <p className="text-red-500 mt-1">{error?.district}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Location on MAP
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Google map location"
                    className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded"
                    />
                  <button
                    type="button"
                    onClick={() => setIsMapModalOpen(true)}
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                  >
                    <FaLocationArrow />
                  </button>
                </div>
                {error?.location && (
                  <p className="text-red-500 mt-1">{error?.location}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">Pin Code</label>
                <input
                  type="text"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  placeholder="Enter Pin Code"
                  className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded"
                />
                {error?.pinCode && (
                  <p className="text-red-500 mt-1">{error?.pinCode}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">Street</label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  placeholder="Enter Street"
                  className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded"
                />
                {error?.street && (
                  <p className="text-red-500 mt-1">{error?.street}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">Contact No</label>
                <input
                  type="text"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  placeholder="Enter Contact Number"
                  className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded"
                />
                {error?.contactNo && (
                  <p className="text-red-500 mt-1">{error?.contactNo}</p>
                )}
              </div>

              <div className="flex items-center space-x-2 ">
                <input
                  type="checkbox"
                  name="ac"
                  checked={formData.ac}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <label>AC</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="powerBackup"
                    checked={formData.powerBackup}
                    onChange={handleChange}
                    className="h-4 w-4"
                  />
                  <label>Power Backup</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="bathroom"
                    checked={formData.bathroom}
                    onChange={handleChange}
                    className="h-4 w-4"
                  />
                  <label>Bathroom</label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">
                  How many tables available?
                </label>
                <input
                  type="number"
                  name="tablesAvailable"
                  value={formData.tablesAvailable}
                  onChange={handleChange}
                  min="0"
                  className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded"
                />
                {error?.tablesAvailable && (
                  <p className="text-red-500 mt-1">{error?.tablesAvailable}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">
                  How many seats each table has?
                </label>
                <input
                  type="number"
                  name="seatsPerTable"
                  value={formData.seatsPerTable}
                  onChange={handleChange}
                  min="0"
                  className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded"
                />
                {error?.seatsPerTable && (
                  <p className="text-red-500 mt-1">{error?.seatsPerTable}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">
                  How much will you price per seat?
                </label>
                <input
                  type="number"
                  name="pricePerSeat"
                  value={formData.pricePerSeat}
                  onChange={handleChange}
                  min="0"
                  className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded"
                />
                {error?.pricePerSeat && (
                  <p className="text-red-500 mt-1">{error?.pricePerSeat}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">Timing</label>
                <select
                  name="timing"
                  value={formData.timing}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded"
                >
                  <option value="">Select timing</option>
                  <option value="08:00-05:00">8:00 AM-05:00 PM</option>
                  <option value="09:00-06:00">9:00 AM-06:00 PM</option>
                  <option value="10:00-07:00">10:00 AM-07:00 PM</option>
                  <option value="11:00-08:00">11:00 AM-08:00 PM</option>
                  <option value="12:00-10:00">12:00 PM -10:00 PM</option>
                </select>
                <p className="text-xs text-orange-500">
                  Note: Please choose one of the available time slots from the
                  dropdown that works best for your operating hours.
                </p>

                {error?.timing && (
                  <p className="text-red-500 mt-1">{error?.timing}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Working days
                </label>
                <select
                  name="workingDays"
                  value={formData.workingDays}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded"
                >
                  <option value="">Select working days</option>
                  <option value="MON-FRI">Monday to Friday</option>
                  <option value="MON-SAT">Monday to Saturday</option>
                  <option value="ALL DAYS">All 7 days</option>
                </select>
                {error?.workingDays && (
                  <p className="text-red-500 mt-1">{error?.workingDays}</p>
                )}
              </div>

              <div className="col-span-full flex justify-center mt-4">
                <button
                  type="submit"
                  onClick={() => setSecondStep(true)}
                  className="px-6 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600"
                >
                  {loading ? (
                    <ReactLoading
                      type="bars"
                      color="white"
                      height={20}
                      width={20}
                    />
                  ) : (
                    "Next >"
                  )}
                </button>
              </div>     
               {isMapModalOpen && (
              <div
                onClick={() => setIsMapModalOpen(false)}
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              >
                <div className="bg-white p-6 rounded-md shadow-md w-full max-w-2xl">
                  <button
                    type="button"
                    onClick={() => setIsMapModalOpen(false)}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                  >
                    <FaWindowClose /> Close
                  </button>
                  {isLoaded ? (
                    <>
                      <Autocomplete
                        onLoad={(autocomplete) => {
                          autocompleteRef.current = autocomplete;
                        }}
                        onPlaceChanged={handlePlaceChanged}
                      >
                        <input
                          type="text"
                          placeholder="Search for a location"
                          className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        />
                      </Autocomplete>
                      <GoogleMap
                        mapContainerStyle={{ width: "100%", height: "400px" }}
                        center={mapCenter}
                        zoom={10}
                        onClick={handleMapClick}
                      >
                        <Marker position={mapCenter} />
                      </GoogleMap>
                    </>
                  ) : (
                    <p>Loading map...</p>
                  )}
                </div>
              </div>
            )}
            </form>
          </div>
        ) : (
          <MediaUploadForm
            formData={formData}
            setFormData={setFormData}
            setSecondStep={setSecondStep}
            onSubmit={handleSubmit}
           />

          // <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-md mt-4">
          //   <form
          //     className="grid grid-cols-1 md:grid-cols-2 gap-4"
          //     onSubmit={handleSubmit}
          //   >
          //     {/* Photos upload section with previews */}
          //     <div className="col-span-full md:col-span-2">
          //       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          //         Add Photos
          //       </label>
          //       <div className="relative">
          //         <input
          //           type="file"
          //           name="photos"
          //           onChange={handleChange}
          //           multiple
          //           className="absolute inset-0 opacity-0 cursor-pointer"
          //         />
          //         <button className="mt-1 flex items-center justify-center w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-green-400 dark:bg-green-600 text-white font-semibold hover:bg-green-600 dark:hover:bg-green-700 transition duration-150 ease-in-out">
          //           <FaImage className="h-5 w-5 mr-2" />
          //           Choose Photos
          //         </button>
          //       </div>
          //       {/* Photo previews */}
          //       {previews.photos.length > 0 && (
          //         <div className="flex flex-wrap gap-2 mt-2">
          //           {previews.photos.map((preview, index) => (
          //             <div key={index} className="relative">
          //               <img 
          //                 src={preview} 
          //                 alt={`Preview ${index + 1}`} 
          //                 className="w-24 h-24 object-cover rounded"
          //               />
          //               <button
          //                 type="button"
          //                 onClick={() => removePreview('photos', index)}
          //                 className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
          //               >
          //                 <FaTrash className="w-3 h-3" />
          //               </button>
          //             </div>
          //           ))}
          //         </div>
          //       )}
          //       {error?.imageAdded && (
          //         <p className="mt-2 text-sm text-red-600">
          //           {error?.imageAdded}
          //         </p>
          //       )}
          //     </div>

          //     {/* Video upload section with preview */}
          //     <div className="col-span-full md:col-span-2">
          //       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          //         Add Video
          //       </label>
          //       <div className="relative">
          //         <input
          //           type="file"
          //           name="video"
          //           onChange={handleChange}
          //           accept="video/*"
          //           className="absolute inset-0 opacity-0 cursor-pointer"
          //         />
          //         <button className="mt-1 flex items-center justify-center w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-blue-400 dark:bg-blue-600 text-white font-semibold hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-150 ease-in-out">
          //           <FaFilm className="h-5 w-5 mr-2" />
          //           Choose Video
          //         </button>
          //       </div>
          //       {/* Video preview */}
          //       {previews.video && (
          //         <div className="relative mt-2">
          //           <video 
          //             src={previews.video} 
          //             controls 
          //             className="w-full max-h-64 rounded"
          //           />
          //           <button
          //             type="button"
          //             onClick={() => removePreview('video')}
          //             className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
          //           >
          //             <FaTrash className="w-4 h-4" />
          //           </button>
          //         </div>
          //       )}
          //       {error?.videoAdded && (
          //         <p className="text-red-500 mt-1">{error?.videoAdded}</p>
          //       )}
          //     </div>

          //     {/* Navigation buttons */}
          //     <div className="col-span-full flex justify-between mt-4">
          //       <button
          //         type="button"
          //         onClick={() => setSecondStep(false)}
          //         className="px-6 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded hover:bg-gray-300 dark:hover:bg-gray-500"
          //       >
          //         Back
          //       </button>
          //       <button
          //         type="submit"
          //         disabled={loading}
          //         className="px-6 py-2 bg-orange-500 dark:bg-orange-600 text-white font-semibold rounded hover:bg-orange-600 dark:hover:bg-orange-700"
          //       >
          //         {loading ? (
          //           <ReactLoading
          //             type="bars"
          //             color="white"
          //             height={20}
          //             width={20}
          //           />
          //         ) : (
          //           "SUBMIT FOR REVIEW"
          //         )}
          //       </button>
          //     </div>
          //   </form>
          // </div>
        )}
      </AnimatedPage>
    </div>
  );
};

export default BuildingFormEdit;