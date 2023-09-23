import express from "express";
import fs from "fs";
import db from "./database.js";
const app = express();
const port = process.env.PORT ?? 3000;

if (!fs.existsSync("./files")) {
    fs.mkdirSync("./files");
}

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.redirect('/');
})

app.get("/test", async (req, res) => {
    res.json(await db.execute("SELECT * FROM Empleado"));
});

app.get("/createFile", (req, res) => {
    try {
        fs.writeFileSync("./files/test.txt", "file content");
        return res.send("success");
    } catch (error) {
        return res.send(error);
    }
});

app.get("/readFile", (req, res) => {
    const content = fs.readFileSync("./files/test.txt");
    return res.send(content);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})