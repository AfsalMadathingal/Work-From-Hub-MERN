

export interface ISeat  {
  id: string;
  workspaceId: string;
  tableNumber: number;
  seatNumber: number;
  availability: Map<string, boolean>; // Use Map for availability
  createdAt: Date;
  updatedAt: Date;
}
