import React from "react";


function EditCustomerComponent(props) {
    return (
      <div className = "customer-import1">
        <div className = "navbar-man-import-highlight edit-customer-highlight"><hr className = "navbar-icon-hightlight"></hr><hr className = "navbar-icon-lowlight"></hr><div className ="icon-hightlight-pointer"></div></div>
        <div className = "edit-customer-separation-div1">
          <h1 className = "man-import-header">USER INFORMATION</h1>
          <div className = "cust-import-hr1"></div>
          <h6 className = "edit-customer-title-h6 edit-cust-customer">USER</h6>
            <div className = "edit-customer-customer-div">
              <h6 className = "edit-customer-subtitle-h6 ec-name">NAME</h6>
              <h4 className = "ec-content-h4 ecc-name">{props.userToEdit.firstname}</h4>
              <h6 className = "edit-customer-subtitle-h6 ec-address">ADDRESS</h6>
              <h4 className = "ec-content-h4 ecc-address-st">{props.userToEdit.lastname}</h4>
              <h4 className = "ec-content-h4 ecc-address-city">COLUMBUS, OH 20192</h4>
              <h6 className = "edit-customer-subtitle-h6 ec-email">EMAIL</h6>
              <h4 className = "ec-content-h4 ecc-email">{props.userToEdit.email}</h4>
              <h6 className = "edit-customer-subtitle-h6 ec-phone">PHONE</h6>
              <h4 className = "ec-content-h4 ecc-phone">{props.userToEdit.phone}</h4>
            </div>
          <h6 className = "edit-customer-title-h6 edit-cust-additional">ADDITIONAL INFO</h6>
          <div className = "edit-customer-additional-div">
            <h6 className = "edit-customer-subtitle-h6 ec-groups">GROUPS</h6>
            <h4 className = "ec-content-h4 ecc-groups">LOST BOYS</h4>
              <h6 className = "edit-customer-subtitle-h6 ec-source">SOURCE</h6>
              <h4 className = "ec-content-h4 ecc-source">IMPORT 02.16.18</h4>
          </div>
        </div>
          <div className = "edit-customer-separation-div2">
          <div className = "cust-import-hr1"></div>
          <h6 className = "edit-customer-title-h6 edit-cust-customer">SCHEDULE</h6>
          <div className = "edit-customer-schedule-div">
            <h6 className = "edit-customer-subtitle-h6 ec-schedule">CURRENT SCHEDULE</h6>
            <h4 className = "ec-content-h4 ecc-schedule">WEEKLY</h4>
            <h6 className = "edit-customer-subtitle-h6 ec-invoice">NEXT INVOICE</h6>
            <h4 className = "ec-content-h4 ecc-invoice">03.21.18</h4>
          </div>
          <h6 className = "edit-customer-title-h6 edit-cust-accounts">ACCOUNTS</h6>
          <div className = "edit-customer-accounts-div">
            <h6 className = "edit-customer-subtitle-h6 ec-primaryacc">PRIMARY ACCOUNT</h6>
            <h4 className = "ec-content-h4 ecc-primaryacc">VISA  XXXXX 6794</h4>
            <h6 className = "edit-customer-subtitle-h6 ec-secondaryacc">SECONDARY ACCOUNT</h6>
            <h4 className = "ec-content-h4 ecc-secondaryacc">BANK OF AMERICA XXXXX 6666</h4>
          </div>
          <button  className = "edit-customer-submit">EDIT INFORMATION</button>
      </div>
    </div>
    )
}

export default EditCustomerComponent;
