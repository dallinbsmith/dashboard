import React from "react";
import AddManual from "./addcust/manualimport/Container"
import ImportGroup from "./addcust/groupimport/Container"
import EditCustomer from "./addcust/editcustomer/Container"

function CustomersComponent(props) {
    let view;
    if (props.view === "manual") {
        view = <AddManual/>
    } else if (props.view === "mass") {
        view = <ImportGroup/>
    } else if (props.view === "edit") {
        view = <EditCustomer
            userToEdit = {props.userToEdit}/>
    }
    return (
        <div className="customer-import">
            <div className="navbar-gray-back"></div>
            <div className="edit-customer-icon"></div>
            <div className="manual-import-icon"></div>
            <div className="mass-import-icon"></div>
            {view}
        </div>
    )
}

export default CustomersComponent;
