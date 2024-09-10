import React, { useState, useRef } from 'react';
import { GoogleMap, useLoadScript, Marker, Autocomplete } from '@react-google-maps/api';
import { FaLocationArrow, FaMap, FaWindowClose } from 'react-icons/fa';
import { IWorkspace } from '../../@types/workspace';
import { submitWorkspaceData } from '../../services/BuserService';
import { toast } from 'react-toastify';
import { validateWorkspaceSubmission } from '../../utils/BUserValidator';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { setError } from '../../redux/slices/businessUserSlice';



const BuildingForm: React.FC = () => {
  const [formData, setFormData] = useState<IWorkspace>({
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
  });

  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [mapCenter, setMapCenter] = useState({ lat: 20.5937, lng: 78.9629 }); // Default center (India)
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const {error} = useSelector((state: RootState) => state.businessUser);
  const dispatch = useDispatch()

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API, // Replace with your Google Maps API key
    libraries: ['places'], // Include the Places library
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files : value,
    }));
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

    const validationError = validateWorkspaceSubmission(formData);

    if(validationError) {
      dispatch(setError(validationError));
      toast.error(
        "Please fill all the required fields"
      )
      return
    }

    
    


    try {
      
      const response = await submitWorkspaceData(formData);

      console.log('====================================');
      console.log(response);
      toast.success('Data submitted successfully');
      console.log('====================================');

    } catch (error) {

      toast.error('Something went wrong');
      
    }
    

    // Add form submission logic here
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white border border-gray-300 rounded-md shadow-md mt-4">
      <h2 className="text-center text-xl font-bold text-orange-500 mb-4">
        FILL THE FOLLOWING DETAILS
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium">Building Name</label>
          <input
            type="text"
            name="buildingName"
            value={formData.buildingName}
            onChange={handleChange}
            placeholder="Enter Building name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {error?.buildingName && <p className="text-red-500 mt-1">{error?.buildingName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Enter State"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {error?.state && <p className="text-red-500 mt-1">{error?.state}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">District</label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            placeholder="Enter District"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {error?.district && <p className="text-red-500 mt-1">{error?.district}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Location on MAP</label>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Google map location"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
            <button
              type="button"
              onClick={() => setIsMapModalOpen(true)}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
              <FaLocationArrow/>
            </button>
          </div>
          {error?.location && <p className="text-red-500 mt-1">{error?.location}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Pin Code</label>
          <input
            type="text"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            placeholder="Enter Pin Code"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {error?.pinCode && <p className="text-red-500 mt-1">{error?.pinCode}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Street</label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            placeholder="Enter Street"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {error?.street && <p className="text-red-500 mt-1">{error?.street}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Contact No</label>
          <input
            type="text"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            placeholder="Enter Contact Number"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {error?.contactNo && <p className="text-red-500 mt-1">{error?.contactNo}</p>}
        </div>
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
            name="ac"
            checked={formData.ac}
            onChange={handleChange}
            className="h-4 w-4"
          />
          <label>AC</label>
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
        <div className="col-span-full md:col-span-2">
          <label className="block text-sm font-medium">Add Photos</label>
          <input
            type="file"
            name="photos"
            onChange={handleChange}
            multiple
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {error?.photos && <p className="text-red-500 mt-1">{error?.photos}</p>}
        </div>
        <div className="col-span-full md:col-span-2">
          <label className="block text-sm font-medium">Add Video</label>
          <input
            type="file"
            name="video"
            onChange={handleChange}
            accept="video/*"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {error?.video && <p className="text-red-500 mt-1">{error?.video}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">How many tables available?</label>
          <input
            type="number"
            name="tablesAvailable"
            value={formData.tablesAvailable}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {error?.tablesAvailable && <p className="text-red-500 mt-1">{error?.tablesAvailable}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">How many seats each table has?</label>
          <input
            type="number"
            name="seatsPerTable"
            value={formData.seatsPerTable}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {error?.seatsPerTable && <p className="text-red-500 mt-1">{error?.seatsPerTable}</p>}
        </div>
        <div className="col-span-full flex justify-center mt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600"
          >
            SUBMIT FOR REVIEW
          </button>

          
        </div>

      </form>

      {isMapModalOpen && (
        <div 
        onClick={() => setIsMapModalOpen(false)}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-2xl">
          <button
              type="button"
              onClick={() => setIsMapModalOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
            <FaWindowClose/>  Close
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
                  mapContainerStyle={{ width: '100%', height: '400px' }}
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
    </div>
  );
};

export default BuildingForm;
