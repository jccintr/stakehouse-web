import React, {useState, useEffect} from 'react'
import Header from '../../components/header/Header'
import { Flex,Text } from '@chakra-ui/react'
import Api from '../../Api'
import TableBackHome from '../../components/tables/TableBackHome'

const Home = () => {
  const [backHomeDataCasa,setBackHomeDataCasa] = useState([]);
  const [backHomeDataVisitante,setBackHomeDataVisitante] = useState([]);
  const [stake,setStake] = useState(100);

  useEffect(()=>{
    getTableCasa();
    getTableVisitante();
   
 },[]);

 const getTableCasa = async () => {
    let json = await Api.getBackHomeCasa(stake,1625);
    setBackHomeDataCasa(json);
}

const getTableVisitante = async () => {
  let json = await Api.getBackHome(stake,1625,false);
  setBackHomeDataVisitante(json);
}


  return (
    <Flex flexDirection={'column'} alignItems={'center'} bg={'gray.100'}>
      <Header/>
      
        <TableBackHome dataCasa={backHomeDataCasa} dataVisitante={backHomeDataVisitante}/>
      
      
    </Flex>
  )
}

export default Home