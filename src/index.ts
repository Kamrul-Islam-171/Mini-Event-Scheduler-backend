import express from 'express';
import { EventRoutes } from './routes/eventRoute';
import dotenv from 'dotenv'
import globalErrorHandler from './middleware/globalErrorHandeler';
import notFound from './errors/notFound';

dotenv.config();

const app = express();
const port = 5000;

app.use(express.json());

app.use('/api', EventRoutes);


app.use(globalErrorHandler);
app.use(notFound);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
