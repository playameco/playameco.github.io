import React, { Component } from 'react'

class PointSystem extends Component {
  render() {
    return (
      <div className='point-system'>
        <h1>Point System</h1>
        <p>Earn points for learning and participating in recycling, reusing, and reducing waste.</p>
        <ol>
        	<li>Sign up for an account.</li>
        	<li>Watch tutorials to earn points.</li>
        	<li>Earn even more points by recycling and reusing materials.</li>
        </ol>
      </div>
    );
  }
}
export default PointSystem
