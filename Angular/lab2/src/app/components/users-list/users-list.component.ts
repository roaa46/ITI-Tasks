import { Component, OnInit } from '@angular/core';
import { User } from '../../services/user-service.service';
import { UserServiceService } from './../../services/user-service.service';
import { Card } from "../card/card.component";
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  imports: [Card, SearchComponent]
})
export class UsersListComponent implements OnInit {

  users : User[] = [];
  filteredUsers: User[] = [];
  
  // constructor for inject services, ngOnInit for initialize data
  constructor(private UserServiceService : UserServiceService) { }

  ngOnInit() : void {
    this.users = this.UserServiceService.getUsers();
    this.filteredUsers = [...this.users]; // spread
  }

  onRemoveUser(id: number) : void {
    this.UserServiceService.removeUser(id);
    this.users = this.UserServiceService.getUsers();
    this.filteredUsers = this.filteredUsers.filter(user => user.id !== id);
  }

  onSearchHappened(searchKeyword: string) : void {
    this.filteredUsers = this.users.filter(user => 
      user.name.toLowerCase().includes(searchKeyword)
    );
  }

}
