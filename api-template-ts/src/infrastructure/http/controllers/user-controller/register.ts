import { FastifyReply, FastifyRequest } from 'fastify'

import { makeRegisterUseCase } from './factory'
import { registerValidation } from '../../validations/user-validations/register'

export class UserController {
  private registerUseCase

  constructor() {
    this.registerUseCase = makeRegisterUseCase()
  }

  async register(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, password } = registerValidation.parse(request.body)

    const { value: user } = await this.registerUseCase.execute({
      name,
      email,
      password,
    })

    return reply.status(201).send(user)
  }
}
