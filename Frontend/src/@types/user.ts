export interface IUsers {
  _id?: string;
  email?: string;
  fullName?: string;
  password?: string;
  date_of_birth?: Date;
  pin_code?: string;
  address?: string;
  gender?: string;
  membership?: string;
  phone?: string;
  profilePic?: string;
  role?: string;
  refreshToken?: string;
  createdAt?: string;
  confirmPassword?: string;
  isBlocked?: boolean ;
  [key: string]: any;
}
