# Library App
https://mgkdante.github.io/Library-App/

This is a simple library app that allows you to add books to a list and keep track of them. You can add a book by clicking the "Add Book" button, which will open a form where you can enter the book's title, author, number of pages, and whether or not you have read it. Once you submit the form, the book will be added to the list.

You can also delete a book from the list by clicking the "Delete" button next to it.

## Technologies Used
- ### HTML
    The HTML code creates the structure of the web page, including the container, header, content, book form, and book list. The book form is a form that allows the user to add a new book to the list, while the book list is a table that displays the list of books.
- ### CSS
    The CSS code styles the HTML elements, including the layout, colors, and fonts. The container has a grid layout with two rows, the header has a grid layout with two columns, and the book form and book list have padding and margin. The add button and submit button have a background color of #ff4081 and a border radius of 5px, while the delete button has a background color of #ccc and a border radius of 5px. The book list has a hover effect that changes the background color to #f5f5f5.
- ### JavaScript
    The JavaScript code adds functionality to the web page, including adding and deleting books from the list, and updating the display of the list when changes are made. The Book constructor function creates a new book object with a title, author, pages, and read status. The addBookToLibrary function adds a new book to the myLibrary array. The createBookCard function creates a new row in the book list table with the book's information and a delete button. The displayBooks function updates the display of the book list by clearing the content element and adding each book to the table. The callbackFunction function is called when the user submits the book form and adds the new book to the list. The loadingFrom function hides the book form when the page loads.

## How to Use
- Clone the repository to your local machine.
- Open the index.html file in your web browser.
- Click the "Add Book" button to add a new book to the list.
- Fill out the form with the book's information and click "Submit".
- The book will be added to the list.
- To delete a book, click the "Delete" button next to it.
