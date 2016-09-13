import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  render () {
    return (
    	<div>
    		<div className='main-top-nav'>
		      <Link to='/'>
		      	<img id='mainlogo' src='images/ameco-logo.svg' alt='amEco App Logo' />
		      </Link>
		      <div>
			    <Link to='/'>Home</Link>
			    <Link to='/example'>Learn more about earning points</Link>
			    <Link to='/login'>Login</Link>
		      </div>
	        </div>
	        {this.props.children}
	    </div>
    );
  }
}

// <img src='images/Ameca2-01.svg'/>
