const express=require('express');
const router=express.Router()

const {getAllProduct,getStaticProduct}=require('../controllers/products');

router.route('/').get(getAllProduct);
router.route('/static').get(getStaticProduct)

module.exports=router;