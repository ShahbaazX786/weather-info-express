const express = require('express');
const https = require('https');

const app = express();

// var url="https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1";
var url="https://api.openweathermap.org/data/2.5/weather?q=India&appid=59048508611fa0d5ef1b7cc9f920bec6";

app.get("/",(req,res)=>{
    https.get(url, (res2)=>{ //here res2 is just a variable name to store the response for the https.get() function so you can use any name name you want.
        // const wd=JSON.parse(res2.statusCode); we can also use JSON parse like this
        console.log(res2.statusCode); // 200 is perfect/ok , 100 is preparing wait, 300 is you(client/browser) screwed up, 400 is i(server) screwed up, 500 is you(client/browser) is not authorized to access the shit.

        res2.on("data", (data)=>{
            const weatherDate=JSON.parse(data);
            const temp=weatherDate.main.temp;
            const weatherDescription=weatherDate.weather[0].description;
            const icon=weatherDate.weather[0].icon;
            const imgUrl="https://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write("<h1>The Temperature in London is:"+temp+"degree Celsius.</h1>");
            res.write("<p>The weather is currently "+weatherDescription+".</p>");
            res.write("<img src="+imgUrl+">");
            res.send();
        })
    })
})

app.listen(3000,()=>{
    console.log("server started on port 3000 brov");
});