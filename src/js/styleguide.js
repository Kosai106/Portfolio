import React from 'react'

class Styleguide extends React.Component {
  render() {
    return (
      <section id="styleguide">
        <div className="container">
          <div className="row">
            <div className="copy">
              <h1 className="font-primary">Header 1</h1>
              <h2 className="font-secondary">Header 2</h2>
              <h3 className="font-blue">Header 3</h3>
              <h4 className="font-gold">Header 4</h4>
              <h5 className="font-silver">Header 5</h5>
              <h6 className="font-darkest-grey">Header 6</h6>
              <p>This is a paragraph, there are many like it, but this one is mine.</p>
              <a href="#">Hyperlink</a>
            </div>
            <div className="list">
              <ul>
                <li className="font-white bg-primary">Unordered list #1</li>
                <li className="font-white bg-secondary">Unordered list #3</li>
                <li className="font-white bg-blue">Unordered list #4</li>
              </ul>
              <li className="typography--light">Ordered list #1</li>
              <li className="typography--micro">Ordered list #2</li>
              <li className="typography--mono">Ordered list #3</li>
            </div>
            <div className="colors">
              <div className="col1"></div>
              <div className="col2"></div>
              <div className="col3"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Styleguide
