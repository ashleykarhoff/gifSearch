import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

export default class Navigation extends Component {

    state = {
        query: ''
    }

    handleNavClick = e => {
        e.persist();

        const query = e.target.innerText;
        getGifs(query);
    }

    handleChange = e => {
        this.setState({
            query: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        e.persist();

        const query = this.state.query;
        getGifs(query);
    }

    render() {
        return <Navbar bg="light" expand="lg" >
            <Navbar.Brand href="#home">gifSearch</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={this.handleNavClick} href="#home">Trending</Nav.Link>
                    <Nav.Link onClick={this.handleNavClick} href="#link">Random</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" value={this.state.query} onChange={this.handleChange} placeholder="Search" className="mr-sm-2" />
                    <Button onClick={this.handleSubmit} variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    }
}

function getGifs(query) {
    const API_KEY = 'YYn7r0vN21Fi7fTuGAda2vqBctOZZ2xD'

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=25&offset=0&rating=G&lang=en`)
        .then(resp => resp.json())
        .then(console.log)
}