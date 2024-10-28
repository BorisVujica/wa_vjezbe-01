const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");

});

app.get("/about",(req,res)=>{
    res.sendFile(__dirname+"/public/about.html");

});

app.get("/users",(req,res)=>{
    const users=[
        {id:1,ime:"boris",prezime:"vujica"},
        {id:2,ime:"tomislav",prezime:"perkovic"},
        {id:3,ime:"josip",prezime:"ban jelacic"},
    ];
    res.json(users);

});
const port=3000;
app.listen(port,(error)=>{;
    if (error){
        console.log("greška");
    }else{
        console.log("server je pokrenut");
    }
    
});
