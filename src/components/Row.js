import React from "react";

function Row(){
    return (
        <div className="row">
            <div className="col s2">
                <p>Image</p>
            </div>

            <div className="col s3">
                <p>Name</p>
            </div>

            <div className="col s2">
                <p>Phone</p>
            </div>

            <div className="col s3">
                <p>Email</p>
            </div>

            <div className="col s2">
                <p>Date of Birth</p>
            </div>
        </div>
    )
}

export default Row