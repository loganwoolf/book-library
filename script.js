let bookLibrary = []

class Book {
   constructor(title, author, pages, year) {
      this.title = title
      this.author = author
      this.pages = pages
      this.year = year
   }

   print() {
      return `'${this.title}' by ${this.author} is ${this.pages} long.`
   }

}


function addBookToLibrary(title, author, pages, year) {
   let book = new Book (
      title,
      author,
      pages,
      year,
   )
   bookLibrary.push(book)
   return book
}

addBookToLibrary("The Lost Colony", 'A. G. Riddle', 380, 2019)
addBookToLibrary("Shards of Earth", 'Adrian Tchaikovsky', 560, 2021)
addBookToLibrary("A Modest Proposal", 'Jonathan Swift', 48, 1729)
addBookToLibrary('Bird Box', 'Josh Malerman', 262, 2014)

