import React               from 'react'
import { StickyContainer } from 'react-sticky'
import Navigation          from './navigation'
import Hero                from './hero'
import Random              from './sections/random'
import About               from './sections/about'
import Styleguide          from './styleguide'

class All extends React.Component {
    render() {
        return (
          <StickyContainer>
            <Hero name="Kevin Østerkilde" ctaName="Get started" ctaUrl="#about"/>
            <Navigation />
            <Random />
            <Styleguide />
            <About />
          </StickyContainer>
        )
    }
}

export default All
