export interface IWorkspace {
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
  }