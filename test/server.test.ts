import { Server } from '../src/server'

describe('src/server.ts', () => {
  it('should return a fastfy server', async () => {
    const response = await Server.inject({
      method: 'GET',
      url: '/health',
    })

    const body = JSON.parse(response.body)
    
    expect(response.statusCode).toBe(200)
    expect(response.body).toBeDefined()
    expect(body.uptime).toBeDefined()
    expect(body.timestamp).toBeDefined()
  })

  it('should apply middleware in production environment', async () => {
    process.env.NODE_ENV = 'PROD'

    const response = await Server.inject({
      method: 'GET',
      url: '/health',
    })

    const body = JSON.parse(response.body)

    expect(response.statusCode).toBe(200)
    expect(response.body).toBeDefined()
    expect(body.uptime).toBeDefined()
    expect(body.timestamp).toBeDefined()

    process.env.NODE_ENV = 'DEV'
  })
})