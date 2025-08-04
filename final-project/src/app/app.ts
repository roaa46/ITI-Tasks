import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { User } from './services/user.service';
import { UserFormComponent } from './components/user-form/user-form.component';
import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    UserFormComponent,
    DeleteConfirmationComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'User Management System';
  
  // signals for state management
  searchTerm = signal('');
  showUserForm = signal(false);
  showDeleteConfirmation = signal(false);
  editingUser = signal<User | null>(null);
  deletingUser = signal<User | null>(null);
  
  // computed signal for filtered users
  filteredUsers = computed(() => {
    const term = this.searchTerm();
    if (!term.trim()) {
      return this.userService.users();
    }
    return this.userService.searchUsers(term);
  });

  constructor(public userService: UserService) {}

  onSearchChange(value: string) {
    this.searchTerm.set(value);
  }

  openAddUserForm() {
    this.editingUser.set(null);
    this.showUserForm.set(true);
  }

  openEditUserForm(user: User) {
    this.editingUser.set(user);
    this.showUserForm.set(true);
  }

  openDeleteConfirmation(user: User) {
    this.deletingUser.set(user);
    this.showDeleteConfirmation.set(true);
  }

  onUserFormSave(formData: { username: string; email: string }) {
    if (this.editingUser()) {
      // Edit mode
      this.userService.updateUser(
        this.editingUser()!.id,
        formData.username,
        formData.email
      );
    } else {
      // Add mode
      this.userService.addUser(formData.username, formData.email);
    }
    this.closeUserForm();
  }

  onUserFormCancel() {
    this.closeUserForm();
  }

  closeUserForm() {
    this.showUserForm.set(false);
    this.editingUser.set(null);
  }

  onDeleteConfirm() {
    if (this.deletingUser()) {
      this.userService.deleteUser(this.deletingUser()!.id);
    }
    this.closeDeleteConfirmation();
  }

  onDeleteCancel() {
    this.closeDeleteConfirmation();
  }

  closeDeleteConfirmation() {
    this.showDeleteConfirmation.set(false);
    this.deletingUser.set(null);
  }
}
