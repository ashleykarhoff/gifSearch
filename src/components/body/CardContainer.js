import React, { Component } from 'react'
import Card from './Card'

export default class CardContainer extends Component {
    render() {
        return <div className='container'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    }
}