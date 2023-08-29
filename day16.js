const detailBook = {
    nameBook: 'John Davison Rockefellar',
    priceBook: 100000,
  }
  
  function purchasedBook(detailBook, discPercent, taxPercent, amountOfStock, amountOfPurchase, durationOfCredit) {
    const amountDiscount = ((discPercent/100) * detailBook.priceBook)
    const priceAfterDiscount = detailBook.priceBook - amountDiscount;
    
    const amountTax = ((taxPercent/100) * priceAfterDiscount)
    const priceAfterTax = priceAfterDiscount + amountTax

      
    let stockLeft = amountOfStock;
    if (amountOfPurchase > amountOfStock) {
      stockLeft = amountOfStock
    } else {
      stockLeft = amountOfStock - amountOfPurchase
    }
    
    let totalPrice = 0;
    let messageReturn = (amountOfStock >= 1)? 'Stock still available' : 'Stock not available';
    
    for (let x=1; x <= amountOfPurchase; x++) {
        amountOfStock = amountOfStock - 1;
        totalPrice = totalPrice + priceAfterTax;
  
        if (amountOfStock <= 0) {
          messageReturn = 'Stock not available'
          
          break;
        }
    }

    // let resultArray = []
   
    // let priceEveryMonth = ((detailBook.priceBook*amountOfPurchase)/durationOfCredit)
    // for (let x = 0; x < durationOfCredit; x++) {
    //  const next30Date = currentDate.setDate(currentDate.getDate() + (30 * x + 1))

    //  resultArray.push(new Date(next30Date).toLocaleDateString("en-US"))
    // }

    let currentDate = new Date();

    let priceEveryMonth = ((priceAfterTax * amountOfPurchase) / durationOfCredit)
    // let amountOfCredit = priceEveryMonth * durationOfCredit

    let arr = [];
    for(let month = 0; month < durationOfCredit; month ++ ){
        currentDate.setDate(currentDate.getDate() + 30);
        arr.push({
            creditTo: month + 1,
            dueDate : currentDate.toISOString().split('T')[0],
            priceEveryMonth : priceEveryMonth,
            // totalCredit : amountOfCredit
            }
          )
        }
        arr.map((arr) => console.log(arr));
        console.log(arr)

    return {
      nameBook: detailBook.nameBook,
      priceBook: detailBook.priceBook,
      discPercent: discPercent,
      amountDiscount: amountDiscount,
      taxPercent: taxPercent,
      amountTax: amountTax,
      priceAfterDiscount: priceAfterDiscount,
      priceAfterTax: priceAfterTax,
      stockLeft : stockLeft,
      totalPriceTaxPerBook: totalPrice,
      // totalPriceTaxAfterTotal: priceAfterTaxTotal,
      statusBook: messageReturn,
      dueDate : arr,
    }
     
  }
  
  console.log(purchasedBook(detailBook, 10, 5, 19, 2, 3))