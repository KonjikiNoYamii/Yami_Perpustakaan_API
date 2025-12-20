import Express, {} from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { successResponse } from "./utils/response";
import { errorHandler } from "./middlewares/error.handler";
import booksRouter from "./routes/book.route";
import userRouter from "./routes/user.route";
import categoryRouter from './routes/category.route';
import loanRouter from './routes/loan.route';
import loanItemRouter from './routes/loanItem.route';
import authRouter from './routes/auth.route';
import { requestLogger } from "./middlewares/logger.middleware";
const app = Express();
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(Express.json());
app.set('query parser', 'extended');
app.use(Express.static("public"));
app.use(requestLogger);
app.get("/", (req, res) => {
    const waktuProses = Date.now() - (req.startTime || Date.now());
    successResponse(res, "Selamat datang di API perpustakaan saya !!", {
        hari: 6,
        status: "Server Hidup",
        waktuProses: `${waktuProses}ms`
    }, null, 200);
});
app.use('/api/auth', authRouter);
app.use('/api/books', booksRouter);
app.use('/api/users', userRouter);
app.use('/api/category', categoryRouter);
app.use('/api/loan', loanRouter);
app.use('/api/loanItem', loanItemRouter);
app.use(/.*/, (req, _res) => {
    throw new Error(`Route ${req.originalUrl} tidak ada di API`);
});
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map