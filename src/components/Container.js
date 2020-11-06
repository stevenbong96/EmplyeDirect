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
        this.loadEmployees();
    }

    loadEmployees = () =>{
        API.getAll()
        .then(res => {this.setState({result: res.data.results})})
        .then(res => {this.setState({allInfo: this.state.result})})
    }

    handleInputChange = event => {
        const { value } = event.target;
        this.setState({
            search: value
        })
    }

    formSubmit = event => {
        event.preventDefault();
        const filteredData = this.state.result.filter( query => query.name.first.includes(this.state.search))
        this.setState({ allInfo: filteredData})
        // API.getAll(this.state.search)
        //     .then(res => {this.setState({result:res.data.results})})
        //     // .then(res => console.log(res))
        //     .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Search handleInputChange={this.handleInputChange} formSubmit={this.formSubmit}/>
                <ColumnName />
                {this.state.allInfo.map(finalResult => {
                    return <Result key={finalResult.id} id={finalResult.id} picture={finalResult.picture.thumbnail} firstName={finalResult.name.first} lastName={finalResult.name.last} phone={finalResult.phone} email={finalResult.email} dob={finalResult.dob.date.replace(/T.*/, "")}/>
                })}
            </div>
        );
    }
}

export default Container