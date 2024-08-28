import express from 'express';
import { Chat } from '../controllers/Chat.js';

const router = express.Router();

router.get("/chat", Chat)

export default router;