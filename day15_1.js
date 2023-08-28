const detailBook = {
    nameBook: 'John Davison Rockefellar',
    priceBook: 100000,
  }
  
  function purchasedBook(detailBook, discPercent, taxPercent, amountOfStock, amountOfPurchase, durationOfCredit ) {
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

    // let durationCredit = credit.map(credit => {
    //   let properties = {
    //     "month": duration.credit,
    //     "price": ((detailBook.priceBook/duration.credit) + creditInterest)
    //   };
    //   if (duration.credit <=1){
    //     properties['price'] = (detailBook.priceBook/duration.credit),
    //   }
    //   if (duration.credit > 1){
    //     properties['price'] = (detailBook.priceBook/duration.credit),
    //   }
    //   if (duration.credit >= 3){
    //     properties['price'] = ((detailBook.priceBook/duration.credit) + creditInterest),
    //   }
    //   return price;
    // });


    // let creditInterest = (((5/100)*detailBook.priceBook)*amountOfPurchase)
    // let resultArray = []
    
    // let priceEveryMonth = ((detailBook.priceBook/durationOfCredit) + creditInterest)
    // for (let x = 0; x < durationOfCredit; x++) {
    //   resultArray.push(
    //     {
    //       creditTo: x + 1,
    //       priceMonth: priceEveryMonth
    //     }  
    //   )
    // }


    // let creditInterest = (((5/100)*detailBook.priceBook)*amountOfPurchase)
    // // const dueDate = ['September', 'Oktober', 'November', 'Desember', 'Januari', 'Februar', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus']

    // let resultArray = []
    // const kredit = 3
    // let currentDate = new Date()

    // let priceEveryMonth = ((detailBook.priceBook/durationOfCredit) + creditInterest)

    // for (let x = 0; x < durationOfCredit; x++) {
    //   next30Date = next30Date.setDate(currentDate.getDate() + (30 * x + 1))

    //   console.log(priceEveryMonth)
    //  resultArray.push(new Date(next30Date).toLocaleDateString("en-US"))
    // }


    let amountOfCreditInterest = ((((5/100)*detailBook.priceBook))*amountOfPurchase)
    let resultArray = []
    const credit = durationOfCredit
    let currentDate = new Date()
    
    let priceEveryMonth = (((detailBook.priceBook*amountOfPurchase)/durationOfCredit) + amountOfCreditInterest)
    for (let x = 0; x < durationOfCredit; x++) {
     const next30Date = currentDate.setDate(currentDate.getDate() + (30 * x + 1))

     resultArray.push(new Date(next30Date).toLocaleDateString("en-US"))
    }


    // const totalPriceBook = (detailBook.priceBook * amountOfPurchase)
    
    // const amountDiscountTotal = ((discPercent/100) * totalPriceBook)
    // const priceAfterDiscountTotal = totalPriceBook - amountDiscountTotal;
    
    // const amountTaxTotal = ((taxPercent/100) * priceAfterDiscountTotal)
    // const priceAfterTaxTotal = priceAfterDiscountTotal + amountTaxTotal  
    // // console.log(priceAfterTaxTotal)
    
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
      creditTo : durationOfCredit,
      priceEveryMonth : priceEveryMonth,
      dueDate : resultArray,
    }
     
  }
  
  console.log(purchasedBook(detailBook, 10, 5, 19, 2, 2))

 