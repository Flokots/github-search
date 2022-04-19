import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repository } from 'src/app/models/repository/repository';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersRepoService {

  user!: User;
  repository!: Repository;


  constructor(private http: HttpClient) {
    this.user = new User("", "", "", 0, new Date(), new Date(), 0, "");
    this.repository = new Repository("", "", "", new Date(), new Date(), 0)
  }
  githubUserRequest(userName: string) {
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
      this.http.get<ApiResponse>("https://api.github.com/users/" + userName + '?access_token=' + environment.apiKey).toPromise().then((response: any) => {
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

  githubRepoRequest(repoName: string) {
    interface ApiResponse {
      name: string;
      html_url: string,
      description: string,
      created_at: Date,
      updated_at: Date,
      forks_count: number,
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/repos" + repoName + '?access_token=' + environment.apiKey).toPromise().then((response: any) => {
        this.repository.name = response.name
        this.repository.html_url = response.html_url
        this.repository.description = response.description
        this.repository.created_at = response.created_at
        this.repository.updated_at = response.updated_at
        this.repository.forks_count = response.forks_count
        resolve(response)
      }, error => {
        reject(error)
      })
    })
    return promise
  }
}

