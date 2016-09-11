import React, { Component } from 'react'

class PointSystem extends Component {
  render() {
    return (
      <div className='point-system'>
        <h1>Point System</h1>
        <ul className="lc-checks">
		  <li>
		    <span className="lc-checks__check">✔</span>
		    <span className="lc-checks__feature">Sign Up</span>
		  </li>
		  <li>
		    <span className="lc-checks__check">✔</span>
		    <span className="lc-checks__feature">Learn About Recycling</span>
		  </li>
		  <li>
		    <span className="lc-checks__check">✔</span>
		    <span className="lc-checks__feature">Earn Points!</span>
		  </li>
		  <li>
		    <span className="lc-checks__check">✔</span>
		    <span className="lc-checks__feature">Recycle</span>
		  </li>
		  <li>
		    <span className="lc-checks__check">✔</span>
		    <span className="lc-checks__feature">Earn More Points!!</span>
		  </li>
		  <li>
		    <span className="lc-checks__check">✔</span>
		    <span className="lc-checks__feature">Reuse/Reduce Waste</span>
		  </li>
		  <li>
		    <span className="lc-checks__check">✔</span>
		    <span className="lc-checks__feature">Earn Even More Points!!!</span>
		  </li>
		  <li>
		    <span className="lc-checks__check">✔</span>
		    <span className="lc-checks__feature">Collect Cute Animals</span>
		  </li>
		  <li>
		    <span className="lc-checks__check">✔</span>
		    <span className="lc-checks__feature">Encourage Others to Join You</span>
		  </li>
		</ul>
      </div>
    );
  }
}
export default PointSystem
