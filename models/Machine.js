import mongoose from 'mongoose';

const machineSchema = new mongoose.Schema({  
  name: {
    type: String,
    required: true,
  },
  serial: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  characteristics: {
    type: String,
    required: true,
  },
},{versionKey:false});


const Machine = mongoose.model('Machine', machineSchema);

export default  Machine







