const initialState = {
  map: null,
  mapRef: null,
  mapLoaded: false,
  mapCenter: {
    lat: 34.1020231,
    lng: -118.3409712
  },
  mapPlaces: [
    { lat: 34.1009124, lng: -118.3366101 },
    { lat: 34.1013773, lng: -118.3421319 },
    { lat: 34.101324, lng: -118.3444815 },
    { lat: 34.102947, lng: -118.342001 }
  ],
  searchText: "e.g. '90004' or 'Los Angeles, CA'",
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
      console.log(action);
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
    case 'MAPLOADED':
      return {
        ...state,
        map: action.payload.map,
        mapRef: action.payload.mapRef,
        mapLoaded: action.payload.mapLoaded
      };
    default:
      return state;
  }
};

export default reducer;
