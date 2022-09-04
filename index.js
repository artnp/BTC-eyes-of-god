const axios = require("axios")
const cheerio = require("cheerio")

const app = async () => {
  const bitgur = await fetchData('https://bitgur.com/coin/BTC')
  const result = extractData(bitgur)
  const thirtyrates = await fetchData('https://30rates.com/btc-to-usd-forecast-today-dollar-to-bitcoin')
  const result2 = extractData2(thirtyrates)
  const coincodex = await fetchData('https://coincodex.com/crypto/bitcoin/price-prediction')
  const result3 = extractData3(coincodex)
  const coinforecast = await fetchData('https://coinforecast.org/en/forecast/cryptocurrency/btc')
  const result4 = extractData4(coinforecast)
  const allforecast = await fetchData('https://allforecast.com/crypto/forecast_btc')
  const result5 = extractData5(allforecast)
  const tradingbeasts = await fetchData('https://tradingbeasts.com/price-prediction/bitcoin')
  const result6 = extractData6(tradingbeasts)
  const cryptopredictions = await fetchData('https://cryptopredictions.com/bitcoin')
  const result7 = extractData7(cryptopredictions)
  const walletinvestor = await fetchData('https://walletinvestor.com/forecast/bitcoin-prediction')
  const result8 = extractData8(walletinvestor)
  const vpriceprediction = await fetchData('https://vpriceprediction.com/bitcoin-price-prediction-today-usd')
  const result9 = extractData9(vpriceprediction)
}

const fetchData = (url) => {
  return axios.get(url).then(response => response.data)
}

const extractData = (bitgur) => {
  const $ = cheerio.load(bitgur);
  const bitgur_price = $('body > div.wm > div.wm__center > div.container.container-no-padding > div > div.grid-panel.details.hidden-xs > div > div > div > div.flex-cols-lg > div.col.report > table > tbody > tr:nth-child(1) > td:nth-child(1) > b > span').text()
  console.log(bitgur_price)
}
const extractData2 = (thirtyrates) => {
  const $ = cheerio.load(thirtyrates);
  const thirtyrates_price = $('#content > div.item-page > div:nth-child(3) > div > div:nth-child(5) > div:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(5) > strong').text()
  console.log(thirtyrates_price)
}
const extractData3 = (coincodex) => {
  const $ = cheerio.load(coincodex);
  const coincodex_price = $('body > app-root > app-root > div > div > div > div.col.main-col > app-coin-price-prediction > app-coin-prediction-chart > section > div.prediction-ranges > div.prediction-range.selected > div:nth-child(2)').text()
  console.log(coincodex_price)
}
const extractData4 = (coinforecast) => {
  const $ = cheerio.load(coinforecast);
  const coinforecast_price = $('body > div.page > div.main-content.side-content.pt-0 > div.container-fluid.forecast-cryptocurrency.top-padding > div:nth-child(9) > div:nth-child(4) > div > div.card-body.pd-15 > div > h6 > span').text()
  console.log(coinforecast_price)
}
const extractData5 = (allforecast) => {
  const $ = cheerio.load(allforecast);
  const allforecast_price = $('#elegantwp-content-wrapper > div.right_box > div:nth-child(3) > div:nth-child(9) > div:nth-child(7) > div.left_kolum > div > table > tbody > tr:nth-child(1) > td.triangle-up').text()
  console.log(allforecast_price)
}
const extractData6 = (tradingbeasts) => {
  const $ = cheerio.load(tradingbeasts);
  const tradingbeasts_price = $('#txfeed > tbody > tr:nth-child(1) > td:nth-child(4)').first().text()
  console.log(tradingbeasts_price)
}
const extractData7 = (cryptopredictions) => {
  const $ = cheerio.load(cryptopredictions);
  const cryptopredictions_price = $('#page > div.container.detail-page > div.crypto-info > div.tables > div:nth-child(2) > div > table > tbody > tr:nth-child(1) > td.column100.column4').text()
  console.log(cryptopredictions_price)
}
const extractData8 = (walletinvestor) => {
  const $ = cheerio.load(walletinvestor);
  const walletinvestor_price = $('#w0-container > table > tbody > tr:nth-child(1) > td:nth-child(2)').text()
  console.log(walletinvestor_price)
}
const extractData9 = (vpriceprediction) => {
  const $ = cheerio.load(vpriceprediction);
  const vpriceprediction_price = $('#content > div > div > div > div.mg-blog-post-box > article > div:nth-child(6) > table > tbody > tr:nth-child(1) > td:nth-child(1) > span').text()
  console.log(vpriceprediction_price)
}
app()