const detailBook = {
    nameBook: 'John Davison Rockefellar',
    priceBook: 100000,
  }
  
  function purchasedBook(detailBook, discPercent, taxPercent, amountOfStock, amountOfPurchase) {
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
    // let messageReturn = 'Stock still available'
    let messageReturn = (amountOfStock >= 1)? 'Stock still available' : 'Stock not available';
    
    for (let x=1; x <= amountOfPurchase; x++) {
        amountOfStock = amountOfStock - 1;
        totalPrice = totalPrice + priceAfterTax;
  
        if (amountOfStock <= 0) {
          messageReturn = 'Stock not available'
          
          break;
        }
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
    }
     
  }
  
  console.log(purchasedBook(detailBook, 10, 5, 19, 20))