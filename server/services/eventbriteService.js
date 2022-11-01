import axios from 'axios';

export const getAllEvents = async (organisationId) => {
  const eventsUrl =
    process.env.EVENTBRITE_BASE_URL +
    '/v3/organizations/' +
    organisationId +
    '/events/';
  const response = await axios.get(eventsUrl, {
    params: { token: process.env.EVENTBRITE_API_TOKEN },
  });

  const promises = response.data.events.map(async (event) => {
    const eventCapacity = await getEventCapacity(event.id);

    return {
      id: event.id,
      name: event.name.text,
      quantity_total: eventCapacity.quantity_total,
      quantity_sold: eventCapacity.quantity_sold,
    };
  });

  const filteredEvents = await Promise.all(promises);

  return filteredEvents;
};

export const getEventCapacity = async (eventId) => {
  const eventCapacityUrl =
    process.env.EVENTBRITE_BASE_URL +
    '/v3/events/' +
    eventId +
    '/capacity_tier/';
  const eventCapacity = await axios.get(eventCapacityUrl, {
    params: { token: process.env.EVENTBRITE_API_TOKEN },
  });
  return eventCapacity.data;
};

export const getEventById = async (eventId) => {
  const eventUrl = process.env.EVENTBRITE_BASE_URL + '/v3/events/' + eventId;
  const response = await axios(eventUrl, {
    params: { token: process.env.EVENTBRITE_API_TOKEN },
  });

  console.log(response.data);

  return response.data;
};

export const getOrganisations = async () => {
  const organizationsUrl =
    process.env.EVENTBRITE_BASE_URL + '/v3/users/me/organizations/';

  const response = await axios(organizationsUrl, {
    params: { token: process.env.EVENTBRITE_API_TOKEN },
  });

  return response.data;
};

export const getAttendees = async (eventId) => {
  const attendeesUrl =
    process.env.EVENTBRITE_BASE_URL + '/v3/events/' + eventId + '/attendees';
  const response = await axios(attendeesUrl, {
    params: { token: process.env.EVENTBRITE_API_TOKEN },
  });

  //   console.log(response.data.attendees);

  const promises = response.data.attendees.map(async (attendee) => {
    return {
      id: attendee.id,
      name: attendee.profile.name,
      email: attendee.profile.email,
      barcodes: attendee.barcodes,
      checked_in: attendee.checked_in,
    };
  });

  const attendees = Promise.all(promises);

  return attendees;
};
