// They think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.
// Define the Book class
var Book = /** @class */ (function () {
    function Book(title, author, genre, publicationYear) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.publicationYear = publicationYear;
    }
    Book.prototype.getInfo = function () {
        return "".concat(this.title, " by ").concat(this.author, ", ").concat(this.genre, ", published in ").concat(this.publicationYear);
    };
    return Book;
}());
// Create book objects
var book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", 1925);
var book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Novel", 1960);
// Display book information
console.log("Book 1:", book1.getInfo());
console.log("Book 2:", book2.getInfo());
