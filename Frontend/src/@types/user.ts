type StringIndexSignature<T> = {
  [key: string]: T;
}


export interface IUsers extends StringIndexSignature<string | boolean> {
  _id: string;
  email: string;
  fullName: string;
  password: string;
  date_of_birth: string;
  pin_code: string;
  address: string;
  gender: string;
  membership: string;
  phone: string;
  profilePic: string;
  role: string;
  refreshToken: string;
  createdAt: string;
  confirmPassword: string;
  isBlocked: boolean;
}