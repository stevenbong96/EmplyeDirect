import React from "react";
import "./style.css";

function Result(props){
    return (
        <div className="resultStyle">
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

            <hr/> 

            <div className="row center-align">
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