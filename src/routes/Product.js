const { Router, json } = require('express');
const router =  Router();

const _ = require('underscore');

const product = require('../sample.json');
//console.log(product);
router.get('/', (req, res) => {
   res.json(product);
   //console.log(product);
});
router.post('/',(req, res)=> {
   const {NameProduct, CategoryProduct, Description, expiration } = req.body;
   const Id = product.length + 1;
   const newProduct = { ...req.body, Id }
   //NameProduct = File.name('../sample.json');
   if(NameProduct && CategoryProduct && Description && expiration){
      product.push(newProduct);
      res.json(product);
   }else{
      res.status(500),json({error: 'Error en el Backend'});
   }
   
});

router.delete('/:id', (req, res) =>{
   const { id } = req.params;
    _.each(product, (produc, i) => {
      if(produc.Id == id){
         product.splice(i, 1);
      }
    });
    res.send(product);
});


router.put('/:id', (req, res)=> {
   //obtener y guardar el id que se resive para luego usarlo
   const { id } = req.params;
   const {NameProduct, CategoryProduct, Description, expiration } = req.body;
   if(NameProduct && CategoryProduct && Description && expiration){
      _.each(product, (produc, i)=>{
         if(produc.Id == id){
            produc.NameProduct = NameProduct;
            produc.CategoryProduct = CategoryProduct;
            produc.Description = Description;
            produc.expiration = expiration;
         }
      });
      res.json(product);
   } else{
      res.status(500),json({error: 'Error en el Backend'});
   }


});




module.exports = router;