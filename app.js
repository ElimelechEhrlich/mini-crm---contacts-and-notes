import express from "express"
import contactsRouter from "./routes/contactsR.js"
import notesRouter from "./routes/notesR.js"
import { jsonBodyGuard, requestLogger } from "./utils/utils.js"

const app = express()

app.use(express.json(), requestLogger, jsonBodyGuard)

app.use("/contacts", contactsRouter)
app.use("/notes", notesRouter)



