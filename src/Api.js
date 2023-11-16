
//const BASE_API = 'http://192.168.0.106:8000/api';
const BASE_API = 'https://rmr-api.js-software.tech/api';

const API_KEY = 'example';
export default {

    getBackHome: async (stake,season) => {
        const response = await fetch(`${BASE_API}/backHome`, {
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
    
   