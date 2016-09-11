import React from "react";
import {connect} from "react-redux";
import * as MarkersService from "../services/markersService";
import * as Store from "../store/store";
import {initMap} from "../actions/actions";
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

class MapComponent extends React.Component {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }

    componentWillMount() {
        MarkersService.getMarkers().then(function (markers) {
            Store.dispatch(initMap(markers))
        });
    }

    render() {
        var icons = {
            aluminium: {
                url: '/images/map-bunny.png'
            },
            pet: {
                url: '/images/map-fox.png'
            },
            paper: {
                url: '/images/map-pastry.png'
            }
        };

        var bigIcons = {
            aluminium: {
                url: '/images/lg-bunny.png'
            },
            pet: {
                url: '/images/lg-fox.png'
            },
            paper: {
                url: '/images/lg-puppy.png'
            }
        };

        var bigMarkers = this.props.markers.map((marker) => {
            return (
                <div>
                    <div>
                        <img src={bigIcons[marker.type].url}/>
                    </div>
                    <div>
                        <div><h1>{marker.title}</h1></div>
                        <div>{marker.description}</div>
                    </div>
                </div>);
        });

        return (

        <div style={{height: "100%"}}>
            <div>
                {bigMarkers}
            </div>
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
                                        title={marker.title}
                                    />
                                )
                            })
                        }
                    </GoogleMap>
                }
            />
        </div>
    )
        ;
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
