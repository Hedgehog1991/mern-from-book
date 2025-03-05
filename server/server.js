import express from "express";
import userRouter from "./routes/user.route.js";
import { errorHandler } from "./libs/middleware.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors"


const app = express();
const PORT = 8000;
app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use(express.json());
app.use("api/v1/auth", authRouter);
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      origin: process.env.CLIENT_URL,
      credentials: true,
    })
)

//Need one express above and below the userrouter? unclear in books
app.use("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});
app.use("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

//p39 to continue
//6hENlFRQHRcLXghg //kriive
