import React from "react";

function CManageFindComponent(props) {
    const mapped = props.users.sort((a, b) => a.lastname.localeCompare(b.lastname)).slice(0, 3).map(user => {
        return (
            <tr className="cmanage-table-tr" key={user._id}>
                <th>{user.firstname}</th>
                <th>{user.lastname}</th>
                <th>{user.city}</th>
                <th>{user.state}</th>
                <th>{user.email}</th>
                <th>{user.phone}</th>
                <th>{user.schedule}</th>
                <th>{user.nextscheduledinvoice}</th>
                <th>
                    <button className = "select-user-btn" onClick= {e=>props.selectUserToEdit(user)}>SELECT USER</button>
                </th>
            </tr>
        )
    })

    return (
        <div>
            <div className="cmanage-navbar-highlight find-highlight">
                <hr className="cmanage-icon-hightlight"></hr>
                <hr className="cmanage-icon-lowlight"></hr>
                <div className="cmanage-hightlight-pointer"></div>
            </div>
            <div className="customer-import1">
                <div className="cmanage-tophalf-div">
                    <h2 className="cmanage-header cmanage-communication-header">USER</h2>
                    <div className="cmanage-hr-div cmanage-top-hr-div"></div>
                    <div className="cmanage-table-div">
                        <table className="cmanage-table cm-table-top">
                            <tbody>
                                <tr className="cmanage-table-tr cmanage-table-hidden">
                                    <th className="cmanage-hidden-row">FIRST</th>
                                    <th className="cmanage-hidden-row">LAST</th>
                                    <th className="cmanage-hidden-row">CITY</th>
                                    <th className="cmanage-hidden-row">STATE</th>
                                    <th className="cmanage-hidden-row">EMAIL</th>
                                    <th className="cmanage-hidden-row">PHONE</th>
                                    <th className="cmanage-hidden-row">SCHEDULE</th>
                                    <th className="cmanage-hidden-row">NEXT INVOICE</th>
                                </tr>
                                {mapped}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="cmanage-bottomhalf-div">
                    <h2 className="cmanage-header cmanage-communication-header">INVOICES</h2>
                    <div className="cmanage-hr-div cmanage-top-hr-div"></div>
                    <div className="cmanage-table-div">
                        <table className="cmanage-table cm-table-top">
                            <tbody>
                                <tr className="cmanage-table-tr cmanage-table-hidden">
                                    <th className="cmanage-hidden-row">MESSAGE</th>
                                    <th className="cmanage-hidden-row">TYPE</th>
                                    <th className="cmanage-hidden-row">DATE</th>
                                    <th className="cmanage-hidden-row">RECEIVED</th>
                                    <th className="cmanage-hidden-row">RESPONSE</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CManageFindComponent;
