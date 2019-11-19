import React, { Component } from 'react'

export default class NavigationLink extends Component {

    render() {
        return <div className='nav-link'>{this.props.text}</div>
    }
}