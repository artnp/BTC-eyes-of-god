const axios = require("axios")
const cheerio = require("cheerio")

const app = async () => {

  const coinforecast = await fetchData('https://coinforecast.org/en/forecast/cryptocurrency/btc')
  const result = extractData(coinforecast)
}

const fetchData = (url) => {
  return axios.get(url).then(response => response.data)
}

const extractData = (coinforecast) => {
  const $ = cheerio.load(coinforecast);
  const coinforecast_price = $('body > div.page > div.main-content.side-content.pt-0 > div.container-fluid.forecast-cryptocurrency.top-padding > div:nth-child(9) > div:nth-child(4) > div > div.card-body.pd-15 > div > h6 > span').text()
  console.log(parseFloat(coinforecast_price.replace(/[^0-9\.]+/g, "")).toFixed(0))

    // จำ cache ค่า
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

localStorage.setItem('coinforecast', parseFloat(coinforecast_price.replace(/[^0-9\.]+/g, "")).toFixed(0));

}
app()