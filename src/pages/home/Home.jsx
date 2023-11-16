import React, {useState, useEffect} from 'react'
import Header from '../../components/header/Header'
import { Flex,Text } from '@chakra-ui/react'
import Api from '../../Api'

const Home = () => {
  const [teams,setTeams] = useState([]);
  const [matches,setMatches] = useState([])


  useEffect(()=>{
    getTeams();
   
 },[]);

 const getTeams = async () => {
    let json = await Api.getLeagueTeams();
    setTeams(json.data);
}


  return (
    <Flex flexDirection={'column'} >
      <Header/>
      <Flex align={'center'} h={'100vh'} justify={'center'}>
        <Text>Encontradas {teams.lenght} equipes.</Text>
      </Flex>
      
    </Flex>
  )
}

export default Home