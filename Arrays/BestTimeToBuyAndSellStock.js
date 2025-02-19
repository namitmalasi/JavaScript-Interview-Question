function bestTimeToBuyAndSellStock(prices) {
  let buyPrice = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (buyPrice > prices[i]) {
      buyPrice = prices[i];
    }

    const newProfit = prices[i] - buyPrice;
    if (newProfit > profit) {
      profit = newProfit;
    }
  }

  return profit;
}
