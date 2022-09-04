const axios = require("axios")
const cheerio = require("cheerio")

const app = async () => {

  const walletinvestor = await fetchData('https://walletinvestor.com/forecast/bitcoin-prediction')
  const result = extractData(walletinvestor)

}

const fetchData = (url) => {
  return axios.get(url).then(response => response.data)
}


const extractData = (walletinvestor) => {
  const $ = cheerio.load(walletinvestor);
  const walletinvestor_price = $('#w0-container > table > tbody > tr:nth-child(1) > td:nth-child(2)').text()
  console.log(parseFloat(walletinvestor_price.replace(/[^0-9\.]+/g, "")).toFixed(0))
  
  // จำ cache ค่า
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

localStorage.setItem('walletinvestor', parseFloat(walletinvestor_price.replace(/[^0-9\.]+/g, "")).toFixed(0));

}

app()