import express from "express"
import morgan from "morgan"
import cors from "cors"
import { connectDb } from "./config/db.js"
import { autorRoute } from "./routes/author.routes.js"
import { author } from "./controllers/author.controller.js"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

app.use('/api', autorRoute)
app.use('/api', getAuthors)

connectDb()

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})

