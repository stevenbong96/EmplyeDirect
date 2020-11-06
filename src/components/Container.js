import React from "react";
import Search from "./Search/Search";
import Result from "./Result/Result";
import ColumnName from "./ColumnName/tableColumnName";
import API from "../utils/API";

class Container extends React.Component {
    state = {
        search: "",
        allInfo: [],
        result: []
    }

    componentDidMount() {
        API.getAll()
        .then(res => console.log(res))
        // .then(res => {this.setState({allInfo: res.data.results})})
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    formSubmit = event => {
        event.preventDefault();
        API.getAll(this.state.search)
            .then(res => {this.setState({result:res.data.results})})
            // .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Search handleInputChange={this.handleInputChange} formSubmit={this.formSubmit}/>
                <ColumnName />
                {this.state.result.map(finalResult => {
                    return <Result picture={finalResult.picture.thumbnail} firstName={finalResult.name.first} lastName={finalResult.name.last} phone={finalResult.phone} email={finalResult.email} dob={finalResult.dob.date}/>
                })}
            </div>
        );
    }
}

export default Container