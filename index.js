const openDialog = document.getElementById("add-book")

const dialog = document.getElementById("form-dialog")

const titleEntry = document.getElementById("book-name")
const authorEntry = document.getElementById("author")
const pagesEntry = document.getElementById("pages")
const readEntry = document.getElementById("read")
const submitEntry = document.getElementById("form-submit")

const bookList = document.getElementById('book-list')

const myLibrary = []

bookList.style.display = "none"


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

const addBookToLibrary = (book) => {
    myLibrary.push(book)
}

openDialog.addEventListener("click", function () {
    dialog.showModal()
})

dialog.addEventListener('click', (event) => {
    if (event.target.id === 'form-dialog') {
        dialog.close();
    }
})

submitEntry.addEventListener('click', (event) => {
    event.preventDefault();
    bookList.style.display = "grid"
    dialog.close();
    const bookToAdd = new Book(titleEntry.value, authorEntry.value, pagesEntry.value, readEntry.checked);
    addBookToLibrary(bookToAdd);
    titleEntry.value = '';
    authorEntry.value = '';
    pagesEntry.value = '';
    readEntry.checked = false;
    bookList.innerHTML = ''; // Clear the list before adding new books

    for (let book of myLibrary) { // Use 'of' to get the book objects
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        const cardTitle = document.createElement('h2');
        cardTitle.textContent = book.title;

        const cardAuthor = document.createElement('p');
        cardAuthor.textContent = `by: ${book.author}`;

        const cardPages = document.createElement('p');
        cardPages.textContent = `pages: ${book.pages}`;

        const cardCheckbox = document.createElement("div");
        const cardCheckboxLabel = document.createElement('label');
        cardCheckboxLabel.setAttribute("for", "read-book");
        cardCheckboxLabel.textContent = 'read: ';

        const cardCheckboxInput = document.createElement('input'); // Should be 'input', not 'label'
        cardCheckboxInput.setAttribute("type", "checkbox");
        cardCheckboxInput.setAttribute("id", "read-book");
        cardCheckboxInput.setAttribute("name", "book_name");
        cardCheckboxInput.checked = book.read; // Set the checked state based on the book object

        cardCheckbox.appendChild(cardCheckboxLabel);
        cardCheckbox.appendChild(cardCheckboxInput);

        bookCard.appendChild(cardTitle);
        bookCard.appendChild(cardAuthor);
        bookCard.appendChild(cardPages);
        bookCard.appendChild(cardCheckbox);

        bookList.appendChild(bookCard); // Append the book card to the book list
    }
});


