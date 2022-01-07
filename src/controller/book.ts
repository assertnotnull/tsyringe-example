import { Router } from "express"
import { injectable } from "tsyringe"
import BookService from "../service/book"

@injectable()
export default class BookController {
  private router: Router
  bookService: BookService

  constructor(bookService: BookService) {
    this.bookService = bookService
    this.router = Router()
  }

  getBooks() {
    return this.bookService.getBooks()
  }

  getRoutes() {
    this.router.get("/", (req, res) => res.send(this.bookService.getBooks()))

    return this.router
  }
}
