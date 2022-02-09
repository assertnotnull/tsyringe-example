import { Router } from "express"
import passport from "passport"
import { injectable } from "tsyringe"
import UserService from "../service/user"

@injectable()
export default class UserController {
  private router: Router
  userService: UserService

  constructor(userService: UserService) {
    this.userService = userService
    this.router = Router()
  }

  getRoutes() {    
    this.router.get('/login', )
    this.router.post(
      "/login",
      passport.authenticate("local", {
        successRedirect: "/profile",
        failureRedirect: "/login",
      })
    )

    return this.router
  }
}
