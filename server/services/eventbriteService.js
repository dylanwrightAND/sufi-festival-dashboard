import axios from 'axios';
import { response } from 'express';

export const getAllEvents = async (organisationId) => {

    const eventsUrl = process.env.EVENTBRITE_BASE_URL + '/v3/organizations/' + organisationId + '/events/';
    const response = await axios.get(eventsUrl, { params: { token: process.env.EVENTBRITE_API_TOKEN } });

    const promises = response.data.events.map(async event => {

        const eventCapacity = await getEventCapacity(event.id);

        return {
            id: event.id,
            name: event.name.text,
            quantity_total: eventCapacity.quantity_total,
            quantity_sold: eventCapacity.quantity_sold

        }
    })

    const filteredEvents = await Promise.all(promises);


    return filteredEvents;
}

export const getEventCapacity = async (eventId) => {
    const eventCapacityUrl = process.env.EVENTBRITE_BASE_URL + '/v3/events/' + eventId + '/capacity_tier/'
    const eventCapacity = await axios.get(eventCapacityUrl, { params: { token: process.env.EVENTBRITE_API_TOKEN } })
    return eventCapacity.data;
}

export const getOrganisations = async () => {
    const organizationsUrl = process.env.EVENTBRITE_BASE_URL + '/v3/users/me/organizations/';

    const response = await axios(organizationsUrl,  { params: { token: process.env.EVENTBRITE_API_TOKEN } });

    return response.data;
}
