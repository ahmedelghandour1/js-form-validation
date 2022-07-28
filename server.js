import express, { response } from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use("/dist", express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "public")));

const resolve = (p) => path.resolve(__dirname, p);


app.use("*", async (req, res) => {
    const html = fs.readFileSync(resolve("public/index.html"), "utf-8");
    // response.send(html);
    res.status(200).set({ "Content-Type": "text/html; charset=UTF-8" }).end(html);
});

app.listen(8000, () => {
    console.log("http://localhost:8000");
})