const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
//*const enchereRoutes = express.Router();*/
const venteRoutes=express.Router();
const PORT= 4000;

/*let Enchere = require('./EchereE.model');*/
let Vente =require('./Vente.model');


app.use(cors());
app.use(bodyParser.json());

/*mongoose.connect('mongodb://localhost:27017/EbayDB',{useNewUrlParser:true});*/
mongoose.connect('mongodb://localhost:27017/ventdb',{useNewUrlParser:true});     

const connection = mongoose.connection;

connection.once('open',function(){

    console.log("connection de la base de données reussite");

})

/*enchereRoutes.route('/').get(function(req, res){
    Enchere.find(function(err, EbayDB){
        if(err){
            console.log(err)
        }else{
            res.json(EbayDB);
        }
    });
    
});


enchereRoutes.route('/:id').get(function(req, res){
    let id=req.params.id;
    Enchere.findById(id, function(err, enchere){

        res.json(enchere);
    });

});

enchereRoutes.route('/add').post(function(req, res){
    let enchere = new Enchere(req.body);
    enchere.save()
           .then(enchere=>{

            res.status(200).json({'enchere': 'enchere ajout reussit'});
           })
           .catch(err =>{
               res.status(400).send('ajout enchere echoué');
           });
});

enchereRoutes.route('/update/:id').post(function(req, res){
    Enchere.findById(req.params.id, function(err, enchere){
        if(!enchere)
           res.status(404).send('data is not found');
        else
           enchere.titleE = req.body.titleE;
           enchere.imgE = req.body.imgE;
           enchere.priceE = req.body.priceE;
           enchere.incE = req.body.incE;
           enchere.companyE = req.body.companyE;
           enchere.infoE = req.body.infoE;
           enchere.inPanE = req.body.inPanE;
           enchere.dateFinE = req.body.dateFinE;
           enchere.offre = req.body.offre;
           enchere.disponible = req.body.disponible;

           enchere.save().then(enchere =>{
               res.json('Enchere updated');
           })
           .catch(err =>{
               res.status(400).send("update not possible");
           });

    });
});


app.use('/EbayDB',enchereRoutes);*/

venteRoutes.route('/').get(function(req,res){
    Todo.find(function(err,ventdb){
        if(err){
            console.log(err)
        }else {
            res.json(ventdb);
        }
    });
});

venteRoutes.route('/:id').get(function(req,res){
    let id=req.params.id;
    Vente.findById(id,function(err,vente){
        res.json(vente); 
    });
});

venteRoutes.route('/add').post(function(req,res){
    let vente= new Vente(req,body);
    vente.save()
        .then(vente =>{
            res.status(200).json({vente: 'ajouté'})
        })
        .catch(err=>  {
            res.status(400).send('ajout refusé');
        });
});



venteRoutes.route('/update/:id').post(function(req,res){
    Vente.findById(req.params.id, function(err, vente){
        if(!vente)
            res.status(404).send('data noot found');
        else
        vente.title=req.body.title;
        vente.img = req.body.img;
        vente.price = req.body.price;
        vente.inc = req.body.inc;
        vente.company= req.body.company;
        vente.info= req.body.info;
        vente.inPanE = req.body.inPan;
        vente.inCart = req.body.inCart;

        vente.save().then(vente =>{
            res.json('vente mise a jour');
        })
        .catch(err=>{
            res.status(400).send("update pas possible");
        })

    });

});

app.use('/ventdb',venteRoutes);

app.listen(PORT, function(){
    console.log("server is running on port :"+PORT);
});