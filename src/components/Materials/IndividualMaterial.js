import React, { Component } from 'react'
import { connect } from 'react-redux'

class IndividualMaterial extends Component {
  constructor(){
    super();
    this.state = {
      material: ''
    }
  }
  render() {
    var description = this.props.description[0].description;
    return (
      <div className='sections'>
        <p>{description}</p>
        <button onClick={this.props.toggleDescription}>Back to List</button>
      </div>
    );
  }
}

var mapStateToProps = function(state, ownProps){
    return {
    	materials: state.materialsReducer.materials
    };
};
IndividualMaterial = connect(state => (mapStateToProps), null)(IndividualMaterial);
export default IndividualMaterial