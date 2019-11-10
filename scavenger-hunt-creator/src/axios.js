import axios from 'axios';

export const instanceGeocode = axios.create({
  // "https://maps.googleapis.com/maps/api/geocode/json?address="+address+'&key='+API_KEY
  baseURL: 'https://maps.googleapis.com/maps/api/geocode'
});
