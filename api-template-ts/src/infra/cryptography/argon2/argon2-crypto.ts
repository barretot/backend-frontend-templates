import argon2 from 'argon2'

import { CryptographyAdapter } from '@/core/adapters/cryptography/cryptography-adapter'
import { Config } from '@/infra/env/get-env'

export class Argon2Hasher implements CryptographyAdapter {
  constructor(private config: Config) {}
  async hash(password: string): Promise<string> {
    const passwordHash = argon2.hash(password, {
      type: this.config.get('ARGON2_TYPE') as 0 | 1 | 2,
      timeCost: this.config.get('ARGON2_TIME_COST'),
    })

    return passwordHash
  }

  async compare(dbPassword: string, loginPassword: string): Promise<boolean> {
    return argon2.verify(dbPassword, loginPassword)
  }
}
