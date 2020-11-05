import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Search from "./Search";

class Container extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <Header />
                <Search />
            </div>
        );
    }
}

export default Container