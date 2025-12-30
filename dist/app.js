import Express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { successResponse } from "./utils/response.js";
import { errorHandler } from "./middlewares/error.handler.js";
import booksRouter from "./routes/book.route.js";
import userRouter from "./routes/user.route.js";
import categoryRouter from "./routes/category.route.js";
import loanRouter from "./routes/loan.route.js";
import loanItemRouter from "./routes/loanItem.route.js";
import authRouter from "./routes/auth.route.js";
import adminRouter from "./routes/admin.route.js";
import { requestLogger } from "./middlewares/logger.middleware.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./utils/swagger.js";
const app = Express();
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(Express.json());
app.set("query parser", "extended");
app.use(Express.static("public"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(requestLogger);
app.get("/", (req, res) => {
    const waktuProses = Date.now() - (req.startTime || Date.now());
    successResponse(res, "Selamat datang di API perpustakaan saya !!", {
        hari: 6,
        status: "Server Hidup",
        waktuProses: `${waktuProses}ms`
    }, null, 200);
});
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/book", booksRouter);
app.use("/api/users", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/loan", loanRouter);
app.use("/api/loan-items", loanItemRouter);
app.use(/.*/, (req, _res) => {
    throw new Error(`Route ${req.originalUrl} tidak ada di API`);
});
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map
