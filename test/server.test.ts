import request  from 'supertest'
import { server } from '../src/server'
import { describe, expect, it } from '@jest/globals'

describe('server.ts', () => {
  it('should return a express server', async () => {
    
    const response = await request(server).get('/health')

    expect(response.status).toBe(200)
    expect(response.body).toBeDefined()
    expect(response.body.uptime).toBeDefined()
    expect(response.body.timestamp).toBeDefined()
  })
})