import express from "express";
import db from "./database.js";
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.redirect('/');
})

app.get("/test", async (req, res) => {
    res.json(await db.execute("SELECT * FROM Empleado"));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})