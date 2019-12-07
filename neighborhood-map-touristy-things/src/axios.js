import axios from 'axios';
import firebaseSDK from 'firebase';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_PROJ_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_FIREBASE_PROJ_ID}.firebaseio.com`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJ_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_PROJ_ID}.appspot.com`,
  messagingSenderId: '135767068485',
  appId: '1:135767068485:web:b91617e71e563c02c9f82c'
};
firebaseSDK.initializeApp(firebaseConfig);

export const firebase = firebaseSDK;
export const instanceGeocode = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api'
});
export const instanceFirebase = axios.create({
  baseURL: `https://${process.env.REACT_APP_FIREBASE_PROJ_ID}.firebaseio.com`
});
export const instanceGToolkitSignIn = axios.create({
  baseURL: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`
});
export const exchangeTokenForId = axios.create({
  baseURL: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${process.env.REACT_APP_FIREBASE_API_KEY}`
});
