import UserRepository from "../../repositories/implementations/UserRepository";
import { IUserRepository } from "../../repositories/interface/IUserRepository";
import { IUploadService } from "../../services/interface/IUploadService";
import { UploadResponse, uploadToCloudinary } from "../../utils/uploadToCloudinary";


export default class UploadService implements IUploadService{

    private userRepository: IUserRepository;

    constructor() {
      this.userRepository = new UserRepository();
    }


     async uploadSinglePhoto(path: string): Promise<UploadResponse>  {

        const uploadResult = await uploadToCloudinary(path);

        return uploadResult
        
    }



}