//remote procedulral call;
//Client side things need to worry
//1.client sending request need to what protocol is used http/https
//2.address or url of backeb=nd server ip/port
//need to know route
//headers/body/query parameter
//method
//Server side
//response headers
//body
//status code
//
//Browser parses the url
//does a dns(domain name service resolution) lookup converts it to IP 
//mapping a domain to IP 
//establishes connection with the IP 
//Every url points to a ip 
//
//
//Tings happen on server
//you get input tou do some mahts you return output
//
//GET,POST,PUT,DELETE
//
//200-OK 
//404-page not found 
//403-authentication issues
//500-internal server error
//
//How to create tour own server 

//const express = require("express");
//const app = express()
//const port = 3000

//app.get('/', (req, res) => {
//res.send('<h1>HELLO ANKIT</h1>!')

//})

//app.listen(port, () => {
//  console.log(`Example app listening on port ${port}`)
//})
//
//create a server in c or c++
//create a todo server in express 
//create a web server in golang
//

let express = require("express");
const app = express();
const port = 3000;

function calculatesum(n) {
  let sum = 0;
  for (let index = 0; index < n; index++) {
    sum = sum + index;

  }
  return sum;
}

app.get('/', (req, res) => {
  const n = req.query.n;
  let sum = calculatesum(n);
  res.send(`hello there ${sum}`);
})

app.listen(port, () => {
  console.log("listeneing on 3000");
})
