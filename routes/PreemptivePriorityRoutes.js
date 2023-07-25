import express from 'express';
import { PreemptivePrioritySimulator } from '../controllers/PreemptivePriorityController.js';
import { NonPreemptivePrioritySimulator } from '../controllers/NonPreemptivePriorityController.js';
const router = express.Router();

router.post('/preemptive',PreemptivePrioritySimulator);
router.post('/non-preemptive',NonPreemptivePrioritySimulator);


export default router;