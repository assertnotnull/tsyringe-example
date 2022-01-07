import { AuthorModel, AuthorRepository } from "./authorepo"

export default class Author implements AuthorRepository {
  private authors: AuthorModel[] = [{ id: 1, name: "Some gus" }]

  getAuthors() {
    return this.authors
  }
}
