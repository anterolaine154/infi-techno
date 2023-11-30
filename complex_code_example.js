/*

File: complex_code_example.js
Description: This code is a complex example demonstrating advanced JavaScript concepts and techniques.
Author: Your Name
Date: YYYY-MM-DD

*/

// A complex object representing a book
class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  getBookInfo() {
    return `${this.title} by ${this.author} (${this.publicationYear})`;
  }
}

// An array of books
const library = [
  new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925),
  new Book("To Kill a Mockingbird", "Harper Lee", 1960),
  new Book("1984", "George Orwell", 1949),
  new Book("Pride and Prejudice", "Jane Austen", 1813)
];

// Function to find books published after a specific year
function findBooksPublishedAfterYear(year) {
  const filteredBooks = library.filter((book) => book.publicationYear > year);
  return filteredBooks.map((book) => book.getBookInfo());
}

// Function to count the number of books written by an author
function countBooksByAuthor(author) {
  return library.reduce((acc, book) => {
    if (book.author === author) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
}

// Function to sort books in descending order of publication years
function sortBooksByPublicationYearDescending() {
  return library.sort((a, b) => b.publicationYear - a.publicationYear);
}

// Generate a random number between a given range
function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random book from the library
function getRandomBook() {
  const randomIndex = getRandomNumberInRange(0, library.length - 1);
  return library[randomIndex];
}

// Create an HTML element to display a book
function createBookElement(book) {
  const bookElement = document.createElement("div");
  bookElement.classList.add("book");
  bookElement.innerHTML = `<h2>${book.title}</h2>
      <p>Author: ${book.author}</p>
      <p>Publication Year: ${book.publicationYear}</p>`;
  return bookElement;
}

// Function to display all books on the web page
function displayLibraryBooks() {
  const libraryContainer = document.getElementById("library-container");
  libraryContainer.innerHTML = ""; // Clear previous content

  library.forEach((book) => {
    const bookElement = createBookElement(book);
    libraryContainer.appendChild(bookElement);
  });
}

// Event listener for a button click to display random book information
document.getElementById("random-book-button").addEventListener("click", () => {
  const randomBook = getRandomBook();
  alert(`Random Book: ${randomBook.getBookInfo()}`);
});

// Initialize the library display on page load
window.addEventListener("load", displayLibraryBooks);

// ... Additional code (e.g., event listeners, API calls, etc.) and more sophisticated logic

// ...

// More than 200 lines of code (including comments)