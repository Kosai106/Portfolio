import React               from 'react'
import { StickyContainer } from 'react-sticky'
import Navigation          from './navigation'
import Hero                from './hero'
import Random              from './sections/random'
import Work                from './sections/work'
import About               from './sections/about'
import Styleguide          from './styleguide'

class All extends React.Component {
    render() {
        return (
          <StickyContainer>
            <Hero name="Kevin Østerkilde" ctaName="Get started" ctaUrl="#about"/>
            <Navigation />
            <Work />
            <Styleguide />
            <About />
          </StickyContainer>
        )
    }
}

export default All
