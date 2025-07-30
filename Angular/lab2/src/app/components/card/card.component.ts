import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  onRemoveClicked() {
    this.removeCard.emit(this.user.id);
    alert('User removed Successfuly!');
  }
}
