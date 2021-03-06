import React, { Component } from 'react';
export default class Page1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
        };
        this.addCountryDetails = this.addCountryDetails.bind(this);
        this.showCountryDetails = this.showCountryDetails.bind(this);
        
        this.showMakeDetails = this.showMakeDetails.bind(this);
    }

    addCountryDetails = (e) =>
    {
        this.props.history.push('/addCountryDetails');
    }

    showCountryDetails = (e) =>
    {
        this.props.history.push('/showCountryDetails');
    }
    showMakeDetails = (e) =>
    {
        this.props.history.push('/showAllMake');
    }


    render() {
        return ( 
            <div>
                <div class="text-center">
                    <h3>Country Master Page</h3>
                    <br />
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-secondary" onClick = {this.addCountryDetails}>Add Country Details</button>
                        <button type="button" class="btn btn-secondary" onClick = {this.showCountryDetails}>Show All Country Details</button>
                        <button type="button" class="btn btn-secondary" onClick = {this.showMakeDetails}>Show Make Details</button>
                    </div>

                </div>

                
                <br>
                </br>
                <div class="text-center">

                </div>
            </div >
        )
    }
}
