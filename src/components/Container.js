import React from "react";
import Search from "./Search";
import Result from "./Result";

class Container extends React.Component {
    render(){
        return(
            <div>
                <Search />
                <Result />
            </div>
        );
    }
}

export default Container