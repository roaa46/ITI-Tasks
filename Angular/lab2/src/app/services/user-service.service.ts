import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private users: User[] = [
    {
      id: 1,
      name: 'Mohamed',
      imgUrl: '/1.jpeg',
      job: 'Web Developer',
      bio: 'user1 bio'
    },
    {
      id: 2,
      name: 'Rania',
      imgUrl: '/2.jpeg',
      job: 'Web Developer',
      bio: 'user2 bio'
    },
    {
      id: 3,
      name: 'Mona',
      imgUrl: '/3.jpeg',
      job: 'SWE',
      bio: 'user3 bio'
    },
    {
      id: 4,
      name: 'Soha',
      imgUrl: '/4.jpeg',
      job: 'Frontend Developer',
      bio: 'user4 bio'
    },
    {
      id: 5,
      name: 'Sara',
      imgUrl: '/5.jpeg',
      job: 'Backend Developer',
      bio: 'user5 bio'
    }
  ];

    getUsers() : User[] {
      return this.users;
    }

    removeUser(id: number) : void {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === id) {
          this.users.splice(i, 1);
          break;
        }
      }

      // this.users = this.users.filter(user => user.id !== id);

    }

}

export interface User {
  id: number;
  name: string;
  imgUrl: string;
  job: string;
  bio: string;
}