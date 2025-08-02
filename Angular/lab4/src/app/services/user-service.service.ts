import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private users_endpoint = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<ApiUser[]>(this.users_endpoint).pipe(
      map(users => users
        .filter(user => user.id > 4)
        .map(user => ({
          id: user.id,
          name: user.name,
          email: user.email,
          website: user.website
        }))
      )
    );
  }

  getUserDetailsById(id: number): Observable<User | null> {
    return this.http.get<ApiUser>(`${this.users_endpoint}/${id}`).pipe(
      map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        website: user.website
      }))
    );
  }
}

interface ApiUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface User {
  id: number;
  name: string;
  email: string;
  website: string;
}
