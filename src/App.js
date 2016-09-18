import React, { Component } from 'react'
import auth from './components/Login/auth'

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
    	auth.logout();
    	appHistory.push('/');
    }

	updateAuth(loggedIn) {
	    this.setState({
	        loggedIn: !!loggedIn
	    })
	}

	componentWillMount() {
	    // auth.onChange = this.updateAuth.bind(this);
	    // auth.login()
	}
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