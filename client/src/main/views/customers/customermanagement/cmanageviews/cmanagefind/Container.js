import React from "react";
import CManageFindComponent from "./Component";
import axios from "axios";

class CManageFindContainer extends React.Component {
    constructor() {
        super();
        this.state ={
            users:[]
        }
    }
    componentDidMount() {
    axios.get(`http://localhost:9010/users/`).then(response => {
        this.setState({users:response.data});
        console.log(response.data)
    }).catch(err => {
        console.log(err);
    });
}

    render() {
        return (
            <div>
                <CManageFindComponent
                    selectUserToEdit={this.props.selectUserToEdit}
                    users = {this.state.users}/>
            </div>
        )
    }
}

export default CManageFindContainer;
