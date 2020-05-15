import { Component } from 'react';
import config from './DomainName';
// import { conditionalExpression } from '@babel/types';
// var FormData = require('form-data');

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZW5kZXIiOnsiaWQiOiI1ZWJjZTlhMDI5ZWM4YTdlNmZkYTcxMDEifSwiaWF0IjoxNTg5NDM4OTA1LCJleHAiOjE1ODk3OTg5MDV9.Rdt79AGfPyrJVOQKURm_y_pWvRrbqjXBaPldoaBO5Cc";
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
    let result = await fetch(config.register + 'school/vender/' + id, {
      method: 'GET',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
    });
    return result.json();
  };

  static getPreSchoolDetails = async (id) => {
    let result = await fetch(config.register + 'preschool/vender/' + id, {
      method: 'GET',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
    });
    return result.json();
  };
  static getPlayAreaDetails = async (id) => {
    let result = await fetch(config.register + 'playarea/vender/' + id, {
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
  console.log(data);
  for (let key in data) {
    formData.append(key, data[key]);
  }
  console.log(formData);
  let result = await fetch(config.register + 'playarea', {
    method: 'POST',
    mode: 'cors',
    headers: { 'x-auth-token': token },
    body: formData,
  });
  console.log('Success');
  return result.json();
}

async function getAllPlayareas() {
  let result = await fetch(config.register + 'playarea', {
    method: 'GET',
    mode: 'cors',
    headers: { 'x-auth-token': token, 'Content-Type': 'application/json' },
  });
  return result.json();
}
async function addDance(data) {
  const formData = new FormData();
  console.log(data);
  for (let key in data) {
    formData.append(key, data[key]);
  }
  console.log(formData);
  let result = await fetch(config.register + 'dance', {
    method: 'POST',
    mode: 'cors',
    headers: { 'x-auth-token': token },
    body: formData,
  });
  console.log('Success');
  return result.json();
}
async function addMusic(data) {
  const formData = new FormData();
  console.log(data);
  for (let key in data) {
    formData.append(key, data[key]);
  }
  console.log(formData);
  let result = await fetch(config.register + 'music', {
    method: 'POST',
    mode: 'cors',
    headers: { 'x-auth-token': token },
    body: formData,
  });
  console.log('Success');
  return result.json();
}
async function addYoga(data) {
  const formData = new FormData();
  console.log(data);
  for (let key in data) {
    formData.append(key, data[key]);
  }
  console.log(formData);
  let result = await fetch(config.register + 'yoga', {
    method: 'POST',
    mode: 'cors',
    headers: { 'x-auth-token': token },
    body: formData,
  });
  console.log('Success');
  return result.json();
}
async function addDrawing(data) {
  const formData = new FormData();
  console.log(data);
  for (let key in data) {
    formData.append(key, data[key]);
  }
  console.log(formData);
  let result = await fetch(config.register + 'drawing', {
    method: 'POST',
    mode: 'cors',
    headers: { 'x-auth-token': token },
    body: formData,
  });
  console.log('Success');
  return result.json();
}


export { addPreschool, getAllPreSchools, addPlayArea, getAllPlayareas , addDance, addDrawing, addMusic,addYoga};

export default FetchCall;
