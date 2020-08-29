import express from "express";
import path from "path";
import morgan from "morgan";
import ROUTES from "./router/router";

const PORT = 3000;
const app = express();

app.set("view engine", "pug");
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "/assets")));

app.get("/", ROUTES)
app.get("/intro", ROUTES)
app.get("/about", ROUTES)

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START`);
});