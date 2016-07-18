import React from 'react'
import { Sticky } from 'react-sticky';

class Navigation extends React.Component {
  render() {
    return (
      <Sticky>
        <nav className="navigation">
          <div className="container">
            <div className="logo">
              <a href="#">Oesterkilde</a>
            </div>
            <div className="links">
              <a href="#" className="active">Portfolio</a>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </nav>
      </Sticky>
    )
  }
}

export default Navigation
