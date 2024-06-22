import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from "cors";
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';


// parsers
app.use(express.json());
app.use(cors());

// testing route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World from Rental Wheels!')
})


// global error handler
app.use(globalErrorHandler)


// not found handler
app.use(notFound)


export default app;