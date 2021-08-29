/*TO DO*/

/*
enable adding new books
enable localStorage

*/


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
   print() { // not used by anything
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

//pre loaded books in library
addBookToLibrary("The Lost Colony", 'A. G. Riddle', 380, 2019, false)
addBookToLibrary("Shards of Earth", 'Adrian Tchaikovsky', 560, 2021, true)
addBookToLibrary('Bird Box', 'Josh Malerman', 262, 2014, false)
addBookToLibrary('The Persecution and Assassination of Jean-Paul Marat as Performed by the Inmates of the Asylum of Charenton Under the Direction of the Marquis de Sade', 'Peter Weiss', 128, 1963, true)
addBookToLibrary('A Psalm for the Wild-Built', 'Becky Chambers', 160, 2021, true)
addBookToLibrary('Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, Witch', 'Terry Pratchett', 491, 1990, false)
addBookToLibrary('The Midnight Library', 'Matt Haig', 304, 2020, false)
addBookToLibrary("Sprinting Through No Man's Land: Endurance, Tragedy, and Rebirth in the 1919 Tour de France", 'Adin Dobkin', 316, 2021, true)
addBookToLibrary('Two Spies in Caracas', 'Moisés Naím', 347, 2019, false)
addBookToLibrary('All Quiet on the Western Front', 'Erich Maria Remarque', 296, 1929, true)
addBookToLibrary("A Modest Proposal", 'Jonathan Swift', 48, 1729, false)
addBookToLibrary('The Trigger: Hunting the Assassin Who Brought the World to War', 'Tim Butcher', 352, 2014, false)

const jsTarget = document.querySelector('.js-target')

function displayBooks() {
	if (document.querySelector('.library')) {
		document.querySelector('.library').remove()
	}

	const library = document.createElement('div')
	library.classList.add('library')
	jsTarget.appendChild(library)

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

//toggle textcontent on label of read status checkbox in add book form
const addBookStatus = document.querySelector('#new-status')
const addBookStatusLabel = document.querySelector('#new-status-label')
function toggleCheckboxIcon(e) {
	e.target.checked ?
		addBookStatusLabel.textContent = `✅ Read` :
		addBookStatusLabel.textContent = `📗 Unread`
}
addBookStatus.addEventListener('change', toggleCheckboxIcon)

// global event listener on body
jsTarget.addEventListener('click', e => {
	//read status toggle
	if (e.target.className === 'book-status') {
		triggerToggleReadStatus(e);
	}
	//delete book
	if (e.target.className === 'button__delete') {
		triggerDeleteBook(e)
	}
})

//change book read status when clicking on icon in card
function triggerToggleReadStatus(e) {
	const bookId = e.target.parentElement.parentElement.dataset.bookId
	bookLibrary[bookId].toggleReadStatus()
	if (bookLibrary[bookId].status) {
		e.target.textContent = '✅'
	} else {
		e.target.textContent = '📗'
	}
}

//delete book card and entry when clicking on delete icon
function triggerDeleteBook(e) {
	const bookId = e.target.parentElement.parentElement.dataset.bookId
	bookLibrary.splice(bookId, 1)

	displayBooks()
}

//create new book from form
const newBookForm = document.querySelector('.new-book-form')

function createNewBook(e) {
	e.preventDefault() // prevents page from reloading
	const newTitle = document.querySelector('#new-title').value
	const newAuthor = document.querySelector('#new-author').value
	const newPages = document.querySelector('#new-pages').value
	const newYear = document.querySelector('#new-year').value
	const newStatus = document.querySelector('#new-status').checked

	const newBook = new Book(newTitle, newAuthor, newPages, newYear, newStatus)
	bookLibrary.unshift(newBook)

	displayBooks()
	resetForm()
}

//reset form
function resetForm() {
	document.querySelector('#new-title').value = ''
	document.querySelector('#new-author').value = ''
	document.querySelector('#new-pages').value = ''
	document.querySelector('#new-year').value = ''
	document.querySelector('#new-status').checked = true
}

newBookForm.addEventListener('submit', createNewBook)