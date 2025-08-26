import { Injectable } from '@angular/core';
import { User } from '../models/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Mock users
  private users: User[] = [
    {
      id: 1,
      name: 'Omar Hatem',
      email: 'omar@gmail.com',
      password: 'omar123',
      watchlist: []
    },
    {
      id: 2,
      name: 'Anas Mahmoud',
      email: 'anas@hotmail.com',
      password: 'anas123',
      watchlist: []
    },
    {
      id: 3,
      name: 'Arwa Hazem',
      email: 'arwa@yahoo.com',
      password: 'arwa123',
      watchlist: []
    },
    {
      id: 4,
      name: 'Admin User',
      email: 'admin@admin.com',
      password: 'admin123',
      watchlist: []
    }
  ];

  findUser(email: string, password: string): User | undefined {
    return this.users.find(user => user.email === email && user.password === password);
  }


  
}
