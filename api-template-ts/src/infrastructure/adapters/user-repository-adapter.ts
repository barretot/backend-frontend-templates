import { UserRepository } from '../../domain/repositories/UserRepository'
import { User } from '../../domain/entities/User'
import { InMemoryDatabase } from '../database/in-memory-database'

export class UserRepositoryAdapter implements UserRepository {
  private db: InMemoryDatabase<User>

  constructor() {
    this.db = new InMemoryDatabase<User>()
  }

  async findById(id: string): Promise<User | null> {
    const user = this.db.find((user) => user.id === id)
    return user || null
  }

  async create({ name, email, password }: User): Promise<User> {
    const user = new User({ name, email, password })

    return this.db.create(user)
  }
}
