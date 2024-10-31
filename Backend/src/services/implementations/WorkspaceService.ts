import { Request } from "express";
import { IWorkspace } from "../../entities/workspace";
import { WorkspaceRepository } from "../../repositories/implementations/WorkspaceRepository";
import {
  GetPendingWorkspace,
  IWorkspaceRepository,
} from "../../repositories/interface/IWorkspaceRepository";
import {
  IFilters,
  IWorkspaceService,
} from "../../services/interface/IWorkSpaceService";
import { IBusinessUser } from "../../entities/BusinessUserEntity";
import { IUploadService } from "../../services/interface/IUploadService";
import UploadService from "./UploadService";
import { ISeatRepository } from "../../repositories/interface/ISeatRepository";
import { SeatRepository } from "../../repositories/implementations/SeatRepository";
import uploadFileToS3 from "../../utils/s3UploadService";
import { IBusinessUserRepository } from "../../repositories/interface/IBusinessRepository";
import BusinessRepository from "../../repositories/implementations/BusinessRepository";
import sendMailNotification from "../../utils/mailNotification";

export default class WorkspaceService implements IWorkspaceService {
  private workspaceRepository: IWorkspaceRepository;
  private uploadService: IUploadService;
  private seatRepository: ISeatRepository;
  private bUserRepository: IBusinessUserRepository;

  constructor() {
    this.workspaceRepository = new WorkspaceRepository();
    this.uploadService = new UploadService();
    this.seatRepository = new SeatRepository();
    this.bUserRepository = new BusinessRepository();
  }

  async submitWorkspaceListing(
    req: Request & {
      user: IBusinessUser;
      files: {
        photos?: { path: string; buffer: Buffer; originalname: string }[]; // Photos array with 'path'
        video?: {
          path: string;
          buffer: Buffer;
          originalname: string;
        }[]; // Optional video array with 'path'
      };
    }
  ): Promise<IWorkspace | null> {
    console.log(req?.user);
    console.log(req.files);

    // Extract photo paths
    const photos = req.files?.photos as {
      buffer: Buffer;
      path: string;
      originalname: string;
    }[];

    const photoPaths = photos.map((photo) => photo.path);
    const photoBuffers = photos.map((photo) => photo?.buffer);
    const photoNames = photos.map((photo) => photo.originalname);

    console.log(req.body);

    const photoUploads = await uploadFileToS3.uploadMultiplePhotos(
      photoBuffers as [Buffer],
      photoNames as [string]
    );

    // Upload photos

    // const photoUploads = await this.uploadService.uploadMultiplePhoto(
    //   photoPaths as [string]
    // );

    // let videoUploads = await this.uploadService.uploadVideoFile(
    //   req.files.video[0].path
    // );

    const videoUploads = await uploadFileToS3.uploadVideo(
      req.files.video[0].buffer,
      req.files.video[0].originalname
    );

    // Destructure body fields, excluding imageAdded and videoAdded
    const { imageAdded, videoAdded, ...rest } = req.body;

    // Prepare data to save, including photos and optionally videos
    const dataToSave = {
      ownerId: req.user.id,
      ...rest,
      photos: photoUploads.urls,
      video: videoUploads.url, // Add video URLs if available
    };

    // Save the data using the repository pattern
    const response = await this.workspaceRepository.create(dataToSave);

    await this.seatRepository.createSeatsForWorkspace(response);

    return response;
  }

  async getWorkSpaceSubmission(
    page: number,
    limit: number
  ): Promise<GetPendingWorkspace | null> {
    const response = await this.workspaceRepository.findWithPagination(
      page,
      limit
    );

    return response;
  }

  async getAllWorkspaces(): Promise<IWorkspace[] | null> {
    const response = await this.workspaceRepository.getAllWorkspaces();
    return response;
  }

  async approveWorkspace(id: string): Promise<IWorkspace | null> {
    const response = await this.workspaceRepository.approveWorkspace(id);

    const ownerData = await this.bUserRepository.findById(
      response.ownerId.toString()
    );

    if (response && ownerData) {
      sendMailNotification(
        ownerData.email,
        "You're submission is approved",
        ownerData.fullName,
        `Congratulations ${ownerData.fullName}, your submission has been approved. From now on, you will start getting booking from customers.`
      );
    }

    return response;
  }

  async rejectWorkspace(id: string): Promise<IWorkspace | null> {
    const response = await this.workspaceRepository.rejectWorkspace(id);

    const ownerData = await this.bUserRepository.findById(
      response.ownerId.toString()
    );

    if (response && ownerData) {
      sendMailNotification(
        ownerData.email,
        "You're submission is rejected",
        ownerData.fullName,
        `Sorry ${ownerData.fullName}, your submission has been rejected. Please try to resubmit with correct information.`
      );
    }

    return response;
  }

  async getApprovedWorkspaces(
    page: number,
    limit: number
  ): Promise<GetPendingWorkspace | null> {
    const response = await this.workspaceRepository.findWithPagination(
      page,
      limit,
      true
    );

    return response;
  }

  async findApprovedByOwnerId(
    id: string,
    page: number,
    limit: number
  ): Promise<GetPendingWorkspace | null> {
    const response = await this.workspaceRepository.findApprovedByOwnerId(
      id,
      page,
      limit
    );

    return response;
  }

  async getSingleWorkspace(id: string): Promise<IWorkspace | null> {
    const response = await this.workspaceRepository.findById(id);
    return response;
  }

  async getWithFilters(
    filter: Partial<IFilters>,
    page: number,
    limit: number,
    query: string
  ): Promise<IWorkspace[] | null> {
    const response = await this.workspaceRepository.getWithFilters(
      query,
      filter,
      page,
      limit
    );

    return response;
  }

  async getWorkspaceByOwnerId(id: string): Promise<IWorkspace[] | null> {
    const response = await this.workspaceRepository.findByOwnerId(id);

    return response;
  }

  async searchWorkspace(
    query: string,
    page: number,
    limit: number
  ): Promise<IWorkspace[] | null> {
    const response = await this.workspaceRepository.searchWorkspace(
      query,
      page,
      limit
    );
    return response;
  }

  async getTotalWorkspaces(): Promise<number> {
    return this.workspaceRepository.getTotalWorkspace();
  }

  async getApprovedWorkspaceById(id: string): Promise<IWorkspace | null> {

    const response = await this.workspaceRepository.findById(id);

    if (response && response.approved) {
      return response;
    }

    return null;

  }

  async findBothById (workspaceId: string): Promise<IWorkspace | null> {


    const response = await this.workspaceRepository.findBothById(workspaceId);

    return response;
  }
}
