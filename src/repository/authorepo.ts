export type AuthorModel = {
  id: number
  name: string
}

export interface AuthorRepository {
  getAuthors(): AuthorModel[]
}
