import React        from 'react'
import Navigation   from './navigation'
import Section      from './section'
import About        from './about/about'
import Styleguide   from './styleguide'

class All extends React.Component {
    render() {
        return (
          <div>
            <Navigation />
            <Styleguide />
            <Section name="Kevin Østerkilde" ctaName="Contact me" ctaUrl="#zzz"/>
            <About />
          </div>
        )
    }
}

export default All
