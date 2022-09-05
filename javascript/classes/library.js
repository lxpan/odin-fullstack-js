// Re-implements the library example from the Objects tutorial
class Book {
    constructor(title, author, pages, read) {
        this._title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    // similar to a Python @property
    get info() {
        return this.generateInfo();
    }

    get title() {
        return this._title;
    }

    set title(name) {
        this._title = name;
    }

    generateInfo() {
        let readString = (this.read === true) ? 'has read' : 'not read yet';
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readString}`;
    }
}

const theHobbit = new Book('The Hobbit', 'JRR Tolkien', '500', false);
console.log(theHobbit.info);

theHobbit.title = 'Foobarton';
console.log(theHobbit.title);
