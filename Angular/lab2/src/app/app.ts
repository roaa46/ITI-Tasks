import { Component } from '@angular/core';
import { UsersListComponent } from "./components/users-list/users-list.component";

@Component({
  selector: 'app-root',
  imports: [UsersListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'lab2';
}
