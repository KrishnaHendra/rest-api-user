import express from "express";
import userRoutes from "./routes/userRoute";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.NODE_PORT;

app.use(express.json());
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to Restful API Users",
  });
});
app.use("/api", userRoutes);

app.listen(port, () => {
  const appType = process.env.NODE_ENV;
  console.log(`Server is running at http://localhost:${port} on ${appType}`);
});
