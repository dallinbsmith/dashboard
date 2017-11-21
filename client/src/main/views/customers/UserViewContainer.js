import React from "react";
import CustomersComponent from "./Component"
import CustNavbar from "./CustNavbar"

class UserViewContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            view: "manual"
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userToEdit !== null) {
            this.setState({
                view: "edit"
            })
        }
    }

    handleClick(newview){
        this.setState({
            view: newview
        })
    }
    render(){
        return(
            <div>
                <CustomersComponent
                    userToEdit = {this.props.userToEdit}
                    view = {this.state.view}/>
                <CustNavbar
                    allowEdit = {this.props.userToEdit?true:false}
                    handleClick = {this.handleClick}
                    className = "add-cust-nav-bar"/>
            </div>
        )
    }
}

export default UserViewContainer
