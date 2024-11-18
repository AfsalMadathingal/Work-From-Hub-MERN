import React, { useState, useEffect } from 'react';
import { FaImage, FaFilm, FaTrash } from 'react-icons/fa';
import ReactLoading from 'react-loading';

const MediaUploadForm = ({ formData, setFormData ,setSecondStep  , onSubmit }) => {
  const [previews, setPreviews] = useState({
    photos: [],
    video: null
  });
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);


  // Effect to handle existing media in formData
  useEffect(() => {
    const existingPreviews = {
      photos: [],
      video: null
    };

    // Handle existing photos
    if (formData.photos && Array.isArray(formData.photos)) {
      existingPreviews.photos = formData.photos.map(photo => 
        typeof photo === 'string' ? photo : URL.createObjectURL(photo)
      );
    }

    // Handle existing video
    if (formData.video) {
      existingPreviews.video = typeof formData.video === 'string' 
        ? formData.video 
        : URL.createObjectURL(formData.video);
    }

    setPreviews(existingPreviews);
  }, [formData]);

  const handleChange = (e) => {
    const { name, files } = e.target;
    
    if (name === 'photos') {
      const newPhotos = Array.from(files);
      setFormData(prev => ({
        ...prev,
        photos: [...(prev.photos || []), ...newPhotos]
      }));

      // Create preview URLs for new photos
      const newPreviewUrls = newPhotos.map(file => URL.createObjectURL(file));
      setPreviews(prev => ({
        ...prev,
        photos: [...prev.photos, ...newPreviewUrls]
      }));
    }
    
    if (name === 'video' && files[0]) {
      setFormData(prev => ({
        ...prev,
        video: files[0]
      }));
      
      // Create preview URL for video
      setPreviews(prev => ({
        ...prev,
        video: URL.createObjectURL(files[0])
      }));
    }
  };

  const removePreview = (type, index) => {
    if (type === 'photos') {
      const newPhotos = [...previews.photos];
      const newFormDataPhotos = [...(formData.photos || [])];
      
      newPhotos.splice(index, 1);
      newFormDataPhotos.splice(index, 1);
      
      setPreviews(prev => ({ ...prev, photos: newPhotos }));
      setFormData(prev => ({ ...prev, photos: newFormDataPhotos }));
    }
    
    if (type === 'video') {
      setPreviews(prev => ({ ...prev, video: null }));
      setFormData(prev => ({ ...prev, video: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-md mt-4">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        {/* Photos upload section with previews */}
        <div className="col-span-full md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Add Photos
          </label>
          <div className="relative">
            <input
              type="file"
              name="photos"
              onChange={handleChange}
              multiple
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <button className="mt-1 flex items-center justify-center w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-green-400 dark:bg-green-600 text-white font-semibold hover:bg-green-600 dark:hover:bg-green-700 transition duration-150 ease-in-out">
              <FaImage className="h-5 w-5 mr-2" />
              Choose Photos
            </button>
          </div>
          
          {/* Photo previews */}
          {previews.photos.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {previews.photos.map((preview, index) => (
                <div key={index} className="relative">
                  <img 
                    src={preview} 
                    alt={`Preview ${index + 1}`} 
                    className="w-24 h-24 object-cover rounded"
                  />
                  <button
                    type="button"
                    onClick={() => removePreview('photos', index)}
                    className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                  >
                    <FaTrash className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Video upload section with preview */}
        <div className="col-span-full md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Add Video
          </label>
          <div className="relative">
            <input
              type="file"
              name="video"
              onChange={handleChange}
              accept="video/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <button className="mt-1 flex items-center justify-center w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-blue-400 dark:bg-blue-600 text-white font-semibold hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-150 ease-in-out">
              <FaFilm className="h-5 w-5 mr-2" />
              Choose Video
            </button>
          </div>
          
          {/* Video preview */}
          {previews.video && (
            <div className="relative mt-2">
              <video 
                src={previews.video} 
                controls 
                className="w-full max-h-64 rounded"
              />
              <button
                type="button"
                onClick={() => removePreview('video')}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
              >
                <FaTrash className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Navigation buttons */}


        <div className="col-span-full flex justify-between mt-4">
          <button
            type="button"
            onClick={() => setSecondStep(false)}
            className="px-6 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded hover:bg-gray-300 dark:hover:bg-gray-500"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-orange-500 dark:bg-orange-600 text-white font-semibold rounded hover:bg-orange-600 dark:hover:bg-orange-700"
          >
            {loading ? (
              <ReactLoading
                type="bars"
                color="white"
                height={20}
                width={20}
              />
            ) : (
              "SUBMIT FOR REVIEW"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MediaUploadForm;