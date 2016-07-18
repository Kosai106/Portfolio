import React               from 'react'
import { StickyContainer } from 'react-sticky';
import Navigation          from './navigation'
import Section             from './section'
import About               from './about/about'
import Styleguide          from './styleguide'

class All extends React.Component {
    render() {
        return (
          <StickyContainer>
            <Section name="Kevin Østerkilde" ctaName="Get started" ctaUrl="#about"/>
            <Navigation />
            <Styleguide />
            <About />
          </StickyContainer>
        )
    }
}

export default All
