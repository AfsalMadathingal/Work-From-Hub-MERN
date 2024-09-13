import cloudinary from './cloudinaryConfig';

export interface UploadResponse {
  url: string;
  public_id: string;
}

// Function to upload image to Cloudinary
export const uploadToCloudinary = async (filePath: string): Promise<UploadResponse> => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'work_from_hub', 
    });

    return {
      url: result.secure_url,
      public_id: result.public_id,
    };
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw new Error('Failed to upload image');
  }
};

export const uploadMultiplePhotosToCloudinary = async (filePaths: string[]): Promise<UploadResponse[]> => {
  try {
    const promises = filePaths.map((filePath) => {
      return cloudinary.uploader.upload(filePath, {
        folder: 'work_from_hub', 
      });
    });

    const results = await Promise.all(promises);

    return results.map((result) => {
      return {
        url: result.secure_url,
        public_id: result.public_id,
      };
    });
  } catch (error) {
    console.error('Error uploading multiple photos to Cloudinary:', error);
    throw new Error('Failed to upload multiple photos');
  }
};

export const uploadVideoToCloudinary = async (filePath: string): Promise<UploadResponse> => {
  try {

    console.log(filePath);
    
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'work_from_hub', 
      resource_type: 'video',
    });

    return {
      url: result.secure_url,
      public_id: result.public_id,
    };
  } catch (error) {
    console.error('Error uploading video to Cloudinary:', error);
    throw new Error('Failed to upload video');
  }
};
