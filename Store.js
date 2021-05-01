const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://db_user:6rFXXHDNhQzWIlvf@cluster0.wjv0t.mongodb.net/Hey-Help?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, (err)=>{
	
	if(!err){
		console.log(mongoose.connection.readyState);
	}

})


module.exports = mongoose
