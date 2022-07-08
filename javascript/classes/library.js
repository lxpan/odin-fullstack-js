// Re-implements the library example from the Objects tutorial

const Book = class {

    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        let readString = (this.read === true) ? 'has read' : 'not read yet';
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readString}`;
    }
}

const theHobbit = new Book('The Hobbit', 'JRR Tolkien', '500', false);
console.log(theHobbit.info());

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = function() {
//         let readString = (this.read === true) ? 'has read' : 'not read yet';
//         return `${this.title} by ${this.author}, ${pages} pages, ${readString}`;
//     }
// }

// const theHobbit = new Book('The Hobbit', 'JRR Tolkien', '500', false);
// console.log(theHobbit.info());
