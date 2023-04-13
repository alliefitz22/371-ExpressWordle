import express, {Application, Request, Response} from "express";

const app: Application = express()
const PORT = process.env.PORT ?? 8000;

//Define GET endpoint(s)
app.get("/", (req:Request, res:Response) => {
    const wordArray = ["apple", "shade", "watch", "agree", "power", "piece", "bloom", "plead", "sorry", "spoon", "bunny", "pause", "audio", "dream"]
    res.json(wordArray)
});

app.listen(PORT, () => {
    console.log('sever is listening to port ${PORRT}')
})