import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import countries from './countries.json';

import Navbar from './components/Navbar';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      currrentCountry:'',
    }
  }

  handleSelection = (country) => {
    console.log("selected!", country);
    this.setState({
      currrentCountry: country,
    })
  }


  render() {
    return (
      <div className="App">
        <Navbar/>
        
        <div className="container">
          <div className="row">
          
            <div className="col-4 countries">
            
            {
              countries.map((country,idx) => {
                return <CountryList key={idx} name={country.name.common} flag={country.flag} countrySelect={this.handleSelection} cca3={country.cca3}/>
              })
            }
            </div>
            <div className="col-8 details">
            <Switch>
              <Route exact path='/country/:cca3' component={CountryDetail}/>
            </Switch>

            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
