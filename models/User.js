import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({  
  idType: {
    type: Number,
    required: true,
  },
  idNumber: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },  
  phone: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: true,
  },  
  state: {
    type: String,
    required: true,
  },  
  municipality: {
    type: String,
    required: true,
  },    
  address:{
    type: String,
    required: true,
  },      
},{versionKey:false});


const User = mongoose.model('User', userSchema);

export default  User;
