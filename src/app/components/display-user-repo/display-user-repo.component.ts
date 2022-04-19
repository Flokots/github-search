import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository/repository';
import { SearchInfo } from 'src/app/models/searchInfo/search-info';
import { User } from 'src/app/models/user';
import { SearchUserService } from 'src/app/services/search-user.service';
import { UsersRepoService } from 'src/app/services/users-repo/users-repo.service';

@Component({
  selector: 'app-display-user-repo',
  templateUrl: './display-user-repo.component.html',
  styleUrls: ['./display-user-repo.component.css']
})
export class DisplayUserRepoComponent implements OnInit {

  user!: User;
  repository!: Repository;
  searchName!: string;

  constructor(private searchUserRepo: UsersRepoService) {
    
   }

  ngOnInit() {
    this.searchUserRepo.githubUserRequest(this.searchName);
    this.searchUserRepo.githubRepoRequest(this.searchName);
    this.user = this.searchUserRepo.user;
    this.repository = this.searchUserRepo.repository;
  }

}

