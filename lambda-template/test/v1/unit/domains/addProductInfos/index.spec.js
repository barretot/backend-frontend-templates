const { addProductWrapper } = require('../../../../../src/v1/domains')
const motherObject = require('./MotherObject')

describe('#Unit tests', () => {
  it('Should return success when it is a valid payload', async () => {
    const mockDependencies = motherObject.success

    const result = await addProductWrapper(mockDependencies).addProductInfos(mockDependencies.payload)

    expect(result).toBeInstanceOf(Object)
    expect(result).toHaveProperty('ID')
    expect(result).toHaveProperty('name')
    expect(result).toHaveProperty('description')
    expect(result).toHaveProperty('image')
    expect(result).toHaveProperty('price')
    expect(result).toHaveProperty('sku')
    expect(result).toHaveProperty('category')
  })

  it('Should return error when payload is invalid', async () => {
    const mockDependencies = motherObject.payloadIsInvalid

    const result = await addProductWrapper(mockDependencies).addProductInfos(mockDependencies.payload)

    expect(result).toEqual('error')
  })

  it('Should handle S3 upload error', async () => {
    const mockDependencies = motherObject.catchError

    await expect(addProductWrapper(mockDependencies).addProductInfos(mockDependencies.payload)).rejects.toThrow('S3 upload error')
  })
})
