import React from "react";

function Search() {
    return (
        <form>
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