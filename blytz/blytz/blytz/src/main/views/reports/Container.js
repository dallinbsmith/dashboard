import React from "react";
import ReportsComponent from "./Component";
import {Link} from "react-router-dom";

class ReportsContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            reports: []
        }
        this.genReports = this.genReports.bind(this);
        this.searchId = this.searchId.bind(this);
    }

    componentDidMount() {
        this.setState({
            reports: [
                {
                    title: "Content Creation",
                    price: "200",
                    _id: "p892345ra746"
                },
                {
                    title: "Web Design",
                    price: "1200",
                    _id: "p892345ra756"
                },
                {
                    title: "Social Media Marketing",
                    price: "800",
                    _id: "p892345ra766"
                }
            ]
        });
    }

    genReports() {
        return this.state.reports.map(report => {
            return <Link to={`/reports/${report._id}`} key={report._id}>{report.title}</Link>
        });
    }

    searchId(id) {
        return this.state.reports.find(report => {
            return id === report._id;
        });
    }

    render() {
        return (
            <div className="header-container">
                <div className="reports"></div>
                <ReportsComponent
                    genReports={this.genReports}
                    searchId={this.searchId}/>
            </div>
        )
    }
}

export default ReportsContainer;
