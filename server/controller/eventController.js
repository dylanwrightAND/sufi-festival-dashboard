import { getAllEvents } from '../services/eventbriteService.js'

export const getEventDetails = async (req, res) => {
    const event = await getAllEvents();

    res.send(event);
}