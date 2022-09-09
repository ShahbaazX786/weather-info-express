const express = require('express');
const https = require('https');

const app = express();

var url="https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1";
app.get("/",(req,res)=>{
    https.get(url,(res2)=>{
        console.log(res2);
    })
    res.send("yo boii");
})

app.listen(3000,()=>{
    console.log("server started on port 3000 brov");
});