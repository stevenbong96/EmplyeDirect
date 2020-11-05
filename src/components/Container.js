import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Search from "./Search";
import Row from "./Row";

class Container extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <Header />
                <Search />
                <Row />
            </div>
        );
    }
}

export default Container