import * as MarkersService from "./markersService"

export function getCurrentLocation(){
    return new Promise(function(resolve, reject) {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve);
        }
        else {
            resolve({
                location:{
                    coords:{
                        latitude:40.4049599,
                        longitude: -86.9282559
                    }
                }
            });
        }

        reject();
    });
}

export function checkForLocalSpots() {
    return new Promise(function(resolve, reject) {
        MarkersService.getMarkers().then( (markers) => {
            getCurrentLocation().then( (actualLocation) => {
                markers.map( (marker) => {
                    return {
                        latitude: marker.geometry.coordinates[1],
                        longitude: marker.geometry.coordinates[0]
                    }
                }).forEach( (marker) => {
                    console.log(getDistanceFromLatLonInKm(
                        actualLocation.coords.latitude,
                        actualLocation.coords.longitude,
                        marker.latitude,
                        marker.longitude
                    ));
                })
            })
        });
    });
}

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c * 0.621371; // Distance in miles
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI/180)
}
