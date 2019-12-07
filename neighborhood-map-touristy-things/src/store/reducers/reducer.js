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
  searchboxClicked: false,
  showLogin: true,
  showLogout: false,
  showAuth: false,
  userId: '',
  userToken: null,
  userFirebaseData: null,
  userFaves: []
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
      const updatedMapPlaces = tmpUpdatedMapPlaces
        .filter((place, index, arr) => {
          return place !== null;
        })
        .filter((place, index) => tmpUpdatedMapPlaces.indexOf(place) === index);

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
    case 'SHOWAUTH':
      return {
        ...state,
        showAuth: action.payload
      };
    case 'SHOWLOGIN':
      return {
        ...state,
        showLogin: action.payload
      };
    case 'SHOWLOGOUT':
      return {
        ...state,
        showLogout: action.payload
      };
    case 'FIREBASEAUTHENTICATE':
      return {
        ...state,
        userId: action.userId,
        userToken: action.token
      };
    case 'CLEARUSERTOKEN':
      return {
        ...state,
        mapPlaces: [],
        userId: '',
        userToken: null,
        showLogin: true,
        showLogout: false,
        showAuth: false,
        userFirebaseData: null,
        userFaves: []
      };
    case 'LOADUSERDATA':
      const email = action.payload.email;
      const firstName = action.payload['first-name'];
      const lastName = action.payload['last-name'];

      return {
        ...state,
        userFirebaseData: { email, firstName, lastName }
      };
    case 'LOADUSERFAVES':
      let tmpFavesArr = null;

      if (action.payload['faves-list']) {
        tmpFavesArr = Object.keys(action.payload['faves-list']).map(
          (key, index) => {
            return action.payload['faves-list'][key];
          }
        );
      }
      return {
        ...state,
        userFaves: tmpFavesArr
      };
    case 'ADDTOFAVES':
      const placeId = action.payload.placeId;

      let tmpAddToFavesArr = [];
      state.userFaves.forEach((fave, index) => {
        if (fave.placeId !== placeId) {
          tmpAddToFavesArr.push(fave);
        }
      });

      return {
        ...state,
        userFaves: [...tmpAddToFavesArr, action.payload]
      };
    case 'DELETEFROMFAVES':
      const updatedFavesArrDelete = state.userFaves.filter((item, index) => {
        return state.userFaves[index].placeId !== action.payload;
      });

      return {
        ...state,
        userFaves: updatedFavesArrDelete
      };
    default:
      return state;
  }
};

export default reducer;
