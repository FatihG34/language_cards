import React, { Component } from 'react'

class Cards extends Component {
    constructor(props) {
        super(props)

        this.state = {
            course: "Data Science"
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ course: "Full Stack" })
        }, 1000);
    }
    render() {
        return (
            <h1>{this.state.course}</h1>
        )
    }
}

export default Cards