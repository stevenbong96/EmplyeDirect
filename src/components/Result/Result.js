import React from "react";

function Result(props){
    return (
        <div>
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

            <div className="row">
                <div className="col s2">
                    {props.picture}
                </div>

                <div className="col s3">
                    {props.name}
                </div>

                <div className="col s2">
                    {props.phone}
                </div>

                <div className="col s3">
                    {props.email}
                </div>

                <div className="col s2">
                    {props.dob}
                </div>
            </div>
        </div>
        
    )
}

export default Result