import { User } from '../../src/User/user.entitiy'

describe('src/User/user.entitiy', () => {
  describe('Class User', () => {
    it('should create a variable of User type', async () => {
      const user: User = {
        id: '1',
        name: 'name1',
        email: 'email1',
        age: 1,
        isActive: true,
      }
  
      expect(user).toBeDefined()
      expect(user).toHaveProperty('id')
      expect(user).toHaveProperty('name')
      expect(user).toHaveProperty('email')
      expect(user).toHaveProperty('age')
      expect(user).toHaveProperty('isActive')
    })
  })
})