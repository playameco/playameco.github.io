import React, { Component } from 'react'

import { Link, useRouterHistory, browserHistory } from 'react-router';
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import { connect } from 'react-redux'
import { signUp } from '../../actions/users'

class SignUp extends Component {
	constructor(){
		super();
		this.state = {
			showEmailLabel: true,
			showPwdLabel: true,
			showNameLabel: true
		}
	}

	signUp(e){
		e.preventDefault();

		var name = this.refs.name.value;
		var email = this.refs.email.value;
		var password = this.refs.pwd.value;

		this.props.dispatch(
			signUp(name, email, password)
		)

		appHistory.push('/verify')
	}

	//why am I setting state every time there is a keypress????
	//why do I have 3 different functions to do the same thing
	//TODO: these three functions need to be cleaned up:
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

		          <form onSubmit={this.signUp.bind(this)}>

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

var mapStateToProps = function(state, ownProps){
    return {
    	materials: state.materialsReducer.materials,
    	currentMaterial: state.materialsReducer.currentMaterial
    };
};
SignUp = connect(state => (mapStateToProps), null)(SignUp);
export default SignUp