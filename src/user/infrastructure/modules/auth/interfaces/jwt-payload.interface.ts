export interface JwtPayloadInterface {
  sub: string;
  exp: number;
  iat: number;
  'cognito:username': string;
  'custom:role': string;
  'custom:country': string;
  phone_number: string;
}
