import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  imports: [FormsModule],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

   searchKeyword: string = '';

   @Output() searchHappen = new EventEmitter<string>();

  constructor() { }
  ngOnInit(): void {
  }

  onSearchHappen() : void {
    this.searchHappen.emit(this.searchKeyword.trim().toLowerCase());
  }

}
