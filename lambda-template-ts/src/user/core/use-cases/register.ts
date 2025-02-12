import { InMemoryUserRepository } from '@/user/persitence/in-memory-user-repository'

import { CryptographyAdapter } from '../adapters/cryptography/cryptography-adapter'
import { Either, left, right } from '../domain/either'
import { UserAlreadyExistsException } from './errors/user-already-exists-exception'
import { User } from '../domain/entities/User'

interface CreateUserUseCaseRequest {
  name: string
  email: string
  password: string
}

type CreateUserUseCaseResponse = Either<
  UserAlreadyExistsException /* | OthersErrors */,
  { user: User }
>

export class CreateUserUseCase {
  constructor(
    private userRepository: InMemoryUserRepository,
    private cryptography: CryptographyAdapter,
  ) {}

  async execute({
    name,
    email,
    password,
  }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const userAlreadyExists = await this.userRepository.findByEmail(email)

    if (userAlreadyExists) {
      return left(new UserAlreadyExistsException(email))
    }

    const hash = await this.cryptography.hash(password)

    const user = User.create({
      name,
      email,
      password: hash,
    })

    await this.userRepository.create(user)

    return right({
      user,
    })
  }
}
