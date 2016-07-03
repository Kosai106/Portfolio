import React from 'react'

class About extends React.Component {
    render() {
        return (
            <section id="about">
              <div className="container">
                <div className="avatar">
                  <img src="./img/avatars/Kevin.png" />
                </div>
                <div className="details">
                  <h3 className="text--center">About me</h3>
                  <li>Age: 24</li>
                  <li>Nationality: Danish</li>
                  <li>Current employer: Billetto ApS</li>
                </div>
              </div>
            </section>
        )
    }
}

export default About
