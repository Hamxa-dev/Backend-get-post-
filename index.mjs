import express from "express";
const app = express();
const port = 3000;
import router from "./routes/index.mjs";
import ConnectDB from "./config/mDB.mjs";
import dotenv from "dotenv";
dotenv.config();

app.use(express.json());


app.use("/", router);
ConnectDB();



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Server is running on port <a href="http://localhost:${port}">${port}</a>`);

});
