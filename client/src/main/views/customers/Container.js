import React from "react";
import UserViewContainer from "./UserViewContainer"
import ManageViewContainer from "./customermanagement/ManageViewContainer"

class CustomersContainer extends React.Component {
    constructor() {
        super();
        this.state ={
            userToEdit: null
        }
        this.selectUserToEdit = this.selectUserToEdit.bind(this);
    }
    selectUserToEdit(newUser){
        this.setState({
            userToEdit: newUser

        })
        console.log(newUser)
    }

    render() {
        return (
            <div>
                <UserViewContainer
                    userToEdit = {this.state.userToEdit}/>
                <ManageViewContainer
                    selectUserToEdit = {this.selectUserToEdit}/>
            </div>
        )
    }
}

export default CustomersContainer;
