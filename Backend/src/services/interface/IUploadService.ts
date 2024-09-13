import { UploadResponse } from "../../utils/uploadToCloudinary";


export interface IUploadService {

    uploadSinglePhoto(path:string):Promise<UploadResponse>  ;
    uploadMultiplePhoto(path:[string]): Promise<UploadResponse[]> ;
    uploadVideoFile(path:string):Promise<UploadResponse>  ;

}