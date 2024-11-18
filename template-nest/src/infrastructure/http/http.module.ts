import { Module } from '@nestjs/common'

import { CreateUserUseCase } from '@/use-cases/user/create-user.use-case'

import { CryptographyModule } from '../cryptography/cryptography.module'
import { DatabaseModule } from '../database/database.module'
import { CreateUserController } from './controllers/user/create-user.controller'

@Module({
  imports: [DatabaseModule, CryptographyModule, CryptographyModule],
  controllers: [CreateUserController],
  providers: [CreateUserUseCase],
})
export class HttpModule {}
