import { autoInjectable, injectable } from "tsyringe"
import BookRepository from "../repository/book"

@injectable()
export default class BookService {
  constructor(private bookRepository: BookRepository) {}

  getBooks() {
    return this.bookRepository.getBooks()
  }
}
