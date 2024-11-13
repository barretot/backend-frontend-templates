import { Module } from '@nestjs/common'

import { CreateUserController } from './controllers/create-user.controller'
import { CreateUserUseCase } from '../../use-cases/create-user.use-case'
import { DatabaseModule } from '../database/database.module'
import { UserRepositoryAdapter } from '../database/inMemory/repositories/adapters/user-repository-adapter'

@Module({
  imports: [DatabaseModule],
  controllers: [CreateUserController],
  providers: [
    CreateUserUseCase,
    { provide: 'UserRepository', useClass: UserRepositoryAdapter }, // Definindo o UserRepository para o CreateUserUseCase
  ],
})
export class HttpModule {}
