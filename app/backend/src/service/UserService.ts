import bcrypt = require('bcryptjs');
import userModel from '../database/models/UsersModel';
import JWTService from '../utils/JWT';

export default class UserService {
  jwt = new JWTService();
  constructor(private users = userModel) {}

  public role = async (authorization: string) => {
    const userJWT = this.jwt.validateToken(authorization);
    const user = await this.users.findOne({ where: { email: userJWT.email } });
    console.log(user);
    return user;
  };

  public postLogin = async (email: string, password: string) => {
    if (!email || !password) { return 400; }

    const user = await this.users.findOne({ where: { email } });
    const passwordCompare = user && bcrypt.compareSync(password, user.password);
    if (passwordCompare) { return 200; } return 401;
  };
}
