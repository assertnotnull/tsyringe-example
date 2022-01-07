import { AuthorRepository } from "./authorepo"

export default class AuthorR implements AuthorRepository {
  private authors = [{ id: 1, name: "Some gus - read only" }]

  getAuthors() {
    return this.authors
  }
}
