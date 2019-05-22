export default function rootReducer(state = {
    startingLocation: '', 
    dropOff: '',
    isFetchingStartingLocation: false,
    isFetchingDropOff: false,
    suggestedPickupLocations: [],
    suggestedDropOff: [],
    isConvertingPickupLatLong: false,
    isConvertingDropoffLatLong: false,
    pickupLatLong: '',
    dropoffLatLong: '',
   }, action) {
    switch(action.type){
      case "FETCHING_SUGGESTED_START_LOCATIONS":
        return {...state, isFetchingStartingLocation: true, suggestedPickupLocations: []}
      case "DISPLAY_PICKUP_LOCATIONS":
        return {...state, isFetchingStartingLocation: false, suggestedPickupLocations: action.suggestedPickupLocations}
      case "FETCHING_SUGGESTED_DROPOFFS": 
        return {...state, isFetchingDropOff: true, suggestedDropOffs: []}
      case "DISPLAY_DROPOFFS":
        return {...state, isFetchingDropOff: false, suggestedDropOffs: action.suggestedDropOffs}
      case "CONVERTING_PICKUP_LAT_LONG":
        return {...state, isConvertingPickupLatLong: true}
      case "RETRIEVE_PICKUP_LAT_LONG":
        return{...state, isConvertingPickupLatLong: false, pickupLatLong: action.pickupLatLong}
      case "CONVERTING_DROPOFF_LAT_LONG":
        return{...state, isConvertingDropoffLatLong: true}
      case "RETRIEVE_DROPOFF_LAT_LONG":
        return{...state, isConvertingDropoffLatLong: false, dropoffLatLong: action.dropoffLatLong}
        default: 
        return state
    }
  }