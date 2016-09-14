import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Login extends Component {
	constructor(){
		super();
		this.state = {
			showEmailLabel: true,
			showPwdLabel: true
		}
	}

	//why am I setting state every time there is a keypress????
	//TODO: these two functions need to be cleaned up:
	togglePwdLabel(){
		if (this.refs.pwd.value.length > 0){
			this.setState({
				showPwdLabel: false
			})
		} else {
			this.setState({
				showPwdLabel: true
			})
		}
	}
	toggleEmailLabel(){
		if (this.refs.email.value.length > 0){
			this.setState({
				showEmailLabel: false
			})
		} else {
			this.setState({
				showEmailLabel: true
			})
		}
	}
  render () {
    return (
    		<div id="login-form">
		          <h1>Welcome Back!</h1>

		          <form action="/" method="post">

		            <div className="field-wrap">
		            <label className={this.state.showEmailLabel ? '' : 'active highlight'}>
		              Email Address<span className="req">*</span>
		            </label>
		            <input ref='email' onKeyUp={this.toggleEmailLabel.bind(this)} type="email" required autoComplete="off"/>
		          </div>

		          <div className="field-wrap">
		            <label className={this.state.showPwdLabel ? '' : 'active highlight'}>
		              Password<span className="req">*</span>
		            </label>
		            <input ref='pwd' onKeyUp={this.togglePwdLabel.bind(this)} type="password" required autoComplete="off"/>
		          </div>

		          <p className="forgot"><a href="#">Forgot Password?</a></p>

		          <button className="button button-block">Log In</button>

		          </form>
	        </div>
    );
  }
}