export function getMarkers(){
    return new Promise(function(resolve, reject) {

        const markers = [
                {
                    "type": "Feature",
                    "properties": {
                        "color": "#7e7e7e",
                        "marker-size": "medium",
                        "marker-symbol": "",
                        "description": "Mixed Recycling Dropoff Points at Purdue",
                        "type": "aluminum"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -86.91712260246275,
                            40.42596045563266
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "color": "#7e7e7e",
                        "marker-size": "medium",
                        "marker-symbol": "",
                        "description": "PRF parking lot at Fourth and Russell streets",
                        "type": "pet"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -86.91942662000656,
                            40.42897819352587
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "color": "#7e7e7e",
                        "marker-size": "medium",
                        "marker-symbol": "",
                        "description": "Water tower parking lot",
                        "type": "paper"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -86.92495197057724,
                            40.43360050105178
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "color": "#7e7e7e",
                        "marker-size": "medium",
                        "marker-symbol": "",
                        "description": "Intersection of David Ross Road and Tower Drive",
                        "type": "aluminum"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -86.92703604698181,
                            40.43344942358462
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "color": "#7e7e7e",
                        "marker-size": "medium",
                        "marker-symbol": "",
                        "description": "Purdue parking lot across from the Armory",
                        "type": "pet"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -86.91621869802475,
                            40.42882914740398
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "color": "#7e7e7e",
                        "marker-size": "medium",
                        "marker-symbol": "",
                        "description": "Purdue parking lot across from the Armory",
                        "type": "paper"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [
                            -86.890461,
                            40.417259
                        ]
                    }
                }
            ];


        if (markers.length > 0) {
            resolve(markers);
        }
        else {
            reject(Error("Browser doesn't support location service"));
        }
    });
}