import React from "react";

function Dashboard() {
    return (
        <div>
            <div className="home">
                <div className= "top-half-graphs">
                    <div className ="autopay-graph">
                      <div className = "autopay-graph-image"></div>
                    </div>
                    <div className ="billing-graph">
                      <div className = "billing-graph-image"></div>
                    </div>
                    <div className ="users-graph">
                      <div className = "users-graph-image"></div>
                    </div>
                </div>
                <div className= "bottom-half-graphs">
                  <div className = "graph-total-rev"></div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
