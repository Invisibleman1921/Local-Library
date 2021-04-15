function totalCount(array){
  //return the total number of books.
  /*
  let totalCount = array.reduce(function(prev, cur) {
    return prev + cur.totalCount;
  }, 0);
  return totalCount;
  */
 return array.length;
}

function getTotalBooksCount(books) {
  //returns the number of book objects.
  //return _.size(books.Data)
  let bookCount = totalCount(books);
  return bookCount;
}

function getTotalAccountsCount(accounts) {
  //returns the total number of acounts.
  let accountCount = totalCount(accounts);
  return accountCount;
}

function getBooksBorrowedCount(books) {
  //It returns a number that represents the number of books 
  //_that are currently checked out of the library.
  //This number can be found by looking at the first transaction in the `borrows` key of each book.
  //If the transaction says the book has not been returned (i.e. `returned: false`), 
  //the book has been borrowed.
  const result=books.every((book) => book.borrows[returned] === false);
  return result.length;
}

function getMostCommonGenres(books) {
    //returns an array of 5 or less objects representing the most common borrowed genres.
  //Ordered most common to least.
  //Each object in the return array has 2 keys:
  //Name and Count
  /*
   [
    { name: "Nonfiction", count: 9 },
    { name: "Historical Fiction", count: 7 },
    { name: "Thriller", count: 7 },
    ...
  ]
  */
  //Must go through each book to count how many times it's been checked out.
  //While counting the array length, must keep track of genre.
  //After compiling, should add same genres together.
  //Order highest to lowest.
  //Return map of this genre to count

  //Have it count how many times each book has been borrowed.
  //Map book to genre
  //Combine sums of respected genres
  //Order highest to lowest (using sort)
  //Return Map of top 5
}

function getMostPopularBooks(books) {
  //Returns an aray of x<=5 represeting the most populat books.
  //Each object in the array has 2 keys:
  //Name and Count
  /*
  [
    { name: "incididunt nostrud minim", count: 30 },
    { name: "culpa do sint", count: 30 },
    { name: "ullamco est minim", count: 29 },
    ...
  ]
  */
  /*
  Count number of times each book has been borrowed
  Map count to title.
  Order books (using sort) from most borrowed to least.
  Return top 5.
  */
}

function getMostPopularAuthors(books, authors) {
  //retrns array of x<=5 showing the most popular authors.
  //Must add up all the times an authors books have been borrowed.
  //Each object in the array has 2 kets:
  //Name and Count.
  /*
  [
    { name: "Cristina Buchanan", count: 112 },
    { name: "Tami Hurst", count: 83 },
    { name: "Chrystal Lester", count: 80 },
    ...
  ]
  */
  /*
  Count number of times each book has been borrowed.
  Map book to author ID
  Combine sums of respected authors.
  Order array (using sort) from most borrowed to least.
  Return top 5.
  */
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
