import express from 'express';
import { getEventDetails, getAllOrganisations } from '../controller/eventController';
const router = express.Router();

router.get('/event', getEventDetails);
router.get('/organisation', getAllOrganisations);

export default router;





