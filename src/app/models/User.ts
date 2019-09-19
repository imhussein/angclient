export interface User {
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  _id?: string;
  role?: string;
  status?: string;
  avatar?: string;
  registerToken?: string;
  registerTokenExpiry?: string;
  date?: Date;
}
