import { inject, injectable } from "tsyringe"
import { AuthorRepository } from "../repository/authorepo"

@injectable()
export default class AuthorService {
  constructor(
    @inject("AuthorRepository") private repository: AuthorRepository
  ) {}

  getAuthor() {
    return this.repository.getAuthors()
  }
}
