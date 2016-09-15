import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import auth from './components/Login/auth'

export default class App extends Component {
	constructor() {
		super();
	    this.state = {
	        loggedIn: auth.loggedIn()
	    }
    }

    logOut(){
    	auth.logout();
    	browserHistory.push('/');
    }

	updateAuth(loggedIn) {
	    this.setState({
	        loggedIn: !!loggedIn
	    })
	}

	componentWillMount() {
	    auth.onChange = this.updateAuth.bind(this);
	    auth.login()
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
//test