import React        from 'react'
import Navigation   from './navigation'
import Section      from './section'
import About        from './about/about'

class All extends React.Component {
    render() {
        return (
          <div>
            <Navigation />
            <Section name="Kevin Østerkilde"/>
            <About />
          </div>
        )
    }
}

export default All
