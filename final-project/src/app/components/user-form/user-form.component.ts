import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() user: User | null = null;
  @Output() save = new EventEmitter<{ username: string; email: string }>();
  @Output() cancel = new EventEmitter<void>();

  userForm!: FormGroup;
  isEditMode = signal(false);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.isEditMode.set(!!this.user);
    this.createForm();
  }

  private createForm() {
    this.userForm = this.fb.group({
      username: [this.user?.username || '', [Validators.required]],
      email: [this.user?.email || '', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.save.emit(this.userForm.value);
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
