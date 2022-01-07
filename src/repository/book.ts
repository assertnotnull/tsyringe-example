export default class BookRepository {
  private books = [
    {
      id: 1,
      title: "DI for fun",
    },
    { id: 2, title: "Clean code" },
  ]

  getBooks() {
    return this.books
  }
}
