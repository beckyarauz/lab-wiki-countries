import React from 'react';
import countries from '../countries.json';



const countryDetail = (props) => {
    const getCountry = (cca3) => {
        const theCountry = oneCountry => {
          return oneCountry.cca3 === cca3;
        } //filter to find the country
        return countries.find(theCountry)
      };
      
      const cca3 = props.match.params.cca3;
      const foundCountry = getCountry(cca3);
       
 
        return (
            <div>
                <div className="row container">
                    <h1> Country Name</h1>
                </div>
                <div className="dropdown-divider"></div>
                <div className="row">
                    <div className="col-3"><h4>Capital</h4></div>
                    <div className="col-9">{foundCountry.name.common}</div>
                </div>
                <div className="dropdown-divider"></div>
                <div className="row">
                    <div className="col-3"><h4>Area</h4></div>
                    <div className="col-9">{foundCountry.area}</div>
                </div>
                <div className="dropdown-divider"></div>
                <div className="row">
                    <div className="col-3"><h4>Borders</h4></div>
                    <div className="col-9">
                        <ul>
                        {
                            foundCountry.borders.map((border,idx)=>{
                                return <li key={idx}>{border}</li>
                            })
                        }
                        </ul>
                    </div>
                </div>
            </div>
                
            )
}

export default countryDetail;