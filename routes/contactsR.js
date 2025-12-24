import express from "express"
import { addContact, getContactById, getContacts } from "../controllers/contactsC.js"

const router = express.Router()

router.get("/", getContacts)
router.get("/:id", getContactById)
router.get("/:id/notes", addContact)
router.post("/", async (req, res) => {})
router.post("/:id/notes", async (req, res) => {})
router.put("/:id", async (req, res) => {})
router.patch("/:id", async (req, res) => {})
router.delete("/:id", async (req, res) => {})


export default router