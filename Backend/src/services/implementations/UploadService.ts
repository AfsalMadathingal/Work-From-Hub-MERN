import UserRepository from "../../repositories/implementations/UserRepository";
import { IUserRepository } from "../../repositories/interface/IUserRepository";
import { IUploadService } from "../../services/interface/IUploadService";
import { uploadMultiplePhotosToCloudinary, UploadResponse, uploadToCloudinary, uploadVideoToCloudinary } from "../../utils/uploadToCloudinary";


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

    



}