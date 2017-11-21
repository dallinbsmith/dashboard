import React from "react";

function CustomerNavbar(props){
    let editButton = null
    if (props.allowEdit){
        editButton = <div onClick={e=>props.handleClick("edit")} className = "cust-import edit-customer">EDIT USER</div>
    }else{
        editButton = <div className = "cust-import edit-customer-disabled">EDIT USER</div>
    }
  return(
      <div className = "dashboard-box">
          {editButton}
          <div onClick={e=>props.handleClick("manual")} className = "cust-import manual">MANUAL IMPORT</div>
          <div onClick={e=>props.handleClick("mass")} className = "cust-import mass">MASS IMPORT</div>
    </div>
  )
}

export default CustomerNavbar
