import { Inject, Injectable } from '@nestjs/common'

import { User } from '@/domain/entities/User'
import { UserRepository } from '@/domain/repositories/UserRepository'

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('UserRepository') private userRepository: UserRepository,
  ) {}

  async execute({
    name,
    email,
    password,
  }: {
    name: string
    email: string
    password: string
  }): Promise<{ user: User }> {
    const user = await this.userRepository.create({ name, email, password })
    return { user }
  }
}
