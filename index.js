const express=require("express");

const app=express();

app.get("/",(req,res)=>{
    res.send("hello world")
});

const port=3000;
app.listen(port,(error)=>{;
    if (error){
        console.log("greška");
    }else{
        console.log("server je pokrenut");
    }
    
});
