const request = require('postman-request');

const url=require("./config.js").wheather;
const baseUsrl=url.Base_url+url.API_KEY+"&q=London";

request({url:baseUsrl,json:true},(error, response, body)=>{
    if(error){
        console.log("Unable to connect ")
    }else if(response.body.error){
        console.log("Unable to fetch data "+response.error)
    }else{
        console.log("It is currently "+response.body.current.temp_c+" It feels like "+response.body.current.feelslike_c)
    }
})

const mapboxUrl= require("./config.js").mapbox;
const mapboxBaseUsrl=mapboxUrl.Base_url+"/Los%20Angeles.json"+mapboxUrl.Access_token+"&limit=1";
console.log(mapboxBaseUsrl)
request({url:mapboxBaseUsrl,json:true},(error, response, body)=>{
    if(error){
        console.log("Unable to connect ")
    }else if(response.body.message || response.body.features.length === 0 ){
        console.log("Unable to fetch data \n Reason: "+response.body.message)
    }else{
        const path=response.body.features[0].center;
        console.log("Longitude "+path[0]+" latitude "+path[1]) 
    }
})

