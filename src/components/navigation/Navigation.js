import React, { Component } from 'react'
import Logo from './Logo'
import NavigationLink from './NavigationLink'

export default class Navigation extends Component {
    render() {
        return <div className='navigation'>
            <Logo />
            <NavigationLink text="Trending" />
            <NavigationLink text="Random" />
        </div>
    }
}