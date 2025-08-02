import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../services/user-service.service';
import { UserServiceService } from './../../services/user-service.service';
import { Card } from "../card/card.component";
import { SearchComponent } from "../search/search.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  imports: [Card, SearchComponent, CommonModule]
})
export class UsersListComponent {

  users$: Observable<User[]>;
  filteredUsers$: Observable<User[]>;
  private searchSubject = new BehaviorSubject<string>('');
  private removedUserIds = new Set<number>();
  
  constructor(private userService: UserServiceService) {
    this.users$ = this.userService.getUsers();
    
    this.filteredUsers$ = combineLatest([
      this.users$,
      this.searchSubject.asObservable()
    ]).pipe(
      map(([users, searchTerm]) => 
        users
          .filter(user => !this.removedUserIds.has(user.id))
          .filter(user => 
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
      )
    );
  }


  onRemoveUser(id: number): void {
    this.removedUserIds.add(id);
    this.searchSubject.next(this.searchSubject.value);
  }

  onSearchHappened(searchKeyword: string): void {
    this.searchSubject.next(searchKeyword);
  }
}
