import { Module } from '@nestjs/common'

import { UserRepository } from '@/domain/repositories/UserRepository'

import { InMemoryDatabaseService } from './inMemory/in-memory-database.service'
import { UserRepositoryAdapter } from './inMemory/repositories/adapters/user-repository-adapter'

@Module({
  providers: [
    InMemoryDatabaseService,
    {
      provide: UserRepository,
      useClass: UserRepositoryAdapter,
    },
  ],
  exports: [UserRepository, InMemoryDatabaseService],
})
export class DatabaseModule {}
