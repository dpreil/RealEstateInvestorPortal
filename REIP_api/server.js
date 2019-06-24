const express = require('express');
const pug = require('pug');


const app = express();
app.set('view engine', 'pug')

console.log(__dirname);
process.chdir("../reip_front");
const filePath = process.cwd();

app.use(express.static(filePath));

app.get('/',(req,res) => res.sendFile("index.html"))

app.listen(3000,()=>console.log("listening on port 3000"))