import React from "react";

function ManageNavbar(props){
  return(
      <div className = "cmanage-box">
          <div onClick={e=>props.handleClick("overview")} className = "cmanage-import nav-overview-btn">OVERVIEW</div>
          <div onClick={e=>props.handleClick("finduser")} className = "cmanage-import nav-find-btn">FIND USER</div>
          <div onClick={e=>props.handleClick("communication")} className = "cmanage-import nav-communication-btn">NEW COMMUNICATION</div>
          <div onClick={e=>props.handleClick("invoice")}className = "cmanage-import nav-invoice-btn">NEW INVOICE</div>
      </div>
  )
}

export default ManageNavbar
