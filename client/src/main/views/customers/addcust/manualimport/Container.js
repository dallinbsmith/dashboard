import React from "react";
import ManualImportComponent from "./Component";
import axios from "axios";

class ManualImportContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:9010/users/`).then(response => {
            this.setState(response.data);
        }).catch(err => {
            console.log(err);
        });
    }

    handleChange(event) {
        event.persist();
        const name = event.target.name;
        const newValue = event.target.value;
        this.setState((prevState) => {
            return ({
                ...prevState,
                [name]: newValue
            });
        });
        console.log(this.state);
    }
    handleSubmit(event) {
        event.preventDefault()
        axios.post(`http://localhost:9010/users/`, this.state).then(response => {
            this.setState({
                user: {}
            });
            console.log(this.state);
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return <ManualImportComponent input={this.state.user} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    }
}

export default ManualImportContainer;
