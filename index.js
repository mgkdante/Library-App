
const myLibrary = [];
const content = document.querySelector('.content')
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
    const row = document.createElement('tr')
    const title = document.createElement('td')
    const author = document.createElement('td')
    const pages = document.createElement('td')
    const read = document.createElement('td')

    content.appendChild(table)

    table.appendChild(row)

    row.appendChild(title)
    row.appendChild(author)
    row.appendChild(pages)
    row.appendChild(read)

    title.textContent = book.title
    author.textContent = book.author
    pages.textContent = book.pages
    read.textContent = book.read

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
    displayBooks(); // Update the display
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
