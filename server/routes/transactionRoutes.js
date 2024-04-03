import express from 'express'
import { barChartData, combinedData, getAllTransactions, getStats, pieChartData, seedData } from '../controllers/transactionControllers.js';
import tryCatch from '../utils/globalTryCatch.js';

const router = express.Router();

router.get('/',tryCatch(getAllTransactions));
router.get('/stats',tryCatch(getStats));
router.get('/charts/bar',tryCatch(barChartData));
router.get('/charts/pie',tryCatch(pieChartData));
router.get('/stats/all',tryCatch(combinedData));
router.get('/seed', tryCatch(seedData));

export default router