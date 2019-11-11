const initialState = {
  initialCenter: {
    lat: 34.1020231,
    lng: -118.3409712
  },
  initialPlaces: [
    { lat: 34.098457, lng: -118.3372989 },
    { lat: 34.0979594, lng: -118.3461394 },
    { lat: 34.0921311, lng: -118.3518042 }
  ],
  searchText: 'initTest',
  mapCenter: {},
  mapPlaces: [],
  searchboxClicked: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SETCENTER':
      return {
        ...state,
        searchText: action.payload.target.value
      };
    case 'SEARCHCLICKED':
      return {
        ...state,
        searchText: '',
        searchboxClicked: true
      };
    case 'UPDATEMAP':
      // access lat/lng from action.payload and then update mapCenter
      const updatedMapCenter = {
        lat: action.payload.data.results[0].geometry.location.lat,
        lng: action.payload.data.results[0].geometry.location.lng
      };
      return {
        ...state,
        mapCenter: {
          ...state.mapCenter,
          ...updatedMapCenter
        }
      };
    default:
      return state;
  }
};

export default reducer;
