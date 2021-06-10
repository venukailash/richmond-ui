
import axios from 'axios';

export default async function getItems() {
    const response = await axios
        .get("http://localhost:3031/items")

    if (response.error) {
        throw new Error(response.error);
      }
    return await response.data;
}