
// import axios from 'axios';
// import applyCaseMiddleware from 'axios-case-converter';


// const url = 'https://www.universal-tutorial.com/api/';
// const options = {
//     caseOptions: {
//       stripRegexp: /[^A-Z0-9]+/gi
//     }
//   }
// const client = applyCaseMiddleware(axios.create(),options);


// const commonService = {
    
//     getToken() {
//         return client.get(url+'getaccesstoken')
//             .then(res => {
//                 let headers = {
//                     "Authorization" : "Bearer " + res.data.auth_token,
//                     "Accept": "application/json"
//                 }
//                 return headers;
//             })
        
//     },

//     getCountries(header) {
//         return client.get(url+'countries/',{headers:header})
//             .then(res => {
//                 console.log("countries",);
//                 return res.data;
//             })
//     }
// }

// export default commonService;

