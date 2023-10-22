const myLibrary = [];
const content = document.querySelector('.book-list')
const addButton = document.querySelector('.add-button')
const closeButton = document.querySelector('.close-button')
const bookForm = document.querySelector('.book-form')

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author
    this.pages = pages
    this.read = read
}

const addBookToLibrary = (title, author, pages, read) => {
    myLibrary.push(new Book(title, author, pages, read))
}

const createBookCard = (book) => {
    const table = document.createElement('table')
    const headerRow = document.createElement('tr')
    const titleHeader = document.createElement('th')
    const authorHeader = document.createElement('th')
    const pagesHeader = document.createElement('th')
    const readHeader = document.createElement('th')
    const deleteHeader = document.createElement('th')
    const row = document.createElement('tr')
    const title = document.createElement('td')
    const author = document.createElement('td')
    const pages = document.createElement('td')
    const read = document.createElement('td')
    const deleteButton = document.createElement('button')

    titleHeader.textContent = 'Title'
    authorHeader.textContent = 'Author'
    pagesHeader.textContent = 'Pages'
    readHeader.textContent = 'Read'
    deleteHeader.textContent = 'Delete'

    title.classList.add('book-title')
    author.classList.add('book-author')
    pages.classList.add('book-pages')
    read.classList.add('book-read')
    deleteButton.classList.add('delete-button')

    content.appendChild(table)

    table.appendChild(headerRow)
    headerRow.appendChild(titleHeader)
    headerRow.appendChild(authorHeader)
    headerRow.appendChild(pagesHeader)
    headerRow.appendChild(readHeader)
    headerRow.appendChild(deleteHeader)

    table.appendChild(row)

    row.appendChild(title)
    row.appendChild(author)
    row.appendChild(pages)
    row.appendChild(read)
    row.appendChild(deleteButton)

    title.textContent = book.title
    author.textContent = book.author
    pages.textContent = book.pages
    read.textContent = book.read
    deleteButton.textContent = 'Delete'

    deleteButton.addEventListener('click', () => {
        const index = myLibrary.indexOf(book)
        if (index > -1) {
            myLibrary.splice(index, 1)
        }
        content.removeChild(table)
    })

    return table
}

addButton.addEventListener('click', () => {
    document.querySelector('.book-form').style.display = 'block'
})

closeButton.addEventListener('click', () => {
    document.querySelector('.book-form').style.display = 'none'
})


const callbackFunction = (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read);
    loadingFrom();
    displayBooks(); // Update the display

    const form = document.querySelector('.form-container');
    form.reset(); // Reset form input values
}

bookForm.addEventListener('submit', callbackFunction)


const displayBooks = () => {
    myLibrary.forEach(book => {
        content.appendChild(createBookCard(book));
    });
}

const loadingFrom = () => {
    document.querySelector('.book-form').style.display = 'none'
}

loadingFrom();