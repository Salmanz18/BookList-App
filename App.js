// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Deep Work',
                author: 'Cal Newport',
                isbn: '456123'
            },
            {
                title: 'Be So Good They Can\'t Ignore You',
                author: 'Cal Newport',
                isbn: '987654'
            },
            {
                title: '168 Hours: You Have More Time Than You Think',
                author: 'Laura Vanderkam',
                isbn: '456123'
            }
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addToBookList(book));
    }

    static addToBookList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static clearFields() {
        document.querySelector('#title').value = "";
        document.querySelector('#author').value = "";
        document.querySelector('#isbn').value = "";
    }
}


// Store Class: Handles Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);


// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    //prevent default submit
    e.preventDefault();

    //Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //Instantiate the Book Class
    const book = new Book(title, author, isbn);

    //Add Book to UI
    UI.addToBookList(book);

    //Clear Input Fields After Submit
    UI.clearFields();
});


// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
});