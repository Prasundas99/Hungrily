import axios from 'axios';

const url = `http://localhost:5000/api/requests`;

export const getRecievedFoodRequests = (bearerToken) =>
  axios.get(`${url}/volunteer`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${bearerToken}`,
    },
  });
