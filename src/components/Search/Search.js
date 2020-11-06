import React from "react";
// import Container from "../Container";
import "./style.css";

function Search(props) {
    return (
        <form onSubmit={props.formSubmit}>
            <nav className="searchStyle">
                <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                            <input id="search" type="search" required />
                                <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                                <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>

            <button className="searchButton" type="submit">Submit</button>
        </form>
    );
}

export default Search