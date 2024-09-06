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
