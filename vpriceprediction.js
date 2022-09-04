const axios = require("axios")
const cheerio = require("cheerio")

const app = async () => {


  const vpriceprediction = await fetchData('https://vpriceprediction.com/bitcoin-price-prediction-today-usd')
  const result = extractData(vpriceprediction)
}

const fetchData = (url) => {
  return axios.get(url).then(response => response.data)
}



const extractData = (vpriceprediction) => {
  const $ = cheerio.load(vpriceprediction);
  const vpriceprediction_price = $('#content > div > div > div > div.mg-blog-post-box > article > div:nth-child(6) > table > tbody > tr:nth-child(1) > td:nth-child(1) > span').text()
  console.log(parseFloat(vpriceprediction_price.replace(/[^0-9\.]+/g, "")).toFixed(0))
  
  // จำ cache ค่า
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

localStorage.setItem('vpriceprediction', parseFloat(vpriceprediction_price.replace(/[^0-9\.]+/g, "")).toFixed(0));

}
app()