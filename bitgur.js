const axios = require("axios")
const cheerio = require("cheerio")

const app = async () => {
  const bitgur = await fetchData('https://bitgur.com/coin/BTC')
  const result = extractData(bitgur)
}

const fetchData = (url) => {
  return axios.get(url).then(response => response.data)
}

const extractData = (bitgur) => {
  const $ = cheerio.load(bitgur);
  const bitgur_price = $('body > div.wm > div.wm__center > div.container.container-no-padding > div > div.grid-panel.details.hidden-xs > div > div > div > div.flex-cols-lg > div.col.report > table > tbody > tr:nth-child(1) > td:nth-child(1) > b > span').text()
  console.log(parseFloat(bitgur_price).toFixed(0))

  // จำ cache ค่า
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

localStorage.setItem('bitgur', parseFloat(bitgur_price).toFixed(0));

}

app()


