import { getAllEvents, getOrganisations, getAttendees } from '../services/eventbriteService.js'

export const getEventDetails = async (req, res) => {

    const event = await getAllEvents(req.query.organisationId);

    res.send(event);
}

export const getAllOrganisations = async (req, res) => {

    const organizations = await getOrganisations();

    res.send(organizations);
}

export const getAllAttendees = async (req, res) => {
    const attendees = await getAttendees(req.query.eventId)

    res.send(attendees);
}