function findAuthorById(authors, id) {
   //returns the author object matching the ID.
   let foundAuthor = authors.id.find((author) => author.id === id);
   return foundAuthor;
}

function findBookById(books, id) {
  //return the book object matching that ID.
  let foundBook = books.id.find((book) => book.id === id);
  return foundBook;
}

function partitionBooksByBorrowedStatus(books) {
  //returns an array inside an array.
  //The first array is a list of books that have been loaned out and not returned.
  //The second array is a list of books that have been loaned out and returned.
  //You can check for the return status by looking at the first transaction in the `borrows` array.

  /*
  Find and add each book that is borrowed.
  Find and add each book that isn't borrowed.
  */
  let returnedBooks = books.borrows.filter((book) => book.borrow.returned === false);
  let borrowedBooks = books.borrows.filter((book) => book.borrows.returned === true);

  //combine and return arrays.
}

function getBorrowersForBook(book, accounts) {
  //returns an array of all transactions from the book's `borrows` key. 
  //However, each transaction should include the related account information and the `returned` key.

  /*
  Create a loop to go through each book to push the users information into a new array.
  Add the books 'returned' key at end.
  return array.
  */
}

/*
const books = [
  {
    id: "5f447132d487bd81da01e25e",
    title: "sit eiusmod occaecat eu magna",
    genre: "Science",
    authorId: 8,
    borrows: [
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: false,
      },
      {
        id: "5f446f2ed3609b719568a415",
        returned: true,
      },
    ],
  },

  const authors = [
  {
    id: 0,
    name: {
      first: "Lucia",
      last: "Moreno",
    },
  },
  {
    id: 1,
    name: {
      first: "Trisha",
      last: "Mathis",
    },
  },
*/


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
