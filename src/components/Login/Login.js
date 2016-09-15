import React, { Component } from 'react'
import { Link, withRouter, browserHistory } from 'react-router'
import auth from './auth'

class Login extends Component {
	constructor(){
		super();
		this.state = {
			showEmailLabel: true,
			showPwdLabel: true,
			error: false
		}
	}
	handleSubmit(event){
	    event.preventDefault();

	    const email = this.refs.email.value;
	    const pwd = this.refs.pwd.value;

	    auth.login(email, pwd, (loggedIn) => {
		    if (!loggedIn){
		        return this.setState({ error: true })
		    }

	        // const { location } = this.props

	      // if (location.state && location.state.nextPathname) {
	      //   this.props.router.replace(location.state.nextPathname)
	      // } else {
	        browserHistory.push('/')
	      // }
	    })
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

		          <form onSubmit={this.handleSubmit.bind(this)}>

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

export default Login
