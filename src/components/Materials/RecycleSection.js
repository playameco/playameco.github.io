import React, { Component } from 'react'
import { connect } from 'react-redux'
import MapComponent from '../MapComponent.js'

// Todo: add back button with function `browserHistory.goBack()`

class RecycleSection extends Component {
  constructor(){
    super();
    this.state = {
      material: ''
    }
  }
  componentWillMount(){
    this.setState({
      material: this.props.currentMaterial
    })
  }
  render() {
    return (
      <div className="recycle-section">
        <h1>Locations to recycle {this.state.material.replace(this.state.material[0], this.state.material[0].toUpperCase())}</h1>
        <MapComponent />
      </div>
    );
  }
}

var mapStateToProps = function(state, ownProps){
  return {
    materials: state.materialsReducer.materials,
    currentMaterial: state.materialsReducer.currentMaterial
  };
};
RecycleSection = connect(state => (mapStateToProps), null)(RecycleSection);
export default RecycleSection
