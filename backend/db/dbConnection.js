const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://aadarshaadarsh109:Aadarsh@cluster0.bbsxa.mongodb.net/MenuData?retryWrites=true&w=majority&appName=Cluster0').then(()=>{

    console.log('connected succesfully')
}).catch((err)=>{

console.log(err);
})