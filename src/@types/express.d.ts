import { FeedbackEntity } from '../entities';
import { UserEntity } from './../entities/user.entity';

declare global {
  namespace Express {
    interface Request {
      validated: any;
      token: string;
      email: string;
      id: string;
    }
  }
}
