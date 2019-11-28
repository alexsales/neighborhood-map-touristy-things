const initialState = {
  map: null,
  mapRef: null,
  mapLoaded: false,
  mapCenter: {
    lat: 34.1020231,
    lng: -118.3409712
  },
  mapPlaces: [],
  mapMarkers: [],
  mapTextLinks: [],
  infoWindow: null,
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
      const updatedMapCenter = {
        lat: action.payload.data.results[0].geometry.location.lat,
        lng: action.payload.data.results[0].geometry.location.lng
      };
      return {
        ...state,
        mapPlaces: [],
        mapCenter: {
          ...state.mapCenter,
          ...updatedMapCenter
        }
      };
    case 'MAPLOADED':
      return {
        ...state,
        map: action.payload.map,
        mapRef: action.payload.mapRef
      };
    case 'PLACESLOADED':
      const tmpUpdatedMapPlaces = [...state.mapPlaces].concat(action.payload);

      // remove duplicates
      const updatedMapPlaces = tmpUpdatedMapPlaces.filter(
        (item, index) => tmpUpdatedMapPlaces.indexOf(item) === index
      );
      // console.log(updatedMapPlaces);

      return {
        ...state,
        mapPlaces: updatedMapPlaces
      };
    case 'UPDATEINFOWINDOW':
      return {
        ...state,
        infoWindow: action.payload
      };
    case 'UPDATEPLACEITEM':
      // set isFav property on place item
      state.mapPlaces[action.payload[0]].isFav = action.payload[1];
      return {
        ...state,
        // spread mapPlaces to copy all place items
        // isolate and update single place item
        mapPlaces: [...state.mapPlaces, state.mapPlaces[action.payload[0]]]
      };
    default:
      return state;
  }
};

export default reducer;