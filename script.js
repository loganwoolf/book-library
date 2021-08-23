let bookLibrary = []

class Book {
   constructor(title, author, pages, year, status) {
      this.title = title
      this.author = author
      this.pages = pages
      this.year = year
		this.status = status
   }
   // functions below get added to prototype
   print() {
		if (this.status) {
			let readStatement = 'have'
		} else {
			let readStatement = 'have not yet'
		}
      return `'${this.title}' by ${this.author} is ${this.pages} long. It was published in ${this.year}, and I ${readStatement} read it.`
   }

}

function addBookToLibrary(title, author, pages, year, status) {
   let book = new Book (
      title,
      author,
      pages,
      year,
		status,
   )
   bookLibrary.push(book)
   return book
}

addBookToLibrary("The Lost Colony", 'A. G. Riddle', 380, 2019)
addBookToLibrary("Shards of Earth", 'Adrian Tchaikovsky', 560, 2021, true)
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

		const read = document.createElement('div')
		read.classList.add('book-status')
		if (book.status) {
			read.textContent = '📘'
		}
		card.appendChild(read)
	}
}

window.onload(displayBooks())