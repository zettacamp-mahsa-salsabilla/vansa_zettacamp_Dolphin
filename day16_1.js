
//Object Spread Operator
    const detailBook = {
    "nameBook": "John Davison Rockefellar",
    "priceBook": "100000",
  };

  const anotherDetailBook = detailBook;
  detailBook.years = ['2016', '2017'];

  const detailBook2 = {...detailBook};
  detailBook.years.push('2018');

  
  function purchasedBook(discPercent, taxPercent, amountOfPurchase, durationOfCredit) {
    const amountDiscount = ((discPercent/100) * detailBook.priceBook)
    const priceAfterDiscount = detailBook.priceBook - amountDiscount;
    
    const amountTax = ((taxPercent/100) * priceAfterDiscount)
    const priceAfterTax = priceAfterDiscount + amountTax


    let currentDate = new Date();

    let priceEveryMonth = ((priceAfterTax * amountOfPurchase) / durationOfCredit)
    let amountOfCredit = priceEveryMonth * durationOfCredit

    let arr = [];
    for(let month = 0; month < durationOfCredit; month ++ ){
        currentDate.setDate(currentDate.getDate() + 30);
        arr.push({
            creditTo: month + 1,
            dueDate : currentDate.toISOString().split('T')[0],
            priceEveryMonth : priceEveryMonth,
            totalCredit : amountOfCredit
        })
      }
    console.log(detailBook2);

//Object Destructuring
    const {nameBook, priceBook} = detailBook;
    console.log(nameBook, priceBook);

    return {
      dueDate : arr,
    }
  }
  console.log(purchasedBook(10, 5, 2, 3))