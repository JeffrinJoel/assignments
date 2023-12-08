/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryPrices = {};
  transactions.forEach(item => {
    const { category, price } = item;
    if (categoryPrices.hasOwnProperty(category)) {
      categoryPrices[category].totalSpent += price;
    } else {
      categoryPrices[category] = {
        category: category,
        totalSpent: price,
      };
    }
  });
  const resultArray = Object.values(categoryPrices);
  return resultArray;
}

module.exports = calculateTotalSpentByCategory;
