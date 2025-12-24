import express from "express"

const router = express.Router()

router.get("/contacts/:id/notes", async (req, res) => {})
router.get("/:id", async (req, res) => {})
router.post("/contacts/:id/notes", async (req, res) => {})
router.put("/:id", async (req, res) => {})
router.patch("/:id", async (req, res) => {})
router.delete("/:noteId", async (req, res) => {})

export default router

