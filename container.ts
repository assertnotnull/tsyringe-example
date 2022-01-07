import { container } from "tsyringe"
import Author from "./src/repository/author"

container.register("AuthorRepository", { useClass: Author })
