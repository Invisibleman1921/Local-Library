/*
const accounts = [
  {
    id: "5f446f2ecfaf0310387c9603",
    picture: "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
    age: 25,
    name: {
      first: "Esther",
      last: "Tucker",
    },
    company: "ZILLACON",
    email: "esther.tucker@zillacon.me",
    registered: "Thursday, May 28, 2015 2:51 PM",
  },
*/

function findAccountById(accounts, id) {
  //return the account that matches id
  let foundAccount=accounts.find((account) => account.id === id);
  return foundAccount;
}

function sortAccountsByLastName(accounts) {
  //returns sorted array of accounts by last name.
  //parks3.sort((parkA, parkB)=>
  //(parkA.name < parkB.name ? 1:-1));

  let sortedNames = accounts.sort((nameA, nameB) => 
    (nameA.name.last > nameB.name.last ? 1:-1));
  return sortedNames;
}

function getTotalNumberOfBorrows(account, books) {
  //returns a number for however many times a person borrowed that book.

  return books.reduce((acc, {borrows}) => {
    return acc+(borrows.filter( (borrow) => borrow.id === account.id).length )
  },0)

  //reduce takes an array of objects and reducing it to a single number.
}

function getBooksPossessedByAccount(account, books, authors) {
  //returns all books a person is currently borrowing.
  //The author object is nested within the book object.
  //let foundBooks = books.borrows.id.find((account, book) => account.id===book.borrows.id);
  //reduce method to nest author inside of book
  let bookIsCheckedOutByAccount = books.filter((book) => {
    return accountBorrowedThisBook = book.borrows.some((borrow) => borrow.id ===account.id && borrow.returned === false);
  });
  
  let fullBookInfo = bookIsCheckedOutByAccount.map((bookInfo) => {
    let {authorId} = bookInfo;
    let [author] = authors.filter((author) => author.id === authorId);
    bookInfo.author = author;
    return bookInfo;
  });
  return fullBookInfo;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
