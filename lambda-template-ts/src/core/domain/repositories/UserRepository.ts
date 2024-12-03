import { User } from '../entities/User'

export interface UserRepository {
  findByEmail(id: string): Promise<User | null>
  create(user: User): Promise<void>
}
