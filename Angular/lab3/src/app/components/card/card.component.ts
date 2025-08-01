import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../services/user-service.service';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class Card {
  @Input() user: User = {
    id: 0,
    name: '',
    imgUrl: '',
    job: '',
    bio: ''
  };
  @Input() isLast: boolean = false;

  @Output() removeCard = new EventEmitter<number>();

  constructor(private router: Router) {}

  onRemoveClicked() {
    this.removeCard.emit(this.user.id);
    alert('User removed Successfuly!');
  }

  onDetailsClicked() {
    this.router.navigate(['/user', this.user.id]);
  }
}
