// function Book(detailBook){
//   const nameBook = 'Henry Ford';
//   let priceBook = 190000;
//   const amountDiscount = 15;
//   priceBook = priceBook - ((amountDiscount/100)*priceBook)
  
//   let bookDescription = '${nameBook} priceBook - (amountDiscount/100)*priceBook';
// }
// console.log(priceBook, bookDescription);

//............................................//

// function Book(henry, 15, 10){
//   const
//   let priceBook = 190000
//   priceBook = 
  
// }
// console.log(a, b, c);

//...........................................//

const detailBook = {
    nameBook: "Henry Ford",
    priceBook: 190000,
    stockBook: 20,
  }
  
function myBook(detailBook, amountDiscount, amountTax) {

  let priceAfterDiscount = detailBook.priceBook - ((amountDiscount/100)*detailBook.priceBook)
  const PriceAfterTax = priceAfterDiscount + ((amountTax/100)*priceAfterDiscount)

  let stockAvailable = detailBook.stockBook > 0 ? true : false ;
  
//   detailBook.amountDiscount = amountDiscount
//   detailBook.priceAfterDiscount = priceAfterDiscount
//   detailBook.amountTax = amountTax
//   detailBook.PriceAfterTax = PriceAfterTax
//   detailBook.stockAvailable = stockAvailable
  
//   return detailBook;
// }

  return {
    nameBook: detailBook.nameBook,
    priceBook: detailBook.priceBook,
    amountDiscount: amountDiscount, 
    priceAfterDiscount: priceAfterDiscount,
    amountTax: amountTax,
    PriceAfterTax: PriceAfterTax,
    stockAvailable: stockAvailable,
  }
}
console.log(myBook(detailBook, 10, 5))
