const express=require('express');
const app=express();
const PORT=3000;
app.listen(PORT,error=>{
    if(error){
        console.error('greska prilikom pokretanja posluzitelja: ${error.message}');
    }else{
        console.log('server je pokrenut na http://localhost:${PORT}');
    }
});

app.get('/',(req,res)=>{
   res.sendfile(__dirname+"/public/index.html");
    
});
app.get('/about',(req,res)=>{
    res.sendfile(__dirname+"/public/about.html")
});

app.get('/users',(req,res)=>{
    res.json([{id:1,name:"boris",surname:"vujica"},
        {id:2,name:"filipa",surname:"bebek"},
         {id:3,name:"robi",surname:"vujica"}])
});
