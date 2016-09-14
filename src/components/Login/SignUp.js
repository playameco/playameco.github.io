import React, { Component } from 'react'
import { Link } from 'react-router'

export default class SignUp extends Component {
	constructor(){
		super();
		this.state = {
			showEmailLabel: true,
			showPwdLabel: true,
			showNameLabel: true
		}
	}

	//why am I setting state every time there is a keypress????
	//why do I have 3 different functions to do the same thing
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
	toggleNameLabel(){
		if (this.refs.name.value.length > 0){
			this.setState({
				showNameLabel: false
			})
		} else {
			this.setState({
				showNameLabel: true
			})
		}
	}
  render () {
    return (
    		<div id="signup-form">
		          <h1>Sign Up for Free</h1>

		          <form action="/" method="post">

		            <div className="field-wrap">
		              <label className={this.state.showNameLabel ? '' : 'active highlight'}>
		                Name<span className="req">*</span>
		              </label>
		              <input ref='name' type="text" onKeyUp={this.toggleNameLabel.bind(this)} required autoComplete="off" />
		            </div>

		          <div className="field-wrap">
		            <label className={this.state.showEmailLabel ? '' : 'active highlight'}>
		              Email Address<span className="req">*</span>
		            </label>
		            <input ref='email' type="email" onKeyUp={this.toggleEmailLabel.bind(this)} required autoComplete="off"/>
		          </div>

		          <div className="field-wrap">
		            <label className={this.state.showPwdLabel ? '' : 'active highlight'}>
		              Set A Password<span className="req">*</span>
		            </label>
		            <input ref='pwd' type="password" onKeyUp={this.togglePwdLabel.bind(this)} required autoComplete="off"/>
		          </div>

		          <button type="submit" className="button button-block">Get Started</button>

		          </form>

		        </div>
    );
  }
}