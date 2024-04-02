import express from 'express'
import cors from 'cors'
import connectToDB from './config/connectDatabase.js'
import productRoutes from './routes/productRoutes.js'
import dotenv from 'dotenv'
import errorHandler from './middleware/errorHandler.js'
import routeHandler from './middleware/routeHandler.js'
dotenv.config();



const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.get('/',(req,res) => {
    res.status(200).json({msg: "Server is running"});
});
app.use('/products',productRoutes);
app.all('*',routeHandler);
app.use(errorHandler);

connectToDB(app);