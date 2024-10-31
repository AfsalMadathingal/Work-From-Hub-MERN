/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IWorkspace {
    _id?:string;
    approved?:boolean;
    rejected?:boolean;
    buildingName: string;
    state: string;
    district: string;
    location: string;
    pinCode: string;
    street: string;
    contactNo: string;
    powerBackup: boolean;
    ac: boolean;
    bathroom: boolean;
    tablesAvailable: number;
    seatsPerTable: number;
    photos: File[] | null | string[];  
    video: File | null | string;   
    imageAdded: boolean ;
    videoAdded:boolean ;
    pricePerSeat: number;
    timing:string;
    workingDays:string;
    ownerId: string;
    [key: string]: any;
  }