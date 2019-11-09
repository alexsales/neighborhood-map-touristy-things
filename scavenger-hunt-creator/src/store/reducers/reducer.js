const initialState = {
  initialPlaces: [
    { lat: 34.098457, lng: -118.3372989 },
    { lat: 34.0979594, lng: -118.3461394 },
    { lat: 34.0921311, lng: -118.3518042 }
  ],
  initialCenter: {
    lat: 34.1020231,
    lng: -118.3409712
  },
  mapCenter: 'initTest',
  searchboxClicked: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SETCENTER':
      return {
        ...state,
        mapCenter: action.payload.target.value
      };
    case 'SEARCHCLICKED':
      return {
        ...state,
        mapCenter: '',
        searchboxClicked: true
      };
    case 'UPDATEMAP':
      console.log('get lat/lng');
      return state;
    default:
      return state;
  }
};

export default reducer;
