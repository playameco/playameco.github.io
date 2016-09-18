import React, { Component } from 'react'
import auth from './auth'

import { Link, useRouterHistory, browserHistory } from 'react-router';
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import { connect } from 'react-redux'
import { login } from '../../actions/users'

class Login extends Component {
	constructor(){
		super();
		this.state = {
			showEmailLabel: true,
			showPwdLabel: true,
			error: false
		}
	}
	onLogin(e){
	    e.preventDefault();

	    const email = this.refs.email.value;
	    const pwd = this.refs.pwd.value;

	    this.props.dispatch(
	    	login(email, pwd)
    	)

        appHistory.push('/')

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

		          <form onSubmit={this.onLogin.bind(this)}>

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

		          <p className="forgot"><a>Forgot Password?</a></p>

		            {this.state.error && (
			            <p className='login-error'>Invalid Login Information</p>
			        )}

		          <button type='submit' className="button button-block">Log In</button>

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
Login = connect(state => (mapStateToProps), null)(Login);
export default Login
