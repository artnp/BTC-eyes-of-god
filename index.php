<html>
<head>
  <title>BTC ตาทิพย์</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
<style>
.containerss{
  width: 320px;
height: 15px;
background: grey;
}
.progressbarss{
  width: 0%;
height: 15px;
background-image: linear-gradient(to right, green , #1CE23F);
}
.progressbarss2{
  width: 0%;
height: 15px;
background-image: linear-gradient(to right, green , #1CE23F);
}
.progressbarss3{
  width: 0%;
height: 15px;
background-image: linear-gradient(to right, green , #1CE23F);
}
</style>

</head>
<body>
<div class="container text-center">
  <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div class="col">
      <div class="p-3 border bg-light">Bitgur<br><b><? echo exec("node bitgur.js"); set_time_limit(1000);?></b></div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">30 rates<br><b><? echo exec("node thirtyrates.js"); set_time_limit(1000);?></b></div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Coincodex<br><b><? echo exec("node coincodex.js"); set_time_limit(1000);?></b></div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Coinforecast<br><b><? echo exec("node coinforecast.js"); set_time_limit(1000);?></b></div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Allforecast<br><b><? echo exec("node allforecast.js"); set_time_limit(1000);?></b></div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Trading beasts<br><b><? echo exec("node tradingbeasts.js"); set_time_limit(1000);?></b></div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Crypto predictions<br><b><? echo exec("node cryptopredictions.js"); set_time_limit(1000);?></b></div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Wallet investor<br><b><? echo exec("node walletinvestor.js"); set_time_limit(1000);?></b></div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Vprice prediction<br><b><? echo exec("node vpriceprediction.js"); set_time_limit(1000);?></b></div>
    </div>
    <div class="col">
      <div class="p-3 border bg-yellow">ราคาเฉลี่ยกลางทั้งหมด<b>

<h3><u><div id='allprice'></div></u></h3>
      </b></div>
    </div>
  </div>
</div>
<br>

<div class="container px-4 text-center">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3 border bg-light">ฐานราคาต่ำสุดรอบวัน<b><div id='lowday'></div></b></div>
    </div>
    <div class="col">
     <div class="p-3 border bg-light">ราคาปัจจุบัน<b><div id='info'></div></b></div>
    </div>
  </div>
</div>
<br>
<div class="container px-4 text-center">
  <div class="row gx-5">
    <div class="col">
    <div class="p-3 border bg-light">ตัดสินใจ [1] ราคาปัจจุบัน:ราคากลาง<b><div id='decision'></div></b></div>
    </div>

  </div>
</div>
<br><center>ตัดสินใจ [2]
<!-- TradingView Widget BEGIN -->
<script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js" async>
  {
  "interval": "5m",
  "width": 425,
  "isTransparent": true,
  "height": 360,
  "symbol": "BINANCE:BTCBUSD",
  "showIntervalTabs": false,
  "locale": "th_TH",
  "colorTheme": "light"
}
  </script>
<!-- TradingView Widget END --><br>
ตัดสินใจ [3] </center>
</center>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>





<center>
<table>
<tbody>
<tr>
<td>Fibonacci Retracement : 61.8%<div class="containerss"><div class="progressbarss2"></div></div></div></td>
<td><font color='white'>...</font</td>
<td>Fibonacci Retracement: 38.2%<div class="containerss"><div class="progressbarss3"></div></div></div></td>
</tr>
</tbody>
</table>
บาร์ยิ่งอยู่ต่ำยิ่งดี

<table>
<tbody>
<tr>
<td><div id='percent100'></div></td>
<td><div id="recom"></div></td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr>
<td><div class="containerss"><div class="progressbarss"></div></div></td>
</tr>
</tbody>
</table>
  </div>
</div></center><br>


<script>
  
localStorage.setItem("allforecast", "<?php $allforecast = fopen('scratch/allforecast','r');echo fgets($allforecast);fclose($allforecast);?>");
localStorage.setItem("bitgur", "<?php $bitgur = fopen('scratch/bitgur','r');echo fgets($bitgur);fclose($bitgur);?>");
localStorage.setItem("coincodex", "<?php $coincodex = fopen('scratch/coincodex','r');echo fgets($coincodex);fclose($coincodex);?>");
localStorage.setItem("coinforecast", "<?php $coinforecast = fopen('scratch/coinforecast','r');echo fgets($coinforecast);fclose($coinforecast);?>");
localStorage.setItem("cryptopredictions", "<?php $cryptopredictions = fopen('scratch/cryptopredictions','r');echo fgets($cryptopredictions);fclose($cryptopredictions);?>");
localStorage.setItem("thirtyrates", "<?php $thirtyrates = fopen('scratch/thirtyrates','r');echo fgets($thirtyrates);fclose($thirtyrates);?>");
localStorage.setItem("tradingbeasts", "<?php $tradingbeasts = fopen('scratch/tradingbeasts','r');echo fgets($tradingbeasts);fclose($tradingbeasts);?>");
localStorage.setItem("vpriceprediction", "<?php $vpriceprediction = fopen('scratch/vpriceprediction','r');echo fgets($vpriceprediction);fclose($vpriceprediction);?>");
localStorage.setItem("walletinvestor", "<?php $walletinvestor = fopen('scratch/walletinvestor','r');echo fgets($walletinvestor);fclose($walletinvestor);?>");

bitgurP = parseFloat(localStorage.getItem("bitgur"))
allforecastP = parseFloat(localStorage.getItem("allforecast"))
coincodexP = parseFloat(localStorage.getItem("coincodex"))
coinforecastP = parseFloat(localStorage.getItem("coinforecast"))
cryptopredictionsP = parseFloat(localStorage.getItem("cryptopredictions"))
thirtyratesP = parseFloat(localStorage.getItem("thirtyrates"))
tradingbeastsP = parseFloat(localStorage.getItem("tradingbeasts"))
vpricepredictionP = parseFloat(localStorage.getItem("vpriceprediction"))
walletinvestorP = parseFloat(localStorage.getItem("walletinvestor"))
if(isNaN(bitgurP)) bitgurP = 0
if(isNaN(allforecastP)) allforecastP = 0
if(isNaN(coincodexP)) coincodexP = 0
if(isNaN(coinforecastP)) coinforecastP = 0
if(isNaN(cryptopredictionsP)) cryptopredictionsP = 0
if(isNaN(thirtyratesP)) thirtyratesP = 0
if(isNaN(tradingbeastsP)) tradingbeastsP = 0
if(isNaN(vpricepredictionP)) vpricepredictionP = 0
if(isNaN(walletinvestorP)) walletinvestorP = 0

if (bitgurP === 0) {
  bitgurPC = 0
} else {
  bitgurPC = 1
}
if (allforecastP === 0) {
  allforecastPC = 0
} else {
  allforecastPC = 1
}
if (coincodexP === 0) {
  coincodexPC = 0
} else {
  coincodexPC = 1
}
if (coinforecastP === 0) {
  coinforecastPC = 0
} else {
  coinforecastPC = 1
}
if (cryptopredictionsP === 0) {
  cryptopredictionsPC = 0
} else {
  cryptopredictionsPC = 1
}
if (thirtyratesP === 0) {
  thirtyratesPC = 0
} else {
  thirtyratesPC = 1
}
if (tradingbeastsP === 0) {
  tradingbeastsPC = 0
} else {
  tradingbeastsPC = 1
}
if (vpricepredictionP === 0) {
  vpricepredictionPC = 0
} else {
  vpricepredictionPC = 1
}
if (walletinvestorP === 0) {
  walletinvestorPC = 0
} else {
  walletinvestorPC = 1
}

dividebynine = bitgurPC + allforecastPC + coincodexPC + coinforecastPC + cryptopredictionsPC + thirtyratesPC + tradingbeastsPC + vpricepredictionPC + walletinvestorPC

normal_price = ((allforecastP + bitgurP + coincodexP + coinforecastP + cryptopredictionsP + thirtyratesP + tradingbeastsP + vpricepredictionP + walletinvestorP)/dividebynine).toFixed(0)
  document.getElementById('allprice').innerHTML = normal_price

    const getBtcData = async () => {
	  fetch("https://api.binance.com/api/v1/ticker/24hr?symbol=BTCBUSD")
      .then(response => response.json())
  .then(data => {
		document.getElementById("info").innerHTML = parseFloat(data.lastPrice).toFixed(0)
        low_price = parseFloat(data.lowPrice).toFixed(0)
        document.getElementById("lowday").innerHTML = low_price

        if (data.lastPrice < normal_price) {
          document.getElementById('decision').innerHTML = "<font color='green'>[ ซื้อได้ ]</font>"
        }
        else {
          document.getElementById('decision').innerHTML = "<font color='red'>ซื้อไม่ได้ ห้ามซื้อ</font>"
        }
        

        document.getElementById('percent100').innerHTML = 'ราคาเป้าหมายรวม: ' + (100-((normal_price - data.lastPrice )*100)/(normal_price - low_price)).toFixed(1) + '/100 %'
        percentage = (100-((normal_price - data.lastPrice )*100)/(normal_price - low_price)).toFixed(2)
        if (percentage > 100){
          percentage = 100
          document.getElementById('recom').innerHTML = "<font color='red'>[ ซื้อไม่ได้ อย่าซื้อ ]</font>"
        } else if (percentage > 75){
          document.getElementById('recom').innerHTML = "<font color='orange'>[ ไม่แนะนำให้ซื้อ ]</font>"
        } else if (percentage > 60){
          document.getElementById('recom').innerHTML = "<font color='orange'>[ ค่อนข้างอันตราย ]</font>"
        } else if (percentage > 50){
          document.getElementById('recom').innerHTML = "<font color='green'>[ พอที่จะซื้อได้ แต่มีความเสี่ยง ]</font>"
        } else if (percentage > 30){
          document.getElementById('recom').innerHTML = "<font color='green'>[ ซื้อได้ ]</font>"
        } else if (percentage > 1){
          document.getElementById('recom').innerHTML = "<font color='green'>[ ควรซื้อ ซื้อเลย ]</font>"
        }
$(".progressbarss").animate({
	  width: percentage + "%"
},100);


        

        fibo618 = (normal_price-((normal_price - low_price)*0.618)).toFixed(0)
        
        // document.getElementById('fibo618').innerHTML = (100-((fibo618 - data.lastPrice )*100)/ (fibo618 - low_price))
        percentage618 = (100-((fibo618 - data.lastPrice )*100)/ (fibo618 - low_price))
        if (percentage618 > 100){
          percentage618 = 100
        }
        $(".progressbarss2").animate({
	  width: percentage618 + "%"
},100);

      fibo382 = (normal_price-((normal_price - low_price)*0.382)).toFixed(0)
      // document.getElementById('fibo382').innerHTML = (normal_price-((normal_price - low_price)*0.382)).toFixed(0)
      //แก้เดิมpercentage382 = (100-((fibo382 - data.lastPrice )*100)/ (fibo382 - low_price))
      percentage382 = (100-((fibo382 - data.lastPrice )*100)/ (fibo382 - fibo618))
      if (percentage382 > 100){
          percentage382 = 100
        }
        $(".progressbarss3").animate({
	  width: percentage382 + "%"
},100);

        
	});
   }
   getBtcData();
    </script>




</body>
</html>
