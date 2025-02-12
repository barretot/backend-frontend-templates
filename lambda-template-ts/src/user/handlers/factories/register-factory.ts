import { BcryptHasher } from '@/shared/lib/cryptography/bcyrypt/bcrypt-crypto'
import { Config } from '@/shared/lib/env/get-env'
import { CreateUserUseCase } from '@/user/core/use-cases/register'
import { InMemoryUserRepository } from 'test/mocks/repositories/in-memory-user-repository'

export function makeRegisterUseCase() {
  const usersRepository = new InMemoryUserRepository()
  const cryptography = new BcryptHasher(new Config())
  const createUserUseCase = new CreateUserUseCase(usersRepository, cryptography)

  return createUserUseCase
}
