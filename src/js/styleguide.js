import React from 'react'

class Styleguide extends React.Component {
  render() {
    return (
      <section id="styleguide">
        <div className="container">
          <div className="row">
            <div className="copy">
              <h1 className="typography--alpha">Header 1</h1>
              <h2 className="typography--beta">Header 2</h2>
              <h3 className="typography--gamma">Header 3</h3>
              <h4 className="typography--delta">Header 4</h4>
              <h5 className="typography--eta">Header 5</h5>
              <h6 className="typography--theta">Header 6</h6>
              <p>This is a paragraph, there are many like it, but this one is mine.</p>
              <a href="#">Hyperlink</a>
            </div>
            <div className="list">
              <ul>
                <li className="typography--regular">Unordered list #1</li>
                <li className="typography--regular">Unordered list #3</li>
                <li className="typography--regular">Unordered list #4</li>
              </ul>
              <li className="typography--regular">Ordered list #1</li>
              <li className="typography--regular">Ordered list #2</li>
              <li className="typography--regular">Ordered list #3</li>
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
