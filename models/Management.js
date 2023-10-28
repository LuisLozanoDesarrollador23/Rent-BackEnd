import mongoose from 'mongoose';


  const managementSchema = new mongoose.Schema({    
    description: {
      type: String,
      required: true,
    },
    userCreator: {
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
  },
    invoiceId: {
      type: Number,
      required: true,
    },
    dateOfCreation: {
      type: Date,
      required: true,
    },
    userClient: {
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
  }
  });  
  
  const Management = mongoose.model('Management', managementSchema);
  
  export default  Management;
  
  
  

  


