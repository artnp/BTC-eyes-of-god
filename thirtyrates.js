const axios = require("axios")
const cheerio = require("cheerio")

const app = async () => {
  const thirtyrates = await fetchData('https://30rates.com/btc-to-usd-forecast-today-dollar-to-bitcoin')
  const result = extractData(thirtyrates)
}

const fetchData = (url) => {
  return axios.get(url).then(response => response.data)
}


const extractData = (thirtyrates) => {
  const $ = cheerio.load(thirtyrates);
  const thirtyrates_price = $('#content > div.item-page > div:nth-child(3) > div > div:nth-child(5) > div:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(5) > strong').text()
  console.log(parseFloat(thirtyrates_price).toFixed(0))

  
  // จำ cache ค่า
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

localStorage.setItem('thirtyrates', parseFloat(thirtyrates_price).toFixed(0));

}

app()