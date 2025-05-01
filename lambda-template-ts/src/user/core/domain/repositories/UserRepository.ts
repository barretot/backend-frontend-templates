import { User } from '../entities/User.js';

export interface UserRepository {
  findByEmail(id: string): Promise<User | null>;
  create(user: User): Promise<void>;
}
