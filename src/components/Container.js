import React from "react";
import Search from "./Search/Search";
import Result from "./Result/Result";
import API from "../utils/API";

class Container extends React.Component {
    state = {
        search: "",
        result: []
    }

    componentDidMount() {
        API.searchInfo()
            .then(res => console.log(res))
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    formSubmit = event => {
        event.preventDefault();
        API.searchInfo(this.state.search)
            .then(res => this.setState({result:res.data.results}))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Search handleInputChange={this.handleInputChange} formSubmit={this.formSubmit}/>
                <Result />
            </div>
        );
    }
}

export default Container