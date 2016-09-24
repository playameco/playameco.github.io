import React, { Component } from 'react'

import { Link, useRouterHistory, browserHistory } from 'react-router';
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import { connect } from 'react-redux'
import { updatePassword } from '../../actions/users'

class PasswordReset extends Component {

  onUpdatePass(e){
	//validate that the passwords match
	var matched = false;
	var validPass = false;

	if (this.refs.pass1.value == this.refs.pass2.value) {
		matched = true;
		//see if we have a valid password in terms of password requirements
		validPass= true;
		if (validPass) {
			this.props.dispatch(updatePassword(this.refs.vCode.value, this.refs.pass1.value, this.state.localEmail));
		}
	} else {
			console.log("New and confirmed passowrds don't match.  Please upddte and try again.");
	}
    e.preventDefault();

  }

  componentWillReceiveProps(nextProps) {

	if(nextProps.users.pwdUpdated && !nextProps.users.error) {
		//go back to the login screen
		// $.magnificPopup.open({
		//   items: {
		// 	src: '<div class="login-popup" style="text-align:center;"><span style="color: #009f15; text-align:center; vertical-align:middle; display:inline-block; padding:30px;"><i class="material-icons" style="vertical-align:text-bottom">thumb_up</i>&nbsp;&nbsp;Password updated.</span><div><a class="popup-modal-dismiss" href="#">Dismiss</a></div></div>', // can be a HTML string, jQuery object, or CSS selector
		// 	type: 'inline'
		//   }
		// });

		// Spinner.hideSpinner();
		// appHistory.replace('/');
	}
	else if (nextProps.users.error)
	{
		// Spinner.hideSpinner();
		//console.log("error info:" + nextProps.users.error);

		//to-do: look at error and display message/redirect to login as appropriate
		//if error message is:  Username and pool information are required
		//then go to login as the required state data has been lost due to user refreshing browser
	}
	else{
		//console.log('unmounted with no error information')
	}
  }

  componentWillMount() {
	//resets the user state, clears any prior error messages that were displayed
	//if customer has an existing session, the login uses that session and updates redux state
	// this.props.dispatch(clearUserMessages());
	this.setState({localEmail: this.props.users.email});
  }

  render(){
    return (

      <div className='loginContainer'>
		<div className='loginPanel' id='loginPanel'>
			<div className='signInFormComponent'>
				<div className='loginHeadFoot'>
					<p style={pHeight}><img className='logo' src='/dist/images/preferably_logo-01.png' width='165' height='42'/></p>
					<p style={padTop}>Please enter your verification code and your new password below.</p>
				</div>

				<form onSubmit={this.onUpdatePass.bind(this)}>
				<div style={labelPad}><label htmlFor='vCode'>Verification Code</label></div>
				<div><input ref='vCode' className='loginField' id='vCode' type="text" required autoFocus/></div>

				<div style={labelPad}><label htmlFor='pass1'>New Password</label></div>
				<div><input ref='pass1' className='loginField' id='pass1' type="password" required/></div>

				<div style={labelPad}><label htmlFor='pass2'>Confirm New Password</label></div>
				<div><input ref='pass2' className='loginField' id='pass2' type="password" required/></div>

				<div className='center' style={padTop}><button className='btn' type="submit" data-email={this.props.users.email}>Change Password</button></div>
				</form>

				<div style={padTop}><span id='errorMsg' className="error">{this.props.users.error}&nbsp;</span></div>

				<div id='spin' className='mk-spinner-pie'/>
			</div>
		</div>
      </div>
    )
  }
}

PasswordReset = connect(state => ({ users: state.users }), null)(PasswordReset);
export default PasswordReset
