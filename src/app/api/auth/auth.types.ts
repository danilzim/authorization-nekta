export interface LoginRequest {
    email: string;
    password: string;
    personal_data_access: boolean;
  }
  
  export interface LoginResponse {
    data: {
      access_token: string;
      expires_at: number;
      token_type: string;
    };
    msg: string;
  }
  
  export interface LoginErrorResponse {
    error: {
      msg: string;
      code: number,
      data: {
        msg: string;
      }
    }
  }
  