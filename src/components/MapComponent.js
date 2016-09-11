import React from 'react'
import { connect } from 'react-redux'
import * as LocationService from '../services/locationService'
import * as MarkersService from '../services/markersService'
import * as Store from '../store/store'
import { initMap } from '../actions/actions'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

class MapComponent extends React.Component {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }

    componentWillMount() {
        LocationService.getCurrentLocation().then(function (location) {
            MarkersService.getMarkers().then(function (markers) {
                Store.dispatch(initMap(location, markers))
            })
        }).catch(( location) => {
            MarkersService.getMarkers().then(function (markers) {
                Store.dispatch(initMap(location, markers))
            })
        });
    }

    render() {
        var icons = {
            aluminum: {
                url: '/images/map-bunny.png'
            },
            pet: {
                url: '/images/map-fox.png'
            },
            paper: {
                url: '/images/map-pastry.png'
            }
        };

        return (
            <div style={{height: "100%"}}>
                <GoogleMapLoader
                    containerElement={
                        <div
                            style={{
                                height: "600px",
                            }}
                        />
                    }
                    googleMapElement={
                        <GoogleMap
                            ref={(map) => console.log(map)}
                            defaultZoom={13}
                            defaultCenter={{lat: this.props.latitude, lng: this.props.longitude}}
                            onClick={(event) => {
                                console.log(event)
                            }}>
                            {
                                this.props.markers.map((marker, index) => {
                                    return (
                                        <Marker
                                            position={new google.maps.LatLng(marker.latitude, marker.longitude)}
                                            onRightclick={(event) => console.log(event)}
                                            icon={icons[marker.type]}
                                        />
                                    )
                                })
                            }
                        </GoogleMap>
                    }
                />
            </div>
        );
    }
}

var mapStateToProps = function (state, ownProps) {
    return {
        latitude: state.mapReducer.latitude,
        longitude: state.mapReducer.longitude,
        markers: state.mapReducer.markers
    };
};

MapComponent = connect(state => (mapStateToProps), null)(MapComponent);

export default MapComponent
