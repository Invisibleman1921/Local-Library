function findAuthorById(authors, id) {
   //returns the author object matching the ID.
  let foundAuthor = authors.find((author) => author.id === id);
  return foundAuthor;
}

function findBookById(books, id) {
  //return the book object matching that ID.
  let foundBook = books.find((book) => book.id === id);
  return foundBook;
}

function booksIsCheckedOutStatus(booksArray, boolean){
  return booksArray.filter((item) => {
    return item.borrows[0].returned == boolean
  });
  //return booksArray;
}

function partitionBooksByBorrowedStatus(books) {
  //returns an array inside an array.
  //The first array is a list of books that have been loaned out and not returned.
  //The second array is a list of books that have been loaned out and returned.
  //You can check for the return status by looking at the first transaction in the `borrows` array.

  let borrowedBooks = booksIsCheckedOutStatus(books,false);
  let returnedBooks = booksIsCheckedOutStatus(books,true);
  let allBooks=[borrowedBooks, returnedBooks];
  return allBooks;
}

function getBorrowersForBook(book, accounts) {
  //returns an array of all transactions from the book's `borrows` key. 
  //However, each transaction should include the related account information and the `returned` key.

  /*
  Create a loop to go through each book to push the users information into a new array.
  Add the books 'returned' key at end.
  return array.
  */  
 let {borrows} = book;//destructs the book object to just the borrows object
  //for every borrow in the borrows object
  let result = borrows.map((borrow) => {
    //Creates an array of accounts that has borrow id match the account id.
    let accountMatches = accounts.filter((account) => {
      return account.id === borrow.id;
    });
    //Remove the extra account id, and return the destructed array.
    let [acountsWithoutIds] = accountMatches.map((account) => {
      delete account.id;
      return account;
    });
    //Add the borrow's object keys and values with the account object key+values
    let resultingBorrow = {...borrow, ...acountsWithoutIds};
    return resultingBorrow;
  })
  return result.slice(0 ,10)
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
