import { Request } from "express";
import { IWorkspace } from "../../entities/workspace";
import { WorkspaceRepository } from "../../repositories/implementations/WorkspaceRepository";
import { GetPendingWorkspace, IWorkspaceRepository } from "../../repositories/interface/IWorkspaceRepository";
import { IWorkspaceService } from "../../services/interface/IWorkSpaceService";
import { IBusinessUser } from "../../entities/BusinessUserEntity";
import { IUploadService } from "../../services/interface/IUploadService";
import UploadService from "./UploadService";
import { ISeatRepository } from "../../repositories/interface/ISeatRepository";
import { SeatRepository } from "../../repositories/implementations/SeatRepository";

export default class WorkspaceService implements IWorkspaceService{

    private workspaceRepository: IWorkspaceRepository;
    private uploadService : IUploadService;
    private seatRepository: ISeatRepository;

    constructor(){

        this.workspaceRepository = new WorkspaceRepository()
        this.uploadService = new UploadService()
        this.seatRepository = new SeatRepository()

    }


    async submitWorkspaceListing(
        req: Request & { 
          user: IBusinessUser; 
          files: { 
            photos: { path: string }[];  // Photos array with 'path'
            video?: { path: string }[];  // Optional video array with 'path'
          } 
        }
      ): Promise<IWorkspace | null> {
      
        console.log(req?.user);
        console.log(req.files);
      
        // Extract photo paths
        const photos = req.files?.photos as { path: string }[];
        const photoPaths = photos.map(photo => photo.path);
      
        // Upload photos
        const photoUploads = await this.uploadService.uploadMultiplePhoto(photoPaths as [string]);
      

        
        let videoUploads = await this.uploadService.uploadVideoFile(req.files.video[0].path)
      
        
      
        // Destructure body fields, excluding imageAdded and videoAdded
        const { imageAdded, videoAdded, ...rest } = req.body;
      
        // Prepare data to save, including photos and optionally videos
        const dataToSave = {
          ownerId: req.user.id,
          ...rest,
          photos: photoUploads.map(upload => upload.url),
          video: videoUploads.url  // Add video URLs if available
        };
      
        // Save the data using the repository pattern
        const response = await this.workspaceRepository.create(dataToSave);

        await this.seatRepository.createSeatsForWorkspace(response)
      
        return response;
      }


     async getWorkSpaceSubmission(page: number, limit: number): Promise<GetPendingWorkspace | null> {

      const response = await this.workspaceRepository.findWithPagination(page,limit)


      return response
   
     }


     async getAllWorkspaces(): Promise<IWorkspace[] | null> {
      const response = await this.workspaceRepository.getAllWorkspaces();
      return response;
     }


     async approveWorkspace(id: string): Promise<IWorkspace | null> {
      const response = await this.workspaceRepository.approveWorkspace(id);
      return response;
     }

     
     async rejectWorkspace(id: string): Promise<IWorkspace | null> {
      const response = await this.workspaceRepository.rejectWorkspace(id);
      return response;
     }


     
     async getApprovedWorkspaces(page: number, limit: number): Promise<GetPendingWorkspace | null> {

      const response = await this.workspaceRepository.findWithPagination(page,limit,true)


      return response
   
     }
  
      
}