import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMaterialsList, setCurrentMaterial } from '../actions/actions'
import Select from 'react-select'

import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
import { browserHistory } from 'react-router'

import Leaderboard from './Leaderboard'

class ExampleComponent1 extends Component {
	constructor(){
		super();
		this.state = {
			chosenMaterial: ''
		}
	}
	chooseMaterial(val){
		var chosenMaterial = val.value;
		this.setState({
			chosenMaterial
		});
		localStorage.setItem('chosenMaterial', chosenMaterial)
		var item = localStorage.getItem('chosenMaterial'); //useless line just to push, need to delete
		appHistory.push('/materials');
		//TODO...
		//more stuff
		// this.props.dispatch(setCurrentMaterial(chosenMaterial))
	}
	componentWillMount(){
		this.props.dispatch(getMaterialsList())
	}
	componentWillUpdate(){
		// if (this.state.chosenMaterial.length > 0){
		// 	this.props.dispatch(getMaterialsList(this.state.chosenMaterial))
		// }
	}
	render(){
		var optionsArray = [];
		if (this.props.materials){
			this.props.materials.map(function(val, i){
				optionsArray.push({label: val.name, value: val.name})
			})
		}
		return (
			<div className='main-page-component'>
				<div className='main-page-question'>
					<h1>What do I do with</h1>
					<Select
	                      value={this.state.chosenMaterial}
	                      className="materials-select"
	                      clearable={false}
	                      options={optionsArray}
	                      searchable={true}
	                      autofocus={true}
	                      placeholder='Choose a Material...'
	                      onChange={this.chooseMaterial.bind(this)}
	                  />
			        <h1>?</h1>
				</div>
				<div id='survey'>
					<a href="https://docs.google.com/forms/d/e/1FAIpQLSf_hhL8G5ik71rHZFiHDAGKdMv7-30K_gKk74vYFA0CbgXWBA/viewform?usp=send_form">Take our 3 question survey and be<br />the first to know when we launch!</a>
				</div>
				<Leaderboard />
			</div>
			)
	}
}
var mapStateToProps = function(state, ownProps){
    return {
    	materials: state.materialsReducer.materials,
    	currentMaterial: state.materialsReducer.currentMaterial
    };
};
ExampleComponent1 = connect(state => (mapStateToProps), null)(ExampleComponent1);
export default ExampleComponent1
