import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReduceSection extends Component {
  constructor(){
    super();
    this.state = {
      material: ''
    }
  }
  componentWillMount(){
    var material = localStorage.getItem('chosenMaterial');
    this.setState({
      material
    })
  }
  render() {
    return (
      <div className='sections'>
        <h1>Reduce {this.state.material.replace(this.state.material[0], this.state.material[0].toUpperCase())} Usage</h1>
      </div>
    );
  }
}

var mapStateToProps = function(state, ownProps){
    return {
    	materials: state.materialsReducer.materials
    };
};
ReduceSection = connect(state => (mapStateToProps), null)(ReduceSection);
export default ReduceSection
