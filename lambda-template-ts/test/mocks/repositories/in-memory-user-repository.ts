import { User } from '@/core/domain/entities/User'
import { UserRepository } from '@/core/domain/repositories/UserRepository'

export class InMemoryUserRepository implements UserRepository {
  public items: User[] = []

  constructor() {}
  async findByEmail(email: string) {
    const user = this.items.find((item) => item.email === email)

    if (!user) {
      return null
    }

    return user
  }
  async create(user: User) {
    this.items.push(user)
  }
}
