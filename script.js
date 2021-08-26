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

	toggleReadStatus() {
		this.status !== true ? this.status = true : this.status = false
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

addBookToLibrary("The Lost Colony", 'A. G. Riddle', 380, 2019, false)
addBookToLibrary("Shards of Earth", 'Adrian Tchaikovsky', 560, 2021, true)
addBookToLibrary("A Modest Proposal", 'Jonathan Swift', 48, 1729, false)
addBookToLibrary('Bird Box', 'Josh Malerman', 262, 2014, false)

const library = document.querySelector('.library')


function displayBooks() {
	bookLibrary.forEach( (book, i) =>  {
		const card = document.createElement('div')
		card.classList.add('book-card')
		card.setAttribute('data-book-id', i)
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

		const icons = document.createElement('div')
		icons.classList.add('book-card-icons')
		card.appendChild(icons)

		const read = document.createElement('button')
		read.classList.add('book-status')
		if (book.status) {
			read.textContent = '✅'
		} else {
			read.textContent = '📗'
		}
		icons.appendChild(read)

		const deleteBook = document.createElement('button')
		deleteBook.classList.add('button__delete')
		deleteBook.textContent = '❌'
		icons.appendChild(deleteBook)
	})
}

displayBooks()

//toggle add book form on click
const addBookButton = document.querySelector('#add-book')
function toggleForm(e) {
	e.target.nextElementSibling.classList.toggle('hidden')
}
addBookButton.addEventListener('click', toggleForm)

//toggle label on read status checkbox on add book form
const addBookStatus = document.querySelector('#new-status')
const addBookStatusLabel = document.querySelector('#new-status-label')
function toggleCheckboxIcon(e) {
	e.target.checked ?
		addBookStatusLabel.textContent = `✅ Read` :
		addBookStatusLabel.textContent = `📗 Unread`
}
addBookStatus.addEventListener('change', toggleCheckboxIcon)

//change book read status when clicking on icon in card
const readIcons = document.querySelectorAll('.book-status');

function triggerToggleReadStatus(e) {
	const bookId = e.target.parentElement.parentElement.dataset.bookId
	bookLibrary[bookId].toggleReadStatus()
	if (bookLibrary[bookId].status) {
		e.target.textContent = '✅'
	} else {
		e.target.textContent = '📗'
	}
}

readIcons.forEach(icon => icon.addEventListener('click', triggerToggleReadStatus) )


//delete book card and entry when clicking on delete icon



