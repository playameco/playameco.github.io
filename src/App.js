import React, { Component } from 'react'
import { logout } from './actions/users'

import { connect } from 'react-redux'
import { checkSession } from './actions/users'

import {Link,useRouterHistory, browserHistory} from 'react-router';
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

export default class App extends Component {
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
    	appHistory.replace('/');
    }

	updateAuth(loggedIn) {
	    this.setState({
	        loggedIn: !!loggedIn
	    })
	}

	// componentWillMount(){
	//     this.props.dispatch(checkSession());
	// }
  render () {
    return (
    	<div>
    		<div className='main-top-nav'>
		      <Link to='/'>
		      	<img id='mainlogo' src='images/ameco-logo.svg' alt='amEco App Logo' />
		      </Link>
		      <div>
			    <Link to='/'>Home</Link>
			    <Link to='/about'>About</Link>
			    {this.state.loggedIn ? (
	                <Link onClick={this.logOut.bind(this)}>Log out</Link>
	            ) : (
	                <Link to="/login">Login</Link>
	            )}
		      </div>
	        </div>
	        {this.props.children}
	    </div>
    );
  }
}