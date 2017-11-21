import React from "react";
import ManageCustomersComponent from "./Component"
import ManageNavBar from "./ManageNavbar"

class ManageViewContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            view: "overview"
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(newview){
        this.setState({
            view: newview
        })
    }
    render(){
        return(
            <div>
                <ManageCustomersComponent
                    selectUserToEdit = {this.props.selectUserToEdit}
                    view = {this.state.view}/>
                <ManageNavBar
                    handleClick = {this.handleClick}
                    className = "cust-manage-bar"/>
            </div>
        )
    }
}

export default ManageViewContainer
