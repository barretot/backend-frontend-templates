import { FastifyReply, FastifyRequest } from 'fastify'

import { Argon2Hasher } from '@/infrastructure/cryptography/argon2/argon2-crypto'
import { CreateUserUseCase } from '@/use-cases/user/register'
import { InMemoryUserRepository } from 'test/mocks/repositories/in-memory-user-repository'

import { registerValidation } from '../../validations/user-validations/register'

export class UserController {
  private createUserUseCase: CreateUserUseCase

  constructor() {
    const userRepository = new InMemoryUserRepository()
    const hasher = new Argon2Hasher()
    this.createUserUseCase = new CreateUserUseCase(userRepository, hasher)
  }

  async register(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, password } = registerValidation.parse(request.body)

    const { value } = await this.createUserUseCase.execute({
      name,
      email,
      password,
    })

    return reply.status(201).send(value)
  }
}
