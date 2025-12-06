import Express,{ type Application, type Request, type Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { successResponse } from "./utils/response";
import { errorHandler } from "./middlewares/error.handler";
import booksRouter from "./routes/perpustakaan.route"
import userRouter from "./routes/peminjam.route"
import { requestLogger } from "./middlewares/logger.middleware";
import { apiKeyValidator } from "./middlewares/apiKey.middleware";


const app: Application = Express()

app.use(helmet())
app.use(morgan("dev"))
app.use(cors())
app.use(Express.json());

app.use(requestLogger);

app.use(apiKeyValidator);

app.get("/", (req: Request, res: Response) => {
  const waktuProses = Date.now() - (req.startTime || Date.now());
  successResponse(res, "Selamat datang di API perpustakaan saya !!", {
    hari: 6,
    status: "Server Hidup",
    waktuProses: `${waktuProses}ms`
  }, null, 200)
});

app.use('/api/books',booksRouter)

app.use('/api/users', userRouter)

app.use(/.*/, (req: Request, _res: Response) => {
  throw new Error(`Route ${req.originalUrl} tidak ada di API`);
});

app.use(errorHandler);


export default app