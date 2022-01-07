import { Router } from "express"
import { autoInjectable, DependencyContainer } from "tsyringe"
import AuthorR from "../repository/author-readonly"
import AuthorService from "../service/author"

@autoInjectable()
export default class AuthorController {
  private router: Router
  authorService: AuthorService

  constructor(authorService: AuthorService) {
    this.authorService = authorService
    this.router = Router()
  }

  getAuthor() {
    return this.authorService.getAuthor()
  }

  getRoutes(container: DependencyContainer) {
    this.router.get("/", (req, res) => {
      const { readonly } = req.query
      if (readonly) {
        const child = container.createChildContainer()
        child.register("AuthorRepository", { useClass: AuthorR })

        const childService = child.resolve(AuthorService)
        const authorsR = childService.getAuthor()
        return res.send(authorsR)
      }

      const authors = this.authorService.getAuthor()
      res.send(authors)
    })

    return this.router
  }
}
