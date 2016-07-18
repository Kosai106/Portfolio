import React from 'react'

class About extends React.Component {
  render() {
    return (
      <section id="about">
        <div className="grid text--center container">
          <div className="grid__item one-half">
            <div className="grid__item one-whole avatar">
              <img src="./img/avatars/Kevin.png" />
            </div>
            <div className="grid__item one-whole details">
              <h3 className="text--center">About me</h3>
              <li>Age: 24</li>
              <li>Nationality: Danish</li>
              <li>Current employer: Billetto ApS</li>
            </div>
          </div>
          <div className="grid__item one-half">
            <p>Hello world</p>
          </div>
        </div>
      </section>
    )
  }
}

export default About
