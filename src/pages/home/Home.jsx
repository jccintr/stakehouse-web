import React, {useState, useEffect} from 'react'
import Header from '../../components/header/Header'
import { Flex,Text } from '@chakra-ui/react'
import Api from '../../Api'
import TableBackHome from '../../components/tables/TableBackHome'

const Home = () => {
  const [backHomeData,setBackHomeData] = useState([]);
  const [stake,setStake] = useState(100);

  useEffect(()=>{
    getTable();
   
 },[]);

 const getTable = async () => {
    let json = await Api.getBackHome(stake,1625);
    setBackHomeData(json);
}


  return (
    <Flex flexDirection={'column'} alignItems={'center'} bg={'gray.100'}>
      <Header/>
      
        <TableBackHome data={backHomeData}/>
      
      
    </Flex>
  )
}

export default Home