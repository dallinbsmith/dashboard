import React from "react";
import InvoicesComponent from "./Component";
import {Link} from "react-router-dom";

class InvoicesContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            invoices: []
        }
        this.genInvoices = this.genInvoices.bind(this);
        this.searchId = this.searchId.bind(this);
    }

    componentDidMount() {
        this.setState({
            invoices: [
                {
                    title: "Schedule Reminders",
                    price: "200",
                    _id: "p892345ra746"
                },
                {
                    title: "Email Templates",
                    price: "1200",
                    _id: "p892345ra756"
                },
                {
                    title: "Payment Pages",
                    price: "800",
                    _id: "p892345ra766"
                }
            ]
        });
    }

    genInvoices() {
        return this.state.invoices.map(invoice => {
            return <Link to={`/invoices/${invoice._id}`} key={invoice._id}>{invoice.title}</Link>
        });
    }

    searchId(id) {
        return this.state.invoices.find(invoice => {
            return id === invoice._id;
        });
    }

    render() {
        return (
            <div className="header-container">
                <div className="invoices"></div>
                <InvoicesComponent
                    genInvoices={this.genInvoices}
                    searchId={this.searchId}/>
            </div>
        )
    }
}

export default InvoicesContainer;
