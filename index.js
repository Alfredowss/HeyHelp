const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();
const Store = require('./Store')
const bcrypt = require('bcrypt');
const saltRounds = 2;

//middlewars
app.use(cors());
app.use(bodyParser.json())




//static files
app.use(express.static(__dirname + '/build'))


//index
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/build/index.html'); 
})	



//model- temporal-
const Schema = Store.Schema;

const userSchema = new Schema({
	email: String,
	password: String
});


const MyModel = Store.model('user', userSchema);




//Api
app.post('/api/users', (req, res)=>{
	if(req.body.email && req.body.password){
		

		const user = new MyModel();
		user.email = req.body.email;
		
		bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
			user.password = hash;
		
			user.save(err=>{
				if(!err){
					res.send({
						status: 'ok'
					})
				}else{
					console.log(err)
				}
			})

		});

	}

})











app.listen(process.env.PORT || 8000, (err)=>{
	if(err){
		console.log('error initializing server ')
	}else{
		console.log('server running on http://localhost:8000');
	}
});
