import { BcryptHasher } from '../../../shared/lib/cryptography/bcyrypt/bcrypt-crypto.js';
import { Config } from '../../../shared/lib/env/get-env.js';
import { CreateUserUseCase } from '../../core/use-cases/register.js';
import { InMemoryUserRepository } from '../../persitence/in-memory-user-repository.js';

export function makeRegisterUseCase() {
  const usersRepository = new InMemoryUserRepository();
  const cryptography = new BcryptHasher(new Config());
  const createUserUseCase = new CreateUserUseCase(
    usersRepository,
    cryptography,
  );

  return createUserUseCase;
}
