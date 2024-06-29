const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/ecommerce',{
              useNewUrlParser:true,
              useUnifiedTopology:true,
              useCreateIndex:true,
              useFindAndModify:false
);

Module.exports=mongoose;