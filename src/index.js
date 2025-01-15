const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const registroDecisaoRoutes = require("./routes/registroDecisaoRoutes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", registroDecisaoRoutes);

module.exports = app;
