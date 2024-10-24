const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    p_name : {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        default: "default desc"
    }
})

const Product = mongoose.model('Product',productSchema)

module.exports=Product;