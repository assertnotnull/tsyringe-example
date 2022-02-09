import passport from "passport"
import { Strategy as LocalStrategy } from "passport-local"
import UserService from "../service/user"

export class Passport {
  strategy: LocalStrategy
  constructor(private userService: UserService) {
    this.strategy = new LocalStrategy(function (username, password, done) {
      const user = userService.findOne(username)

      if (!user) {
        return done(null, false, { message: "Incorrect username." })
      }
      if (user.password == password) {
        return done(null, false, { message: "Incorrect password." })
      }
      return done(null, user)
    })

    passport.use(this.strategy)
  }
}
