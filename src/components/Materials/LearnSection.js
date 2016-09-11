import React, { Component } from 'react'
import { connect } from 'react-redux'

import IndividualMaterial from './IndividualMaterial'

class LearnSection extends Component {
  constructor(){
    super();
    this.state = {
      material: '',
      description: '',
      typesArray: [],
      showDescription: false
    }
  }
  handleTypeChoice(e){
    console.log(e.target.id.replace('-', ' '))
    var type = e.target.id.replace('-', ' ');
    var typeObj = this.state.typesArray.filter(function(val){
      return val.type === type;
    })
    console.log(typeObj.description)
    this.setState({
      description: typeObj,
      showDescription: true
    })
  }
  toggleDescription(){
    this.setState({
      showDescription: !this.state.showDescription
    })
  }
  componentWillMount(){
    var material = localStorage.getItem('chosenMaterial');
    var typesArray = [];
    this.props.materials.filter(function(val){
      if (val.name === material){
        typesArray = val.types.map(function(x){
          return x;
        })
      }
    })
    this.setState({
      material,
      typesArray
    })
  }
  render(){
  	var that = this;
  	var materialsJSX = this.state.typesArray.map(function(val, i){
      var id = val.type.replace(' ', '-');
  		return <button id={id} onClick={that.handleTypeChoice.bind(that)} key={i}>{val.type}</button>
  	})
    var display = '';
    if (this.state.showDescription){
      display = <IndividualMaterial toggleDescription={this.toggleDescription.bind(this)} description={this.state.description} />;
    } else {
      display = materialsJSX;
    }
    return (
      <div className='sections'>
        <h1>Learn How to Recycle {this.state.material.replace(this.state.material[0], this.state.material[0].toUpperCase())}</h1>
        <ul>{display}</ul>
      </div>
    );
  }
}

var mapStateToProps = function(state, ownProps){
    return {
    	materials: state.materialsReducer.materials
    };
};
LearnSection = connect(state => (mapStateToProps), null)(LearnSection);
export default LearnSection