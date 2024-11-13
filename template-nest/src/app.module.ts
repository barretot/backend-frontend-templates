import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import configuration from './config/configuration'
import { DatabaseModule } from './infrastructure/database/database.module'
import { HttpModule } from './infrastructure/http/http.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    HttpModule,
    DatabaseModule,
  ],
})
export class AppModule {}
