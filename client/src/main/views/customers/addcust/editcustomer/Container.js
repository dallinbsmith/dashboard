import React from "react";
import EditCustomerComponent from "./Component";

class EditCustomerContainer extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <EditCustomerComponent
                    userToEdit = {this.props.userToEdit}/>
            </div>
        )
    }
}

export default EditCustomerContainer;
