const axios = require("axios")
const cheerio = require("cheerio")

const app = async () => {


  const cryptopredictions = await fetchData('https://cryptopredictions.com/bitcoin')
  const result = extractData(cryptopredictions)

}

const fetchData = (url) => {
  return axios.get(url).then(response => response.data)
}



const extractData = (cryptopredictions) => {
  const $ = cheerio.load(cryptopredictions);
  const cryptopredictions_price = $('#page > div.container.detail-page > div.crypto-info > div.tables > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td.column100.column4').text()
  console.log(parseFloat(cryptopredictions_price.replace(/[^0-9\.]+/g, "")).toFixed(0))
  
  // จำ cache ค่า
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

localStorage.setItem('cryptopredictions', parseFloat(cryptopredictions_price.replace(/[^0-9\.]+/g, "")).toFixed(0));

}

app()