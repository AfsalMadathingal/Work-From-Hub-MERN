export interface IUsers {
  _id?: string;
  email?: string | null;
  fullName?: string | null;
  password?: string | null;
  date_of_birth?: Date | null;
  pin_code?: string | null;
  address?: string | null;
  gender?: string | null;
  membership?: string | null;
  phone?: string | null;
  profilePic?: string | null;
  role?: string | null;
  refreshToken?: string | null;
}
