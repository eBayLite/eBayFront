/*const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let Enchere = new Schema({
      
 titleE:{
        type:String
    },

    imgE:{

        type:String
        
    },
    
    priceE:{
        type: Number
    },

    incE:{
        type:Number
    },
    companyE:{
        type:String
    },
    infoE:{
        type:String
    },

    inPanE:{
        type:Boolean
    },

    dateFin:{
        type:Date
    },

    offre:{
        type:Number
    },

    disponible:{
         type:Boolean
    }



});

module.exports = mongoose.model('Enchere', Enchere);