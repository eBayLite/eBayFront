const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let Vente = new Schema({
      
    title:{
        type:String
    },

    img:{
        type:String
    },

    price:{
        type: Number
    },

    inc:{
        type:Number
    },
    company:{
        type:String
    },
    info:{
        type:String
    },
    inCart:{
        type:Boolean
    },

    inPan:{
        type:Boolean
    },
    
});

module.exports = mongoose.model('Vente', Vente);