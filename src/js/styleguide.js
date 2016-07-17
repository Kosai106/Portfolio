import React from 'react'

class Styleguide extends React.Component {
  render() {
    return (
      <section id="styleguide">
        <div className="container">
          <div className="row">
            <div className="copy">
              <h1>Header 1</h1>
              <h2>Header 2</h2>
              <h3>Header 3</h3>
              <h4>Header 4</h4>
              <h5>Header 5</h5>
              <h6>Header 6</h6>
              <p>This is a paragraph, there are many like it, but this one is mine.</p>
              <a href="#">Hyperlink</a>
            </div>
            <div className="list">
              <ul>
                <li>Unordered list #1</li>
                <li>Unordered list #3</li>
                <li>Unordered list #4</li>
              </ul>
              <li>Ordered list #1</li>
              <li>Ordered list #2</li>
              <li>Ordered list #3</li>
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
