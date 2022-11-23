import * as jwt from 'jsonwebtoken';
import ILogin from '../interfaces/index';

require('dotenv/config');

export default class JWTService {
  newToken = (data: ILogin) => {
    const secret = process.env.JWT_SECRET || 'jwt_secret';
    const token = jwt.sign(data, secret);
    return token;
  };

  validateToken = (token: string): jwt.JwtPayload => {
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET || 'jwt_secret');
      return data as jwt.JwtPayload;
    } catch (error) {
      return { type: 400 };
    }
  };
}
