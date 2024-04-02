import mongoose from 'mongoose'

const Schema = mongoose.Schema;



const ProductSchema = new Schema({
    id: {type: Number, required: true},
    title: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    image: {type: String, required: true},
    sold: {type: Boolean, required: true},
    dateOfSale: {type: String, required: true},
});


const Product = mongoose.model('Product',ProductSchema);
export default Product;