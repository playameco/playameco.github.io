import React, { Component } from 'react'
import { Link } from 'react-router'
import SignUp from './SignUp'
import Login from './Login'

export default class LoginMain extends Component {
	constructor(){
		super();
		this.state = {
			displayLogin: true
		}
	}
	changeDisplay(){
		this.setState({
			displayLogin: !this.state.displayLogin
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
		        <li className={this.state.displayLogin ? 'tab active' : 'tab'}><a onClick={this.changeDisplay.bind(this)}>Log In</a></li>
		        <li className={!this.state.displayLogin ? 'tab active' : 'tab'}><a onClick={this.changeDisplay.bind(this)}>Sign Up</a></li>
		      </ul>

		      <div className="tab-content">

		        {componentToDisplay}

		      </div>
			</div>
	    </div>
    );
  }
}