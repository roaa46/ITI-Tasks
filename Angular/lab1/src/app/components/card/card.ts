import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  imgUrl = '/pf.jpg';
  userName: string = 'John Doe';
  job: string = 'Web Developer';
  description: string = 'Passionate about creating beautiful and functional websites. Always learning and exploaring new technologies.'
  active: boolean = true;
  remove() {
    this.active = false;
    alert("User removed Successfuly!");
  }
}
