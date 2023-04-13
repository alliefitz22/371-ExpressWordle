import express, {Application, Request, Response} from "express";
import cors from "cors"

const app: Application = express()
app.use(cors())
const PORT = process.env.PORT ?? 8000;
const wordArray = ["apple", "shade", "watch", "agree", "power", "piece", "bloom", "plead", "sorry", "spoon", "bunny", "pause", "audio", "dream"]
//Define GET endpoint(s)
app.get("/", (req:Request, res:Response) => {
    let tosend = {randomWord: wordArray[Math.floor(Math.random() * wordArray.length)]}
    res.json(tosend)
});

app.listen(PORT, () => {
    console.log('sever is listening to port ${PORRT}')
})