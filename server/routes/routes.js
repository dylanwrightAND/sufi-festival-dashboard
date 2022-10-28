import express from 'express';
import { getEventDetails } from '../controller/eventController';
const router = express.Router();

router.get('/event', getEventDetails)

export default router;





