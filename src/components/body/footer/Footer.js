import React, { Component } from 'react'

import SocialLinks from './SocialLinks'
import Jointeam from './JoinTeam'

class Footer extends Component {
    render() {
        return (
            <div>
                <SocialLinks />
                <Jointeam />
            </div>
        )
    }
}

export default Footer
