import express from "express"
import "reflect-metadata"
import { container } from "tsyringe"
import "./container"
import AuthorController from "./src/controller/author"
import BookController from "./src/controller/book"

const port = 5000
const app = express()

const bookcontroller = container.resolve(BookController)
const authorController = container.resolve(AuthorController)

app.use("/books", bookcontroller.getRoutes())
app.use("/authors", authorController.getRoutes(container))
app.listen(port, () => console.log(`listening on port ${port}`))
