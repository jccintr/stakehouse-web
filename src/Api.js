
const BASE_API = 'http://192.168.0.106:8000/api';
//const BASE_API = 'https://rmr-api.js-software.tech/api';

const API_KEY = 'example';
export default {

    getBackHomeCasa: async (stake,season) => {
        const response = await fetch(`${BASE_API}/backHomeCasa`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },

    getBackHome: async (stake,season) => {
        const response = await fetch(`${BASE_API}/backHomeVisitante`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },

   

   

   
    
    
  

 
   
    
  
   
};
    
   