const request = require('postman-request');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

const url=require("./config.js").API_KEY;
console.log(url);

request({url:url,json:true},(error, response, body)=>{
    console.log(response.body.current)
    console.log("It is currently "+response.body.current.temp_c+" It feels like "+response.body.current.feelslike_c)
})