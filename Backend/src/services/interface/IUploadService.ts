import { UploadResponse } from "../../utils/uploadToCloudinary";


export interface IUploadService {

    uploadSinglePhoto(path:string):Promise<UploadResponse>  ;

}