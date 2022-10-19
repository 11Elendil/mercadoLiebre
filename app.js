const express = require('express');
const app = express();
app.use(express.static('public'));


const port = process.env.PORT || 3001;
app.listen(port, () =>{
    console.log('Servidor corriendo en el puerto http://localhost:3001/');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
const path = require('path')
app.get('/register', (req,res)=>{
    res.sendFile(path.join(__dirname,'/views/register.html'))
});

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname,'/views/login.html'))
});