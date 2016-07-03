import React from 'react'

class Navigation extends React.Component {
    render() {
        return (
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
        )
    }
}

export default Navigation
