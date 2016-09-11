import {ACTIONS} from "../actions/actions"

/** coords of Lafyette */
const initialState = {
    latitude: 40.4237054,
    longitude: -86.9233833,
    markers:[
        {
            latitude: 40.4049599,
            longitude: -86.9282559,
            type: 'pet'
        }]
    }


function mapReducer(state = initialState, action){
    switch (action.type) {
        case ACTIONS.FETCHED_MAP:
            console.log('reducer working', action);
            if(action.location == null){
                return {
                    markers: action.markers.map((marker) => {
                        return {
                            latitude: marker.geometry.coordinates[1],
                            longitude: marker.geometry.coordinates[0],
                            properties: marker.properties.description,
                            color: marker.properties.color,
                            type: marker.properties.type
                        };
                    }),
                    latitude: initialState.latitude,
                    longitude: initialState.longitude
                }
            }else {
                return {
                    markers: action.markers.map((marker) => {
                        return {
                            latitude: marker.geometry.coordinates[1],
                            longitude: marker.geometry.coordinates[0],
                            properties: marker.properties.description,
                            color: marker.properties.color,
                            type: marker.properties.type
                        };
                    }),
                    latitude: action.location.coords.latitude,
                    longitude: action.location.coords.longitude
                }
            }
        default:
            return state;
    };
};

export default mapReducer
