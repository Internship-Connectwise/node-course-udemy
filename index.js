const request = require('postman-request');

const url=require("./config.js").wheather;
const baseUsrl=url.Base_url+url.API_KEY+"&q=London";

const mapboxUrl= require("./config.js").mapbox;
const mapboxBaseUsrl=mapboxUrl.Base_url+"/Los%20Angeles.json"+mapboxUrl.Access_token+"&limit=1";

request({url:baseUsrl,json:true},async (error, response, body)=>{
    await console.log("It is currently "+response.body.current.temp_c+" It feels like "+response.body.current.feelslike_c)
})

request({url:mapboxBaseUsrl,json:true},(error, response, body)=>{
    const path=response.body.features[0].center;
    console.log("Longitude "+path[0]+" latitude "+path[1])
})

