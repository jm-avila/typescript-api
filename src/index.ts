import express from "express"

const app = express()

app.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).send('Hello world');
})

app.listen(3000)