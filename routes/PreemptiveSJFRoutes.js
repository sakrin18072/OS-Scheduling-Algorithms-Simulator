import express from "express";
import { preemptiveSJFSimulator } from "../controllers/PreemptiveSJFController.js";
import { NonPreemptiveSJFSimulator } from "../controllers/NonPreemptiveSJFController.js";
const router = express.Router();

router.post("/preemptive", preemptiveSJFSimulator);
router.post("/non-preemptive", NonPreemptiveSJFSimulator);

export default router;
