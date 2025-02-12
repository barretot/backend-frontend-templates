import { LambdaEvent } from '@/shared/core/types/lambda-event.type'

import { registerDto } from './dto/user/register-dto'
import { makeRegisterUseCase } from './factories/register-factory'
import { UserAlreadyExistsException } from '../core/use-cases/errors/user-already-exists-exception'

export async function handler(payload: LambdaEvent) {
  const parsePayload = JSON.parse(payload.body)

  const { name, email, password } = registerDto.parse(parsePayload)

  const registerUseCase = makeRegisterUseCase()

  const response = await registerUseCase.execute({
    name,
    email,
    password,
  })

  if (response.isLeft()) {
    const error = response.value

    switch (error.constructor) {
      case UserAlreadyExistsException:
        throw new Error(error.message)
    }
  }

  return response.value
}
