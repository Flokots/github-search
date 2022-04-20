import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository/repository';
import { User } from 'src/app/models/user';
import { SearchUserService } from 'src/app/services/search-user.service';


@Component({
  selector: 'app-display-user-repo',
  templateUrl: './display-user-repo.component.html',
  styleUrls: ['./display-user-repo.component.css']
})
export class DisplayUserRepoComponent implements OnInit {

  user!: User;
  reposDetails!: Repository[];
  repository!: Repository;
  searchUserService!: SearchUserService;
  searchName!: string;

  constructor(searchUserService: SearchUserService) {
    this.searchUserService = searchUserService;
    this.reposDetails = [];

  }
  newSearchName(searchName: string) {
    this.searchUserService.userRequest(searchName);
    this.searchUserService.reposRequest(searchName);
    this.user = this.searchUserService.user;
    this.reposDetails = this.searchUserService.reposArray;
    

  }

  ngOnInit() {
    this.searchUserService.userRequest(this.searchName);
    this.searchUserService.reposRequest(this.searchName);
    this.user = this.searchUserService.user;
    this.reposDetails = this.searchUserService.reposArray;
  }
 
}

