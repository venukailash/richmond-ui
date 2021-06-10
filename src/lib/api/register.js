import axios from 'axios';

export default async function register(registrationDetails) {
    const response = await axios
        .post('http://localhost:3030/registration',registrationDetails)

    if (response.error) {
        throw new Error(response.error);
      }
    return await response.data;
}