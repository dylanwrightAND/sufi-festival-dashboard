import express from 'express';
import {
  getEventDetails,
  getAllOrganisations,
  getAllAttendees,
  getEvent,
} from '../controller/eventbriteController';
const router = express.Router();

router.get('/event', getEventDetails);
router.get('/organisation', getAllOrganisations);
router.get('/attendee', getAllAttendees);
router.get('/event/:eventId', getEvent);

export default router;
