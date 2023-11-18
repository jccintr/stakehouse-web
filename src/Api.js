
//const BASE_API = 'http://192.168.0.106:8000/api';
const BASE_API = 'https://rmr-api.js-software.tech/api';

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

    getBackHomeVisitante: async (stake,season) => {
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

    getBackDrawCasa: async (stake,season) => {
        const response = await fetch(`${BASE_API}/backDrawCasa`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },

    getBackDrawVisitante: async (stake,season) => {
        const response = await fetch(`${BASE_API}/backDrawVisitante`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },
    getBackAwayCasa: async (stake,season) => {
        const response = await fetch(`${BASE_API}/backAwayCasa`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },
    getBackAwayVisitante: async (stake,season) => {
        const response = await fetch(`${BASE_API}/backAwayVisitante`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },

    getBackOverCasa: async (stake,season,over) => {
        const response = await fetch(`${BASE_API}/backOverCasa`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season,over})
        });

        return response.json();
    },
    getBackOverVisitante: async (stake,season,over) => {
        const response = await fetch(`${BASE_API}/backOverVisitante`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season,over})
        });

        return response.json();
    },
    getBackUnderCasa: async (stake,season,under) => {
        const response = await fetch(`${BASE_API}/backUnderCasa`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season,under})
        });

        return response.json();
    },
    getBackUnderVisitante: async (stake,season,under) => {
        const response = await fetch(`${BASE_API}/backUnderVisitante`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season,under})
        });

        return response.json();
    },

   

   

   
    
    
  

 
   
    
  
   
};
    
   