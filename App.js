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
}


// Store Class: Handles Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);


// Event: Add a Book
document.querySelector('book-form').addEventListener('submit', (e) => {
    //Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

});


// Event: Remove a Book
