
var http = require('http');
var https = require('https')
const data = JSON.stringify({
  
    "orderId": "Order0001",
      "orderAmount":1,
      "orderCurrency":"INR",
  
  })
var options = {
  host: 'www.cashfree.com',
  port: 443,
  path: '/payout/v1/authorize',
  method: 'post',
  headers: {
    'Content-Type' : 'application/json',
    'x-client-id': '***************' ,
    'x-client-secret': '*****************', 
  }
};

//var reqBody = "<h1>Hello!</h1>";

var req = https.request(options, function(res) {
    console.log(`statusCode: ${res.statusCode}`)
  res.setEncoding('utf8');
  var resBody = '';

  res.on('data', function (chunk) {
    resBody += chunk;
  });

  res.on('end', function (chunk) {
    console.log('response: ' + resBody);
  });

});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

req.write(data);
req.end();
