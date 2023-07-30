import { User } from '../../../src/User/user.entitiy'


const USER_MOCK: User[] = [
  {
    id: '0',
    name: 'name0',
    email: 'email0@teste.com.br',
    age: 15,
    isActive: true,
  },
  {
    id: '1',
    name: 'name1',
    email: 'email1@teste.com.br',
    age: 26,
    isActive: false,
  },
  {
    id: '2',
    name: 'name2',
    email: 'email2@teste.com.br',
    age: 33,
    isActive: false,
  },{
    id: '3',
    name: 'name3',
    email: 'email3@teste.com.br',
    age: 49,
    isActive: false,
  }, {
    id: '4',
    name: 'name4',
    email: 'email4@teste.com.br',
    age: 52,
    isActive: true,
  },
]

export { USER_MOCK }