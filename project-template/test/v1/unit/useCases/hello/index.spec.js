const helloUseCase = require('../../../../../src/v1/useCases/hello')
const motherObject = require('./MotherObject')

describe('Test suite for', () => {
  it('Should return success', async () => {
    const mockDependencies = motherObject.success

    const result = await helloUseCase(mockDependencies).execute(mockDependencies)

    expect(result).toEqual({
      data: {
        response: 'Hello Unknown',
        contentType: 'aplication/json',
        ok: true
      }
    }
    )
  })
})

describe('#Unit tests', () => {
  it('Should return error', async () => {
    const mockDependencies = motherObject.catchError

    await expect(
      helloUseCase(mockDependencies).execute(mockDependencies)
    ).rejects.toMatchObject({ flow: 'PAYLOAD_ERROR' })
  })
})
