const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');

const user = {
	"username":"test",
	"password":"pickle"
}

const app = express();
app.use(bodyParser.json({extended:false}));
app.set('view engine', 'pug')

console.log(__dirname);
process.chdir("../reip_front");
const filePath = process.cwd();

app.use(express.static(filePath));

app.get('/',(req,res) => res.sendFile("index.html"))

app.listen(3000,()=>console.log("listening on port 3000"))

app.post('/login',(req,res) => {
	if((req.body.username === user.username) && (req.body.password === user.password)){
		console.log("login successful");
		res.status(200).render("portfolio_page");
	} else {
		console.log("login failed")
		res.status(400).send("please reenter your credentials.")
	}

})