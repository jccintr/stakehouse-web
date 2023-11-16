import React, {useState, useEffect} from 'react'
import Header from '../../components/header/Header'
import { Flex,Text } from '@chakra-ui/react'
import Api from '../../Api'

const Home = () => {
  const [backHomeData,setBackHomeData] = useState([]);
  const [matches,setMatches] = useState([])
  const [stake,setStake] = useState(100);

  useEffect(()=>{
    getTable();
   
 },[]);

 const getTable = async () => {
    let json = await Api.getBackHome(stake,1625);
    setBackHomeData(json);
}


  return (
    <Flex flexDirection={'column'} >
      <Header/>
      <Flex align={'center'} h={'100vh'} justify={'center'}>
        <Text>Encontradas {backHomeData.length} equipes.</Text>
      </Flex>
      
    </Flex>
  )
}

export default Home