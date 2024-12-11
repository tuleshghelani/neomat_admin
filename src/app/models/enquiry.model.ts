export interface Enquiry {
  id: string;
  name: string;
  company_name: string;
  email: string;
  mobilenumber: string;
  address: string;
  created_at: string;
}

export interface LoginResponse {
  user: {
    id: number;
    username: string;
    email: string;
  };
  token: string;
}