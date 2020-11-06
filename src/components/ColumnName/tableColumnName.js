import React from "react";
import "./style.css";

function ColumnName(){
    return (
        <div className="columnNameStyle">
            <div className="row titleInfo center-align">
                <div className="col s2">
                    <h6>Image</h6>
                </div>

                <div className="col s3">
                    <h6>Name</h6>
                </div>

                <div className="col s2">
                    <h6>Phone</h6>
                </div>

                <div className="col s3">
                    <h6>Email</h6>
                </div>

                <div className="col s2">
                    <h6>Date of Birth</h6>
                </div>
            </div>
        </div>      
    )
}

export default ColumnName