const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./config/config.env" });
const connectDb = require("./config/db");
const cookieParser = require("cookie-parser");
connectDb();

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use("/products", require("./routes/productsRoutes"));

app.use("/auth", require("./routes/authRoute"));

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
