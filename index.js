const express = require('express');
const path = require('path');
const app = express();

app.set("port", 4001);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//función middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

console.log(__dirname);



//Adicionamos la segunda página 
app.use('/statics', (req,res)=>{
  res.sendFile(path.join(__dirname, './public/home.html'));
});

app.listen(app.get("port"), ()=>{
    console.log(`Server on port 4001`);
  })