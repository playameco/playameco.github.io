import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMaterialsList, setCurrentMaterial } from '../actions/materials'
import { checkSession } from '../actions/users'
import Select from 'react-select'

import { useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
import { browserHistory } from 'react-router'

import Leaderboard from './Leaderboard'

class Dashboard extends Component {
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
		})
		this.props.dispatch(
			setCurrentMaterial(chosenMaterial)
		).then(()=>{
			appHistory.push('/materials');
		})
		// localStorage.setItem('chosenMaterial', chosenMaterial)
	}
	componentWillMount(){
	    // this.props.dispatch(checkSession());
	    if(!this.props.username){
	    	appHistory.replace('/');
	    } else {
	    	this.props.dispatch(getMaterialsList())
	    }
	}
	render(){
		var optionsArray = [];
		if (this.props.materials){
			this.props.materials.map(function(val, i){
				optionsArray.push({label: val.name, value: val.name})
			})
		}
		return (
			<div className='user-dashboard'>
				<div className='dashboard-header'>
					<h1 style={{textAlign: 'center'}}>Welcome Back {this.props.username}</h1>
					<div className='user-dashboard-question'>
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
				</div>
				<div className='dashboard-amicis'>
					<h1>Amici Collection</h1>
				</div>
				<div className='dashboard-games'>
					<h1>Favorite Games</h1>
				</div>
			</div>
			)
	}
}
var mapStateToProps = function(state, ownProps){
	console.log('state from dash ', state)
    return {
    	materials: state.materialsReducer.materials,
    	currentMaterial: state.materialsReducer.currentMaterial,
    	users: state.users,
    	username: state.usersReducer.username,
    	email: state.usersReducer.email
    };
};
Dashboard = connect(state => (mapStateToProps), null)(Dashboard);
export default Dashboard
