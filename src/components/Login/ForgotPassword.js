import React, { Component } from 'react'

import { Link, useRouterHistory, browserHistory } from 'react-router';
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import { connect } from 'react-redux'
import { sendVerificationCode } from '../../actions/users'


class Forgot extends Component {
  onSendCode(e){
  	e.preventDefault();
	// Spinner.showSpinner();
	// this.props.dispatch(clearUserMessages());
	this.props.dispatch(sendVerificationCode(this.refs.emailAddress.value));
  }


  componentWillReceiveProps(nextProps) {

    if (!nextProps.users.error && nextProps.users.email){
		appHistory.replace('/pass-reset');
	} else if (nextProps.users.error){
		Spinner.hideSpinner();
	}
  }

  componentWillMount() {
	//resets the user state, clears any prior error messages that were displayed
	//if customer has an existing session, the login uses that session and updates redux state
	this.props.dispatch(clearUserMessages());
  }

	componentWillUnmount(){
		// Spinner.hideSpinner();
	}

  render(){
    return (

      <div className='loginContainer'>
		<div className='loginPanel' id='loginPanel'>
			<div className='signInFormComponent'>
				<div className='loginHeadFoot'>
					<p style={pHeight}><img className='logo' src='/dist/images/preferably_logo-01.png' width='165' height='42'/></p>
					<p style={padTop}>What is your email address?  We will send you a verification code to reset your password.</p>
				</div>

				<form onSubmit={this.onSendCode.bind(this)}>
				<div style={labelPad}><label htmlFor='email'>Email address</label></div>
				<div><input ref='emailAddress' className='loginField' id='email' type="email" required autoFocus/></div>

				<div className='center' style={padTop}><button className='btn' type="submit">Send Code</button></div>
				</form>

				<div style={padTop}><span id='errorMsg' className="error">{this.props.users.error}&nbsp;</span></div>
				<div id='spin' className='mk-spinner-pie'/>
			</div>
		</div>
      </div>
    )
  }
}

Forgot = connect(state => ({ users: state.users }), null)(Forgot);
export default Forgot
