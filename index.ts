import express from "express"
import "reflect-metadata"
import { container } from "tsyringe"
import "./container"
import AuthorController from "./src/controller/author"
import BookController from "./src/controller/book"

const port = 5000
const app = express()

const bookRoutes = container.resolve(BookController)
const authorRoutes = container.resolve(AuthorController)

app.use("/books", bookRoutes.getRoutes())
app.use("/authors", authorRoutes.getRoutes(container))
app.listen(port, () => console.log(`listening on port ${port}`))
