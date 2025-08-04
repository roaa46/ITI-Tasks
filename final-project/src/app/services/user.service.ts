import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly STORAGE_KEY = 'users';
  
  users = signal<User[]>(this.loadUsersFromStorage());

  constructor() {}

  // generate random id based on timestamp
  private generateId(): string {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }

  private loadUsersFromStorage(): User[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  private saveUsersToStorage(users: User[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
  }

  getAllUsers(): User[] {
    return this.users();
  }

  addUser(username: string, email: string): void {
    const newUser: User = {
      id: this.generateId(),
      username,
      email
    };
    
    const currentUsers = this.users();
    const updatedUsers = [...currentUsers, newUser];
    this.users.set(updatedUsers);
    this.saveUsersToStorage(updatedUsers);
  }

  updateUser(id: string, username: string, email: string): void {
    const currentUsers = this.users();
    const updatedUsers = currentUsers.map(user => 
      user.id === id ? { ...user, username, email } : user
    );
    this.users.set(updatedUsers);
    this.saveUsersToStorage(updatedUsers);
  }

  deleteUser(id: string): void {
    const currentUsers = this.users();
    const updatedUsers = currentUsers.filter(user => user.id !== id);
    this.users.set(updatedUsers);
    this.saveUsersToStorage(updatedUsers);
  }

  searchUsers(searchTerm: string): User[] {
    if (!searchTerm.trim()) {
      return this.users();
    }
    
    const term = searchTerm.toLowerCase();
    return this.users().filter(user => 
      user.username.toLowerCase().includes(term) || 
      user.email.toLowerCase().includes(term)
    );
  }
}

export interface User {
  id: string;
  username: string;
  email: string;
}