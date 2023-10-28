import mongoose from 'mongoose';


const rentSchema = new mongoose.Schema({  
  dateOfCreation: {
    type: Date,
    required: true,
  },
  management: [{
    Name: {
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
    DateOfCreation: {
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
  }],
  item:[{
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
  }],
  consecutive: {
    type: Number,
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
}
});


const Rent = mongoose.model('Rent', rentSchema);

export default   Rent;