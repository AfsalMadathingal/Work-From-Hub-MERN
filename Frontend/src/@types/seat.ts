

export interface ISeat  {
  _id:string;
  id: string;
  workspaceId: string;
  tableNumber: number;
  seatNumber: number;
  availability: Record<string, boolean>; // Use Record for availability
  createdAt: Date;
  updatedAt: Date;
}
