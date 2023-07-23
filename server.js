import express from 'express';
import cors from 'cors';
import PreemptivePriorityRoutes from './routes/PreemptivePriorityRoutes.js'
import PreemptiveSJFRoutes from './routes/PreemptiveSJFRoutes.js'
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.listen(process.env.PORT,()=>{
    console.log("Server is live on port 8080");
})
app.use('/priority',PreemptivePriorityRoutes);
app.use('/sjf',PreemptiveSJFRoutes);