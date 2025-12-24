import express from "express"
import contactsRouter from "./routes/contactsR.js"
import notesRouter from "./routes/notesR.js"

const app = express()

app.use(express.json())

app.use("/contacts", contactsRouter)
app.use("/notes", notesRouter)



