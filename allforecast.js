const axios = require("axios")
const cheerio = require("cheerio")

const app = async () => {


  const allforecast = await fetchData('https://allforecast.com/crypto/forecast_btc')
  const result = extractData(allforecast)

}

const fetchData = (url) => {
  return axios.get(url).then(response => response.data)
}



const extractData = (allforecast) => {
  const $ = cheerio.load(allforecast);
  const allforecast_price = $('#elegantwp-content-wrapper > div.right_box > div:nth-child(3) > div:nth-child(9) > div:nth-child(7) > div.left_kolum > div > table > tbody > tr:nth-child(1) > td.triangle-up').text()
  console.log(parseFloat(allforecast_price.split(" ").join("")).toFixed(0))
  
    // จำ cache ค่า
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

localStorage.setItem('allforecast', parseFloat(allforecast_price.split(" ").join("")).toFixed(0));

}

app()