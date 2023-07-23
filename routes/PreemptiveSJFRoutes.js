import express from 'express';
import { preemptiveSJFSimulator } from '../controllers/PreemptiveSJFController.js';
const router = express.Router();

router.post('/preemptive',preemptiveSJFSimulator);


export default router;