import mongoose from 'mongoose'

const Schema = mongoose.Schema;



const TransactionSchema = new Schema({
    id: {type: Number, required: true,unique: true},
    title: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    image: {type: String, required: true},
    sold: {type: Boolean, required: true},
    dateOfSale: {type: String, required: true},
});


const Transaction = mongoose.model('Transaction',TransactionSchema);
export default Transaction;