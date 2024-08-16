class DataBuilder {
  constructor () {
    this.mockDependencies = {
      payload: {
        name: 'iPhone 15',
        description: 'Fast smarthphone',
        image: 'imagetest',
        price: 4000.00,
        sku: 'PRODUCT_001',
        category: 'Smarthphone'
      },
      repository: {
        insert: jest.fn().mockReturnValue(true)
      },
      s3: {
        upload: jest.fn().mockReturnValue(true)
      },
      validator: {
        isValidPayload: jest.fn().mockReturnValue({
          isValid: true
        })
      }
    }
  }

  success () {
    return this
  }

  payloadIsInvalid () {
    this.mockDependencies.validator = {
      isValidPayload: jest.fn().mockReturnValue({
        isValid: false,
        error: 'error'
      })
    }
    return this
  }

  catchError () {
    this.mockDependencies.s3.upload.mockRejectedValue(new Error('S3 upload error'))
    return this
  }

  build () {
    return this.mockDependencies
  }
}

module.exports = DataBuilder
