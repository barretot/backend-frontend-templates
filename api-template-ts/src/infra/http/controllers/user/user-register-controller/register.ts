import { FastifyReply, FastifyRequest } from 'fastify'

import { registerDto } from '@/infra/http/dto/user/register-dto'

import { makeRegisterUseCase } from './factory'

export class UserController {
  private registerUseCase

  constructor() {
    this.registerUseCase = makeRegisterUseCase()
  }

  async register(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, password } = registerDto.parse(request.body)

    const { value: user } = await this.registerUseCase.execute({
      name,
      email,
      password,
    })

    return reply.status(201).send(user)
  }
}
