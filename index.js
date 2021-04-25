const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());


//static files

app.use(express.static(__dirname + '/build'))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/build/index.html'); 
})	


app.listen(process.env.PORT, (err)=>{
	if(err){
		console.log('error initializing server ')
	}else{
		console.log('server running on http://localhost:8000');
	}
});
