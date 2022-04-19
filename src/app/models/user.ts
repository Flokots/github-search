export class User {
  constructor(
    public name: string,
    public login: string,
    public avatar_url: string,
    public followers: number,
    public created_at: Date,
    public updated_at: Date,
    public repos_url: string,
    public public_repos: number
  ) {}
}
