import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountryList extends Component {
    // constructor(props){
    // }

    handleClick = (e,country)=>{
        e.preventDefault();
        console.log("ClickeD",country);
        this.props.countrySelect(country);
    }

    render() {
        return (
            <div className="row">
            <Link to={`/country/${this.props.cca3}`} className="list-group-item list-group-item-action" >
                <div className="card" Style="width:100%">
                    <div className="card-body">
                        {this.props.flag}
                        {this.props.name}
                    </div>
                </div>
            </Link>
            </div>
            )
    }
}

export default CountryList;