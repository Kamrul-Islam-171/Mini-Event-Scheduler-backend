import express, { Request, Response } from 'express';
import { EventRoutes } from './routes/eventRoute';
import dotenv from 'dotenv'
import globalErrorHandler from './middleware/globalErrorHandeler';
import notFound from './errors/notFound';
import cors from 'cors'
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173', 'https://mini-event-scheduler-alpha.vercel.app']
}))
app.use('/api', EventRoutes);

app.get('/', (req:Request, res:Response) => {
  res.send("Hello world")
})

app.use(globalErrorHandler);
app.use(notFound);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
