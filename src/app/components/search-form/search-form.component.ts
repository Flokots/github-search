import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchInfo } from 'src/app/models/searchInfo/search-info';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  searchName = new SearchInfo('');
  @Output() searchUserRepo = new EventEmitter<SearchInfo>();

  submitSearch() {
    this.searchUserRepo.emit(this.searchName);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
