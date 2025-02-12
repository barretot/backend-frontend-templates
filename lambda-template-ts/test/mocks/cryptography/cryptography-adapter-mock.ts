import { CryptographyAdapter } from '@/user/core/adapters/cryptography/cryptography-adapter'

export class CryptographyAdapterMock implements CryptographyAdapter {
  hash = vi.fn(async (plain: string) => `hashed-${plain}`)
  compare = vi.fn(
    async (dbPassword: string, loginPassword: string) =>
      dbPassword === loginPassword,
  )
}
