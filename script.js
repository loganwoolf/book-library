let bookLibrary = []

class Book {
   constructor(title, author, pages, year) {
      this.title = title
      this.author = author
      this.pages = pages
      this.year = year
   }
   // functions below get added to prototype
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

const library = document.querySelector('.library')

function displayBooks() {
	for (let book of bookLibrary) {
		const card = document.createElement('div')
		card.classList.add('book-card')
		library.appendChild(card)

		const title = document.createElement('h3')
		title.classList.add('book-title')
		title.textContent = book.title
		card.appendChild(title)

		const author = document.createElement('p')
		author.classList.add('book-author')
		author.textContent = book.author
		card.appendChild(author)

		const pages = document.createElement('p')
		pages.classList.add('book-pages')
		pages.textContent = `${book.pages} pages`
		card.appendChild(pages)

		const year = document.createElement('p')
		year.classList.add('book-year')
		year.textContent = `Published in ${book.year}`
		card.appendChild(year)
	}
}

window.onload(displayBooks())