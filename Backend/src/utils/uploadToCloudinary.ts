import cloudinary from './cloudinaryConfig';

interface UploadResponse {
  url: string;
  public_id: string;
}

// Function to upload image to Cloudinary
export const uploadToCloudinary = async (filePath: string): Promise<UploadResponse> => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'your_folder_name', // Optional: specify a folder to store images
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
