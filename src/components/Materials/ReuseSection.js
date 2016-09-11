import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReuseSection extends Component {
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
        <h1>Ideas for Reusing {this.state.material.replace(this.state.material[0], this.state.material[0].toUpperCase())}</h1>
        <div className='social-media-hashtag'></div>
        <div className='social-media-hashtag'></div>
        <ul>
          <li>List of ways to reuse {this.state.material}...</li>
        </ul>
      </div>
    );
  }
}

var mapStateToProps = function(state, ownProps){
    return {
    	materials: state.materialsReducer.materials
    };
};
ReuseSection = connect(state => (mapStateToProps), null)(ReuseSection);
export default ReuseSection