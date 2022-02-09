export type User {
  name: string,
  password: string
}

export default class UserRepository {
  private users:User[] = [
    {name: 'test', password: 'test1212'}
  ]

  getUsers() {
    return this.users
  }
}
