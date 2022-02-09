import { autoInjectable, injectable } from "tsyringe"
import UserRepository, { User } from "../repository/user"

@injectable()
export default class UserService {
  constructor(private userRepository: UserRepository) {}

  getUsers() {
    return this.userRepository.getUsers()
  }

  findOne(name: string): User {
    return (
      this.userRepository.getUsers().filter((user) => user.name == name)?.[0] ??
      {}
    )
  }
}
