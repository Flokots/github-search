import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repository } from '../models/repository/repository';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {

  user!: User;
  repository!: Repository;
  reposArray: Repository[] = [];
  // searchName!: string;

  constructor(private http: HttpClient) {
    this.user = new User("", "", "", 0, new Date(), new Date(), 0, "");
    this.repository = new Repository('', '', '', new Date(), new Date(), 0, '')
    // this.searchName = "Flokots";

  }

  userRequest(searchName: string) {
    interface ApiResponse {
      name: string,
      login: string,
      avatar_url: string,
      followers: number,
      created_at: Date,
      updated_at: Date,
      html_url: string,
      public_repos: number
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/" + searchName  +"?access_token" + environment.apiKey).toPromise().then((response: any) => {
        this.user.name = response.name
        this.user.login = response.login
        this.user.avatar_url = response.avatar_url
        this.user.followers = response.followers
        this.user.created_at = response.created_at
        this.user.updated_at = response.updated_at
        this.user.html_url = response.html_url
        this.user.public_repos = response.public_repos

        resolve(response)
      }, error => {
        reject(error)
      })
    })
    return promise
  }

  reposRequest(searchName: string) {
    this.http.get<any>("https://api.github.com/users/" + searchName  + "/repos?access_token" + environment.apiKey)
    .subscribe(
     ( data:[]) => {
        let responseArray = data;
        responseArray.forEach((e: any )=> {
          this.reposArray.push(new Repository(e.name, e.html_url, e.description, e.created_at, e.updated_at, e.forks_count, e.clone_url))
          
        })
        console.log(this.reposArray)
        // return this.reposArray;
        this.repository = this.reposArray[1];
        console.log(this.repository)
      }
      )
      }
}


