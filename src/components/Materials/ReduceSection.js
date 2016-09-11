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
      <div className='sections reduce'>
        <h1>Reduce {this.state.material.replace(this.state.material[0], this.state.material[0].toUpperCase())} Usage</h1>
        <div className='reduce-section'>
          <div className='reduce-affiliate'>
            <img src='http://www.growingagreenfamily.com/wp-content/uploads/2013/06/the-safe-sporter-safe-reusable-water-bottles.jpg'/>
          </div>
          <div className='reduce-affiliate'>
            <img src='http://www.wastelesspantry.com.au/wp-content/uploads/2015/08/Opt-a-box.3-CLIP_web.jpg'/>
          </div>
          <div className='reduce-affiliate'>
            <img src='http://media.yellowbot.com/r/650x500/photos/pyTZ-1gqCZf_x--/endurobox-the-rentable-reusable-moving-box-temecula-ca.jpg'/>
          </div>
          <div className='reduce-affiliate'>
            <img src='http://63.135.117.183/wp-content/themes/ntake/images/ntakelinupborder.jpg'/>
          </div>
        </div>
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
