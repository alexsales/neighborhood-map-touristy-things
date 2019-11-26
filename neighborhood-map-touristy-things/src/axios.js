import axios from 'axios';

export const instanceGeocode = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api'
});

export const instanceFirebase = axios.create({
  baseURL: 'https://scavenger-hunt-c-1573007989671.firebaseio.com'
});
