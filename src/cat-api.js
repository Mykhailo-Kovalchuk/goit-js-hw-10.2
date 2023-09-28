const API_KEY = "live_HgDkXwnDoC1nYgOYwMvyw8sz3SXrfNKGcXoHyaWqZ7cKjzY5EEkt4g7hCXzQWfca";


import axios from 'axios';

axios.defaults.headers.common['x-api-key'] = API_KEY;


export async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data;
  } catch (error) {
    throw error;
  }
}


export async function fetchCatByBreed(breedId) {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}