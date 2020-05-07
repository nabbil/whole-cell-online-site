import React, { Component } from 'react'

import Services from './services/Services'
import About from './about/About'

class Body extends Component {
    render() {
        return (
            <div>
                <Services />

                <About />
            </div>
        )
    }
}

export default Body
