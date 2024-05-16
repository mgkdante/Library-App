class Book {
    constructor(title, author, pages, read){
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

const elements = {
    openDialog: document.getElementById("add-book"),
    dialog: document.getElementById("form-dialog"),
    titleEntry: document.getElementById("book-name"),
    authorEntry: document.getElementById("author"),
    pagesEntry: document.getElementById("pages"),
    readEntry: document.getElementById("read"),
    submitEntry: document.getElementById("form-submit"),
    bookList: document.getElementById('book-list')
}

const myLibrary = []

const displayBooks = () => {
    elements.bookList.style.display = myLibrary.length === 0 ? "none" : "grid";
    myLibrary.forEach(createCard);
}

const addBookToLibrary = (book) => {
    myLibrary.push(book);
    displayBooks();
}

elements.openDialog.addEventListener("click", () => elements.dialog.showModal());

elements.dialog.addEventListener('click', (event) => {
    if (event.target.id === 'form-dialog') {
        elements.dialog.close();
    }
})

const createCard = (book) => {
    const {title, author, pages, read} = book;
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = title;

    const cardAuthor = document.createElement('p');
    cardAuthor.textContent = `by: ${author}`;

    const cardPages = document.createElement('p');
    cardPages.textContent = `pages: ${pages}`;

    const cardCheckbox = document.createElement("div");
    const cardCheckboxLabel = document.createElement('label');
    cardCheckboxLabel.setAttribute("for", "read-book");
    cardCheckboxLabel.textContent = 'read: ';

    const cardCheckboxInput = document.createElement('input');
    cardCheckboxInput.setAttribute("type", "checkbox");
    cardCheckboxInput.setAttribute("id", "read-book");
    cardCheckboxInput.setAttribute("name", "book_name");
    cardCheckboxInput.checked = read;

    cardCheckbox.append(cardCheckboxLabel, cardCheckboxInput);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Book';
    deleteButton.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        elements.bookList.innerHTML = '';
        displayBooks();
    })

    cardCheckboxInput.addEventListener('change', () => {
        book.read = !book.read;
        console.log(book)
    });

    bookCard.append(cardTitle, cardAuthor, cardPages, cardCheckbox, deleteButton);
    elements.bookList.appendChild(bookCard);
}



elements.submitEntry.addEventListener('click', (event) => {
       if(!elements.authorEntry.checkValidity()
    && !elements.pagesEntry.checkValidity() && !elements.titleEntry.checkValidity()){
        elements.submitEntry.setCustomValidity('Please fill all fields')
    }
    else {
           event.preventDefault();
           elements.dialog.close();
           const bookToAdd = new Book(elements.titleEntry.value, elements.authorEntry.value, elements.pagesEntry.value, elements.readEntry.checked);
           addBookToLibrary(bookToAdd);
           elements.titleEntry.value = '';
           elements.authorEntry.value = '';
           elements.pagesEntry.value = '';
           elements.readEntry.checked = false;
           elements.bookList.innerHTML = '';
           displayBooks();
       }
});

displayBooks();