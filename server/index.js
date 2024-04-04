import express from 'express'
import cors from 'cors'
import connectToDB from './config/connectDatabase.js'
import transactionRoutes from './routes/transactionRoutes.js'
import dotenv from 'dotenv'
import errorHandler from './middleware/errorHandler.js'
import routeHandler from './middleware/routeHandler.js'
dotenv.config();



const app = express();

app.use(cors({
    origin: [`${process.env.CLIENT_URL}`],
    methods: ["GET"],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/health',(req,res) => {
    res.status(200).json({msg: "Server is running"});
});
app.use('/transactions',transactionRoutes);
app.all('*',routeHandler);
app.use(errorHandler);

connectToDB(app);