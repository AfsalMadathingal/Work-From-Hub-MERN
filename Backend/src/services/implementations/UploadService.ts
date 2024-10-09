import uploadFileToS3 from "../../utils/s3UploadService";
import UserRepository from "../../repositories/implementations/UserRepository";
import { IUserRepository } from "../../repositories/interface/IUserRepository";
import { IUploadService } from "../../services/interface/IUploadService";
import { uploadMultiplePhotosToCloudinary, UploadResponse, uploadToCloudinary, uploadVideoToCloudinary } from "../../utils/uploadToCloudinary";
import { v4 as uuidv4 } from 'uuid'


export default class UploadService implements IUploadService{

    private userRepository: IUserRepository;

    constructor() {
      this.userRepository = new UserRepository();
    }


     async uploadSinglePhoto(path: string): Promise<UploadResponse>  {

        const uploadResult = await uploadToCloudinary(path);

        return uploadResult
        
    }

    async uploadMultiplePhoto(path: [string]): Promise<UploadResponse[] > {

        const uploadResult = await uploadMultiplePhotosToCloudinary(path)

        console.log(uploadResult);
        return uploadResult
        
    }

    async uploadVideoFile(path: string): Promise<UploadResponse> {

        const uploadResult = await uploadVideoToCloudinary(path)

        return uploadResult
    }

    async uploadVideoToS3(buffer: Buffer): Promise<{ url: string; } | null> {

        const uniqueName = uuidv4();

        const fileUrl = uploadFileToS3.uploadVideo(buffer,uniqueName)

        return fileUrl
    }




   async   uploadSinglePhotoToS3(buffer: Buffer): Promise<string | null> {

    try {

        const uniqueName = uuidv4();

        const fileUrl = uploadFileToS3.uploadSinglePhoto(buffer,uniqueName)

        return  (await fileUrl).url
        
    } catch (error) {

        return null
        
    }
        
    }

    



}