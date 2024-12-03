import { LambdaEvent } from '@/@common/types/lambda-event.type'
import { registerDto } from '@/infra/lambdas/dto/user/register-dto'
import { UserAlreadyExistsException } from '@/use-cases/user/errors/user-already-exists-exception'

import { makeRegisterUseCase } from './factories/register-factory'

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
