const prices = [13, 5, 7, 3, 10, 11, 16, 19, 3]

const stockPicker = (prices) => {
  let minPrice = prices[0]
  let maxPrice = 0
  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price
    }
    if (price > maxPrice) {
      maxPrice = price
    }
  }

  return [prices.indexOf(minPrice), prices.indexOf(maxPrice)]
}

console.log(stockPicker(prices))

