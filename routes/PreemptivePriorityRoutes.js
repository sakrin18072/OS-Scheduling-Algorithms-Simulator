import express from 'express';
import { PreemptivePrioritySimulator } from '../controllers/PreemptivePriorityController.js';
const router = express.Router();

router.post('/preemptive',PreemptivePrioritySimulator);


export default router;