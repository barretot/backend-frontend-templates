import { User } from '../entities/User'

export abstract class UserRepository {
  abstract findById(id: string): Promise<User | null>
  abstract create(question: User): Promise<User>
}
