import Product from './../models/product.js'

export const getAllTransactions = async(req,res) => {
    const { page, month,search } = req.query;
    const perPage = 10;
    const resultingTransactions = [];
    const transactions = await Product.find({}).skip((page - 1) * perPage).limit(perPage);
    for(const transaction of transactions) {
      const {title,description,price,dateOfSale} = transaction;
      const saleMonth = new Date(dateOfSale).getMonth() + 1;
      if(title.includes(search) || description.includes(search) || String(price).includes(search)) {
        if(saleMonth === parseInt(month)) {
          resultingTransactions.push(transaction);
        }
      }
    }
    res.json(resultingTransactions);
}

export const getStats = async(req,res,flag) => {
  const {month} = req.query;
  const transactions = await Product.find({});
  let itemsSold = 0;
  let itemsUnsold = 0;
  let totalPrice = 0;
  for(const transaction of transactions) {
    const {sold,price,dateOfSale} = transaction;
    const saleMonth = new Date(dateOfSale).getMonth() + 1;
    if(saleMonth === parseInt(month)) {
      if(sold) {
        itemsSold++;
        totalPrice += price
      } else {
        itemsUnsold++;
      }
    }
  }
  if(flag) {
    return {sale_amount: totalPrice,unsold_count: itemsUnsold,sell_count: itemsSold};
  } else {
    res.status(200).json({sale_amount: totalPrice,unsold_count: itemsUnsold,sell_count: itemsSold}); 
  }
}

export const barChartData = async(req,res,flag) => {
  const {month} = req.query;
  const ranges = ['0-100', '101-200', '201-300', '301-400', '401-500', '501-600', '601-700', '701-800', '801-900', '901-above'];
  const counts = {};

  ranges.forEach(range => {
      counts[range] = 0;
  });

  const transactions = await Product.find({});
  for(const transaction of transactions) {
    const {price,dateOfSale} = transaction;
    const saleMonth = new Date(dateOfSale).getMonth() + 1;
    if(saleMonth === parseInt(month)) {
      const index = Math.min(Math.floor(price / 100), ranges.length - 1);
      counts[ranges[index]]++;
    }
  }
  if(flag) {
    return counts;
  } else {
    res.status(200).json(counts);
  }
}

export const pieChartData = async(req,res,flag) => {
  const {month} = req.query;
  const categoriesCount = {};
  const transactions = await Product.find({});
  for(const transaction of transactions) {
    const {category,dateOfSale} = transaction;
    const saleMonth = new Date(dateOfSale).getMonth() + 1;
    if(saleMonth === parseInt(month)) {
      categoriesCount[category] ? categoriesCount[category]++: categoriesCount[category] = 1;
    }
  }
  if(flag) {
    return categoriesCount;
  } else {
    res.status(200).json(categoriesCount);
  }
}


export const combinedData = async(req,res) => {
  let statistics,barData,pieData;
  statistics = await getStats(req,res,true);
  barData = await barChartData(req,res,true);
  pieData = await pieChartData(req,res,true);
  res.status(200).json({stats: statistics,barchart_data: barData,piechart_data: pieData});
}

