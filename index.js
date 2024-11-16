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
    res.send('Hello,World');
});

