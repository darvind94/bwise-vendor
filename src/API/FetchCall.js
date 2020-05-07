import { Component } from 'react';
import config from './DomainName';
// import { conditionalExpression } from '@babel/types';
// var FormData = require('form-data');

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZW5kZXIiOnsiaWQiOiI1ZWFhOWM2MjI4NTcxYjFiZDAxMDc0OTcifSwiaWF0IjoxNTg4NTg3NDMwLCJleHAiOjE1ODg5NDc0MzB9.gkKX8V7RNl_bEH8dme04b-tyXn8HGPSf1Z0HTwE53dk';

class FetchCall extends Component {
  static createSchool = async (data) => {
    delete data.errors;

    let result = await fetch(config.register + 'school', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'x-auth-token': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log('Api res', result);
    return result;
  };

  static getSchool = async (data) => {
    let result = await fetch(config.register + 'school', {
      method: 'GET',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
    });
    return result.json();
  };

  static getSchoolDetails = async (id) => {
    let result = await fetch(config.register + 'school/getInfo/' + id, {
      method: 'GET',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
    });
    return result.json();
  };
}

async function addPreschool(data) {
  let result = await fetch(config.register + 'preschool', {
    method: 'POST',
    mode: 'cors',
    headers: { 'x-auth-token': token, 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return result.json();
}

async function getAllPreSchools() {
  let result = await fetch(config.register + 'preschool', {
    method: 'GET',
    mode: 'cors',
    headers: { 'x-auth-token': token, 'Content-Type': 'application/json' },
  });
  return result.json();
}

async function addPlayArea(data) {
  const formData = new FormData();

  for (let key in data) {
    formData.append(key, data[key]);
  }

  let result = await fetch(config.register + 'playarea', {
    method: 'POST',
    mode: 'cors',
    headers: { 'x-auth-token': token },
    body: formData,
  });
  console.log('Sucess');
  return result.json();
}

export { addPreschool, getAllPreSchools, addPlayArea };

export default FetchCall;
