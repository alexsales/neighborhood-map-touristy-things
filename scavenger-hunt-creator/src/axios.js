import axios from 'axios';

export const instanceGeocode = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api'
});
