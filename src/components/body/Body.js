import React, { Component } from 'react'

import Services from './services/Services'
import About from './about/About'
import Work from './work/Work'
import ShopWithUs from './shopWithUs/ShopWithUs'

class Body extends Component {
    render() {
        return (
            <div>
                <Services />

                <About />

                <Work />

                <ShopWithUs />
            </div>
        )
    }
}

export default Body
