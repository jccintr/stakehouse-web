
const BASE_API = 'https://api.football-data-api.com';
const API_KEY = 'example';
export default {

    getLeagueTeams: async () => {
        const response = await fetch(`${BASE_API}/league-teams?key=${API_KEY}&season_id=1625&include=stats`, {
            mode:'cors',
            method: 'GET',
            headers: {
                Accept: 'application/json'
            },
        });

        return response.json();
    },

    getLeagueMatches: async () => {
        const response = await fetch(`${BASE_API}/league-matches?key=${API_KEY}&league_id=1625`, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            },
        });

        return response.json();
    },

    getLeagueTable: async () => {
        const response = await fetch(`${BASE_API}/league-tables?key=${API_KEY}&league_id=1625`, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            },
        });

        return response.json();
    },
    
    
  

 
   
    
  
   
};
    
   