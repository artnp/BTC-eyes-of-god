const axios = require("axios")
const cheerio = require("cheerio")

const app = async () => {

  const tradingbeast = await fetchData('https://tradingbeasts.com/price-prediction/bitcoin')
  const result = extractData(tradingbeast)
}

const fetchData = (url) => {
  return axios.get(url).then(response => response.data)
}

const extractData = (tradingbeast) => {
  const $ = cheerio.load(tradingbeast);
  const tradingbeasts_price = $('#txfeed > tbody > tr:nth-child(1) > td:nth-child(4)').first().text()
  console.log(parseFloat(tradingbeasts_price.replace(/[^0-9\.]+/g, "")).toFixed(0))
  
  // จำ cache ค่า
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

localStorage.setItem('tradingbeasts', parseFloat(tradingbeasts_price.replace(/[^0-9\.]+/g, "")).toFixed(0));

}
app()