import React from "react";

function Invoice(props) {
    console.log(props);

    const info = props.searchId(props.match.params.id);
    return (
        <div>
            <h1>{info.title}</h1>
            <p>{info.price}</p>
        </div>
    )
}

export default Invoice;
