import React from "react";
// import Container from "../Container";

function Search(props) {
    return (
        <form onSubmit={props.formSubmit}>
            <div className="searchForm">
                <label>Search: </label>
                <input
                    name="search"
                    type="text"
                    placeholder="Search for an Employee"
                    id="search"
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default Search