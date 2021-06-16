import axios from 'axios';

const url = `http://localhost:5000/api/users`;

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const loginUser = (email, password) =>
  axios.post(`${url}/login`, { email, password }, config);

export const registerUser = (name, email, password) =>
  axios.post(url, { name, email, password }, config);

// export const fetchUserProfile = (id: string, bearerToken: string) =>
//   axios.get(`${url}/${id}`, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${bearerToken}`,
//     },
//   });

// export const updateUserProfile = (user: userProfile, bearerToken: string) =>
//   axios.put(`${url}/profile`, user, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${bearerToken}`,
//     },
//   });
