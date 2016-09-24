import React, { Component } from 'react'
import { Link } from 'react-router'
import SignUp from './SignUp'
import Login from './Login'
// import Verify from './Verify'

export default class LoginMain extends Component {
	constructor(){
		super();
		this.state = {
			displayLogin: true
		}
	}
	setLoginDisplay(){
		this.setState({
			displayLogin: true
		})
	}
	setSignUpDisplay(){
		this.setState({
			displayLogin: false
		})
	}
  render () {
  	var componentToDisplay = '';
  	if (this.state.displayLogin){
  		componentToDisplay = <Login />
  	} else {
  		componentToDisplay = <SignUp />
  	}
    return (
    	<div id='login-components'>
    		<div className="form">

		      <ul className="tab-group">
		        <li className={this.state.displayLogin ? 'tab active' : 'tab'}><a onClick={this.setLoginDisplay.bind(this)}>Log In</a></li>
		        <li className={!this.state.displayLogin ? 'tab active' : 'tab'}><a onClick={this.setSignUpDisplay.bind(this)}>Sign Up</a></li>
		      </ul>

		      <div className="tab-content">

		        {componentToDisplay}

		      </div>
			</div>
	    </div>
    );
  }
}
