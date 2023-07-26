interface CreateUserDto { 
  id?: string;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}

export { CreateUserDto }