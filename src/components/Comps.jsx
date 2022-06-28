import React, { Component } from 'react'

class Comps extends Component {
    constructor(props) {
        super(props);
        this.state = { favoritecourse: "Data Science" };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecourse: "Full-Stack" });
        }, 1000);
    }
    componentDidUpdate() {
        document.getElementById("mydiv").innerHTML =
            "The updated favorite is " + this.state.favoritecourse;
    }
    render() {
        return (
            <div>
                <h1>My Favorite Course is {this.state.favoritecourse}</h1>
                <div id="mydiv"></div>
            </div>
        )
    }
}

export default Comps;