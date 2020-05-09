import React, { Component } from 'react'

import Services from './services/Services'
import Client from './client/Client'
import About from './about/About'
import Work from './work/Work'
import ShopWithUs from './shopWithUs/ShopWithUs'

class Body extends Component {
    render() {
        return (
            <div>
                <Services />

                <Client />

                {/* <About />

                <Work />

                <ShopWithUs /> */}
            </div>
        )
    }
}

export default Body
