import express from 'express';
import { getEventDetails, getAllOrganisations, getAllAttendees } from '../controller/eventbriteController';
const router = express.Router();

router.get('/event', getEventDetails);
router.get('/organisation', getAllOrganisations);
router.get('/attendee', getAllAttendees);

export default router;





