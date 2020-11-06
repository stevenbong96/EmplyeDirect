import React from "react";
import "./style.css";

function Result(props){
    return (
        <div className="resultStyle">

            <hr/> 

            <div className="row center-align">
                <div className="col s2">
                    <img src={props.picture} alt="profilePic"/>
                </div>

                <div className="col s3">
                    <p>{props.firstName} {props.lastName}</p>
                </div>

                <div className="col s2">
                    <p>{props.phone}</p>
                </div>

                <div className="col s3">
                    <p>{props.email}</p>
                </div>

                <div className="col s2">
                    <p>{props.dob}</p>
                </div>
            </div>
        </div>
        
    )
}

export default Result