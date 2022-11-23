import { Request, Response } from 'express';
import JWTService from '../utils/JWT';
import UserService from '../service/UserService';

export default class UserController {
  service = new UserService();
  token = new JWTService();

  public validateRole = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    const result = await this.service.role(authorization || '');
    return res.status(200).json({ role: result && result.role });
  };

  public login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const valid = await this.service.postLogin(email, password);
    if (valid === 400) { return res.status(400).json({ message: 'All fields must be filled' }); }
    if (valid === 401) { return res.status(401).json({ message: 'Incorrect email or password' }); }
    if (valid === 200) { return res.status(200).json({ token: this.token.newToken(req.body) }); }
  };
}
