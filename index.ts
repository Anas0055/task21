// They think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.

// Define the Book class
class Book {
    title: string;
    author: string;
    genre: string;
    publicationYear: number;

    constructor(title: string, author: string, genre: string, publicationYear: number) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.publicationYear = publicationYear;
    }

    getInfo(): string {
        return `${this.title} by ${this.author}, ${this.genre}, published in ${this.publicationYear}`;
    }
}

// Create book objects
let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", 1925);
let book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Novel", 1960);

// Display book information
console.log("Book 1:", book1.getInfo());
console.log("Book 2:", book2.getInfo());
