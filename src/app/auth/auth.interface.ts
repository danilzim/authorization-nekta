export interface TokenResponse {
  msg: string;
  data: {
    access_token: string;
    expires_at: number;
    token_type: string;
  };
}
