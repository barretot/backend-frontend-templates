import { Argon2Hasher } from '@/infra/cryptography/argon2/argon2-crypto'
import { Config } from '@/infra/env/get-env'
import { CreateUserUseCase } from '@/use-cases/user/register'
import { InMemoryUserRepository } from 'test/mocks/repositories/in-memory-user-repository'

export function makeRegisterUseCase() {
  const usersRepository = new InMemoryUserRepository()
  const cryptography = new Argon2Hasher(new Config())
  const createUserUseCase = new CreateUserUseCase(usersRepository, cryptography)

  return createUserUseCase
}
