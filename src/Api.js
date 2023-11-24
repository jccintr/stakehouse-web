
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
    getBackBTTSCasa: async (stake,season) => {
        const response = await fetch(`${BASE_API}/backBTTSCasa`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },
    getBackBTTSVisitante: async (stake,season) => {
        const response = await fetch(`${BASE_API}/backBTTSVisitante`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },
    getBackBTTNCasa: async (stake,season) => {
        const response = await fetch(`${BASE_API}/backBTTNCasa`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },
    getBackBTTNVisitante: async (stake,season) => {
        const response = await fetch(`${BASE_API}/backBTTNVisitante`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },
    getLayHomeCasa: async (stake,season) => {
        const response = await fetch(`${BASE_API}/layHomeCasa`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },

    getLayHomeVisitante: async (stake,season) => {
        const response = await fetch(`${BASE_API}/layHomeVisitante`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },
    getLayDrawCasa: async (stake,season) => {
        const response = await fetch(`${BASE_API}/layDrawCasa`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },

    getLayDrawVisitante: async (stake,season) => {
        const response = await fetch(`${BASE_API}/layDrawVisitante`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },
    getLayAwayCasa: async (stake,season) => {
        const response = await fetch(`${BASE_API}/layAwayCasa`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },

    getLayAwayVisitante: async (stake,season) => {
        const response = await fetch(`${BASE_API}/layAwayVisitante`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },

    getDoubleChance1xCasa: async (stake,season) => {
        const response = await fetch(`${BASE_API}/doubleChance1xCasa`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },

    getDoubleChance1xVisitante: async (stake,season) => {
        const response = await fetch(`${BASE_API}/doubleChance1xVisitante`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },

    getDoubleChance12Casa: async (stake,season) => {
        const response = await fetch(`${BASE_API}/doubleChance12Casa`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },

    getDoubleChance12Visitante: async (stake,season) => {
        const response = await fetch(`${BASE_API}/doubleChance12Visitante`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },

    getDoubleChancex2Casa: async (stake,season) => {
        const response = await fetch(`${BASE_API}/doubleChancex2Casa`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },

    getDoubleChancex2Visitante: async (stake,season) => {
        const response = await fetch(`${BASE_API}/doubleChancex2Visitante`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },

    // ==============================
    getLeagueBackHomeCasa: async (stake,season) => {
        const response = await fetch(`${BASE_API}/leagueBackHomeCasa`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },

    getLeagueBackHomeVisitante: async (stake,season) => {
        const response = await fetch(`${BASE_API}/leagueBackHomeVisitante`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },

    getLeagueBackDrawCasa: async (stake,season) => {
        const response = await fetch(`${BASE_API}/leagueBackDrawCasa`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },

    getLeagueBackDrawVisitante: async (stake,season) => {
        const response = await fetch(`${BASE_API}/leagueBackDrawVisitante`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },
    getLeagueBackAwayCasa: async (stake,season) => {
        const response = await fetch(`${BASE_API}/leagueBackAwayCasa`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({stake, season})
        });

        return response.json();
    },
    getLeagueBackAwayVisitante: async (stake,season) => {
        const response = await fetch(`${BASE_API}/leagueBackAwayVisitante`, {
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
    
   