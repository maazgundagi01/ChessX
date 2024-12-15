import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app = express();
app.use(express.json())
app.use(cors({
    origin: "*",
    credentials: true
}))

app.get('/', (req, res) => {
    res.send('hello player')
})

const port = process.env.PORT || 8081;
app.listen(port, ()=>{
    console.log(`Server listening on http://localhost/ ${port}`)
})