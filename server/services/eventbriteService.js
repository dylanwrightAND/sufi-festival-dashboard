import axios from 'axios';

export const getAllEvents = async () => {

    const eventsUrl = process.env.EVENTBRITE_BASE_URL + '/v3/organizations/' + process.env.EVENTBRITE_ORG_ID + '/events/';
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
