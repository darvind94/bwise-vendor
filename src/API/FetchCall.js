import { Component } from 'react';
// import { conditionalExpression } from '@babel/types';
var FormData = require('form-data');

var Url = require('./DomainName');

const API_KEY = 'bwise';

class FetchCall extends Component {

    static createSchool = async (data) => {
        
        delete data.errors;
        
        let result = await fetch(Url.default.register+'school', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'API-KEY': API_KEY,
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
            },
            body: JSON.stringify(data)
        });
        return result;
    }

    static getSchool = async (data) => {
        let result = await fetch(Url.default.register+'school', {
            method: 'GET',
            mode: 'cors',
            headers: {'Content-Type':'application/json'},
        });
        return result.json();
    }

    static getSchoolDetails = async (id) => {
        let result = await fetch(Url.default.register+'school/getInfo/'+id, {
            method: 'GET',
            mode: 'cors',
            headers: {'Content-Type':'application/json'},
        });
        return result.json();
    }


}

export default FetchCall;