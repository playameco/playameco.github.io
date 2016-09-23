import React, { Component } from 'react'
import { logout } from './actions/users'

import { connect } from 'react-redux'
import { checkSession } from './actions/users'

import {IndexLink, Link,useRouterHistory, browserHistory} from 'react-router';
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

class App extends Component {
	constructor() {
		super();
	    this.state = {
	        loggedIn: false
	    }
    }

    logOut(){
    	this.props.dispatch(
    		logout()
    	)
    	this.forceUpdate();
    }

	updateAuth(loggedIn) {
	    this.setState({
	        loggedIn: !!loggedIn
	    })
	}
	componentWillMount(){
	    if(this.props.username&&this.props.email){
	    	appHistory.replace('/dashboard');
	    }
	}
  render () {
    return (
    	<div>
    		<div className='main-top-nav'>
		      <Link to='/'>
		      	<img id='mainlogo' src='images/ameco-logo.svg' alt='amEco App Logo' />
		      </Link>
		      <div>
			    <IndexLink to='/' activeClassName="active-link">Home</IndexLink>|
			    <Link to='/about' activeClassName="active-link">About</Link>|
			    {this.props.username ? (
	                <Link onClick={this.logOut.bind(this)} activeClassName="active-link">Log out</Link>
	            ) : (
	                <Link to="/login" activeClassName="active-link">Login</Link>
	            )}
		      </div>
	        </div>
	        {this.props.children}
	    </div>
    );
  }
}

var mapStateToProps = function(state, ownProps){
    return {
    	materials: state.materialsReducer.materials,
    	currentMaterial: state.materialsReducer.currentMaterial,
    	username: state.usersReducer.username,
    	email: state.usersReducer.email
    };
};
App = connect(state => (mapStateToProps), null)(App);
export default App