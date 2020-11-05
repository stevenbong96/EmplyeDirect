import React from "react";
import Search from "./Search/Search";
import Result from "./Result/Result";

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