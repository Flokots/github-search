export class Repository {
  constructor(
    public name: string,
    public html_url: string,
    public description: string,
    public created_at: Date,
    public updated_at: Date,
    public forks_count: number,
    public clone_url: string,
  ){}
}
