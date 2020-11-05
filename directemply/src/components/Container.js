import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";

class Container extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <Header />
            </div>
        );
    }
}

export default Container