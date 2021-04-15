function totalCount(array){
  //return the total number of books.
  //Takes in an array, and just returns an integer representing it's length.
 return array.length;
}

//Helper function
//Even though it is const, it will change its value each time when called.
//Takes in an object
const sortObjectByValues = (obj) => {
    const keys = Object.keys(obj);
  return keys.sort((keyA, keyB) => {
    if (obj[keyA] > obj[keyB]) {
      return -1;
    } else {
      return 0;
    }
  });
};

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
  /*
  It returns a number that represents the number of books 
  _that are currently checked out of the library.
  This number can be found by looking at the first transaction in the `borrows` key of each book.
  If the transaction says the book has not been returned (i.e. `returned: false`), 
  the book has been borrowed.
  */
  //const result=books.every((book) => book.borrows[returned] === false);
  //return result.length.
  const bookCheckedOut = books.filter((book) => {
    return book.borrows[0].returned === false;
  });
  return bookCheckedOut.length;
}

//Takes in an array of objects
function getMostCommonGenres(books) {
  /*returns an array of 5 or less objects representing the most common borrowed genres.
  Ordered most common to least. Each object in the return array has 2 keys:
  Name and Count
  
  Must go through each book to count how many times it's been checked out.
  While counting the array length, must keep track of genre.
  After compiling, should add same genres together.
  Order highest to lowest.
  Return map of this genre to count

  Have it count how many times each book has been borrowed.
  Map book to genre
  Combine sums of respected genres
  Order highest to lowest (using sort)
  Return Map of top 5
  */
  
  const allGenres = books.reduce((acc, {genre}) => {
   if (acc[genre]) {
     acc[genre] += 1;
   }
   else {
     acc[genre] = 1;
   }
   return acc;
  }, {});
  
  const sortedGenres = sortObjectByValues(allGenres);

  let finalSortedArr = sortedGenres.map((item) => ({name: item, count: allGenres[item]})).slice(0,5);
 
  return finalSortedArr;
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
  let popularBooks = books.reduce((acc, {title}, counter) => {
    acc[title] = books[counter].borrows.length;
    counter++;
    return acc;
  }, {});
  let sortedBooks = sortObjectByValues(popularBooks);
  let formattedBooksArr = sortedBooks.map((item) => ({name: item, count: popularBooks[item]})).slice(0,5);

 return formattedBooksArr;
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
  //allAuthorsById is an array that has a counter, 
    const allAuthorsById = books.reduce((acc, {authorId}, counter, authorNumberToName) => {
      for (let i = 0; i < authors.length; i++) {
      
        if (books[counter].authorId === authors[i].id) {
        authorNumberToName = Object.values(authors[i].name).join(' ');
        break;
      }
    }
    if (acc[authorNumberToName]) { 
      acc[authorNumberToName] += books[counter].borrows.length;
    } else {
      acc[authorNumberToName] = books[counter].borrows.length;
    }
    counter++
    return acc;
  }, {});
  
  const sortedAuthors = sortObjectByValues(allAuthorsById);
  
  let formattedAuthorsArr = sortedAuthors.map((item) => ({name: item, count: allAuthorsById[item]})).slice(0,5);
  
  return formattedAuthorsArr;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
