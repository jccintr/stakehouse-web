import React, {useState, useEffect} from 'react'
import Header from '../../components/header/Header'
import { Flex,Text } from '@chakra-ui/react'
import Api from '../../Api'
import TableBackHome from '../../components/tables/TableBackHome'
import TableBackOver05 from '../../components/tables/TableBackOver05'
import TableBackOver25 from '../../components/tables/TableBackOver25'
import TableBackOver35 from '../../components/tables/TableBackOver35'
import TableBackOver45 from '../../components/tables/TableBackOver45'
import TableBackUnder05 from '../../components/tables/TableBackUnder05'
import TableBackUnder25 from '../../components/tables/TableBackUnder25'
import TableBackUnder35 from '../../components/tables/TableBackUnder35'
import TableBackUnder45 from '../../components/tables/TableBackUnder45'
import TableBackBTTX from '../../components/tables/TableBackBTTX'

const Home = () => {
  const [backHomeDataCasa,setBackHomeDataCasa] = useState([]);
  const [backHomeDataVisitante,setBackHomeDataVisitante] = useState([]);

  const [backDrawDataCasa,setBackDrawDataCasa] = useState([]);
  const [backDrawDataVisitante,setBackDrawDataVisitante] = useState([]);

  const [backAwayDataCasa,setBackAwayDataCasa] = useState([]);
  const [backAwayDataVisitante,setBackAwayDataVisitante] = useState([]);

  const [backOver05DataCasa,setBackOver05DataCasa] = useState([]);
  const [backOver05DataVisitante,setBackOver05DataVisitante] = useState([]);

  const [backOver15DataCasa,setBackOver15DataCasa] = useState([]);
  const [backOver15DataVisitante,setBackOver15DataVisitante] = useState([]);

  const [backOver25DataCasa,setBackOver25DataCasa] = useState([]);
  const [backOver25DataVisitante,setBackOver25DataVisitante] = useState([]);

  const [backOver35DataCasa,setBackOver35DataCasa] = useState([]);
  const [backOver35DataVisitante,setBackOver35DataVisitante] = useState([]);

  const [backOver45DataCasa,setBackOver45DataCasa] = useState([]);
  const [backOver45DataVisitante,setBackOver45DataVisitante] = useState([]);

  const [backUnder05DataCasa,setBackUnder05DataCasa] = useState([]);
  const [backUnder05DataVisitante,setBackUnder05DataVisitante] = useState([]);

  const [backUnder15DataCasa,setBackUnder15DataCasa] = useState([]);
  const [backUnder15DataVisitante,setBackUnder15DataVisitante] = useState([]);

  const [backUnder25DataCasa,setBackUnder25DataCasa] = useState([]);
  const [backUnder25DataVisitante,setBackUnder25DataVisitante] = useState([]);

  const [backUnder35DataCasa,setBackUnder35DataCasa] = useState([]);
  const [backUnder35DataVisitante,setBackUnder35DataVisitante] = useState([]);

  const [backUnder45DataCasa,setBackUnder45DataCasa] = useState([]);
  const [backUnder45DataVisitante,setBackUnder45DataVisitante] = useState([]);

  const [backBTTSDataCasa,setBackBTTSDataCasa] = useState([]);
  const [backBTTSDataVisitante,setBackBTTSDataVisitante] = useState([]);

  const [backBTTNDataCasa,setBackBTTNDataCasa] = useState([]);
  const [backBTTNDataVisitante,setBackBTTNDataVisitante] = useState([]);
 
  const [layHomeDataCasa,setLayHomeDataCasa] = useState([]);
  const [layHomeDataVisitante,setLayHomeDataVisitante] = useState([]);

  const [layDrawDataCasa,setLayDrawDataCasa] = useState([]);
  const [layDrawDataVisitante,setLayDrawDataVisitante] = useState([]);

  const [layAwayDataCasa,setLayAwayDataCasa] = useState([]);
  const [layAwayDataVisitante,setLayAwayDataVisitante] = useState([]);



 
  const [stake,setStake] = useState(100);

  useEffect(()=>{
    getBackHomeCasa();
    getBackHomeVisitante();
    getBackDrawCasa();
    getBackDrawVisitante();
    getBackAwayCasa();
    getBackAwayVisitante();
    
    getBackOverCasa(0.5);
    getBackOverVisitante(0.5);
    getBackOverCasa(1.5);
    getBackOverVisitante(1.5);
    getBackOverCasa(2.5);
    getBackOverVisitante(2.5);
    getBackOverCasa(3.5);
    getBackOverVisitante(3.5);
    getBackOverCasa(4.5);
    getBackOverVisitante(4.5);

    getBackUnderCasa(0.5);
    getBackUnderVisitante(0.5);
    getBackUnderCasa(1.5);
    getBackUnderVisitante(1.5);
    getBackUnderCasa(2.5);
    getBackUnderVisitante(2.5);
    getBackUnderCasa(3.5);
    getBackUnderVisitante(3.5);
    getBackUnderCasa(4.5);
    getBackUnderVisitante(4.5);

    getBackBTTNCasa();
    getBackBTTNVisitante();
    getBackBTTSCasa();
    getBackBTTSVisitante();

    getLayAwayCasa();
    getLayAwayVisitante();
    getLayDrawCasa();
    getLayDrawVisitante();
    getLayHomeCasa();
    getLayHomeVisitante();
 },[]);

 const getBackHomeCasa = async () => {
    let json = await Api.getBackHomeCasa(stake,1625);
    setBackHomeDataCasa(json);
}

const getBackHomeVisitante = async () => {
  let json = await Api.getBackHomeVisitante(stake,1625);
  setBackHomeDataVisitante(json);
}

const getBackDrawCasa = async () => {
  let json = await Api.getBackDrawCasa(stake,1625);
  setBackDrawDataCasa(json);
}

const getBackDrawVisitante = async () => {
  let json = await Api.getBackDrawVisitante(stake,1625);
  setBackDrawDataVisitante(json);
}

const getBackAwayCasa = async () => {
  let json = await Api.getBackAwayCasa(stake,1625);
  setBackAwayDataCasa(json);
}

const getBackAwayVisitante = async () => {
let json = await Api.getBackAwayVisitante(stake,1625);
setBackAwayDataVisitante(json);
}

const getBackOverCasa = async (over) => {
  let json = await Api.getBackOverCasa(stake,1625,over);
  if(over===0.5){
    setBackOver05DataCasa(json);
  }
  if(over===1.5){
    setBackOver15DataCasa(json);
  }
  if(over===2.5){
    setBackOver25DataCasa(json);
  }
  if(over===3.5){
    setBackOver35DataCasa(json);
  }
  if(over===4.5){
    setBackOver45DataCasa(json);
  }
  
}

const getBackOverVisitante = async (over) => {
  let json = await Api.getBackOverVisitante(stake,1625,over);
  if(over===0.5){
    setBackOver05DataVisitante(json);
  }
  if(over===1.5){
    setBackOver15DataVisitante(json);
  }
  if(over===2.5){
    setBackOver25DataVisitante(json);
  }
  if(over===3.5){
    setBackOver35DataVisitante(json);
  }
  if(over===4.5){
    setBackOver45DataVisitante(json);
  }

}

const getBackUnderCasa = async (under) => {
  let json = await Api.getBackUnderCasa(stake,1625,under);
  if(under===0.5){
    setBackUnder05DataCasa(json);
  }
  if(under===1.5){
    setBackUnder15DataCasa(json);
  }
  if(under===2.5){
    setBackUnder25DataCasa(json);
  }
  if(under===3.5){
    setBackUnder35DataCasa(json);
  }
  if(under===4.5){
    setBackUnder45DataCasa(json);
  }
  
}

const getBackUnderVisitante = async (under) => {
  let json = await Api.getBackUnderVisitante(stake,1625,under);
  if(under===0.5){
    setBackUnder05DataVisitante(json);
  }
  if(under===1.5){
    setBackUnder15DataVisitante(json);
  }
  if(under===2.5){
    setBackUnder25DataVisitante(json);
  }
  if(under===3.5){
    setBackUnder35DataVisitante(json);
  }
  if(under===4.5){
    setBackUnder45DataVisitante(json);
  }

}

const getBackBTTSCasa = async () => {
  let json = await Api.getBackBTTSCasa(stake,1625);
  setBackBTTSDataCasa(json);
}
const getBackBTTSVisitante = async () => {
  let json = await Api.getBackBTTSVisitante(stake,1625);
  setBackBTTSDataVisitante(json);
}

const getBackBTTNCasa = async () => {
  let json = await Api.getBackBTTNCasa(stake,1625);
  setBackBTTNDataCasa(json);
}
const getBackBTTNVisitante = async () => {
  let json = await Api.getBackBTTNVisitante(stake,1625);
  setBackBTTNDataVisitante(json);
}

const getLayHomeCasa = async () => {
  let json = await Api.getLayHomeCasa(stake,1625);
  setLayHomeDataCasa(json);
}

const getLayHomeVisitante = async () => {
let json = await Api.getLayHomeVisitante(stake,1625);
setLayHomeDataVisitante(json);
}

const getLayDrawCasa = async () => {
  let json = await Api.getLayDrawCasa(stake,1625);
  setLayDrawDataCasa(json);
}

const getLayDrawVisitante = async () => {
let json = await Api.getLayDrawVisitante(stake,1625);
setLayDrawDataVisitante(json);
}

const getLayAwayCasa = async () => {
  let json = await Api.getLayAwayCasa(stake,1625);
  setLayAwayDataCasa(json);
}

const getLayAwayVisitante = async () => {
let json = await Api.getLayAwayVisitante(stake,1625);
setLayAwayDataVisitante(json);
}




  return (
    <Flex flexDirection={'column'} alignItems={'center'} bg={'gray.100'}>
      <Header/>
      
        <TableBackHome title={'Back Home'} dataCasa={backHomeDataCasa} dataVisitante={backHomeDataVisitante}/>
        <TableBackHome title={'Back Draw'} dataCasa={backDrawDataCasa} dataVisitante={backDrawDataVisitante}/>
        <TableBackHome title={'Back Away'} dataCasa={backAwayDataCasa} dataVisitante={backAwayDataVisitante}/>

        <TableBackOver05 title={'Back Over 0.5 FT'} dataCasa={backOver05DataCasa} dataVisitante={backOver05DataVisitante}/>
        <TableBackOver05 title={'Back Over 1.5 FT'} dataCasa={backOver15DataCasa} dataVisitante={backOver15DataVisitante}/>
        <TableBackOver25 title={'Back Over 2.5 FT'} dataCasa={backOver25DataCasa} dataVisitante={backOver25DataVisitante}/>
        <TableBackOver35 title={'Back Over 3.5 FT'} dataCasa={backOver35DataCasa} dataVisitante={backOver35DataVisitante}/>
        <TableBackOver45 title={'Back Over 4.5 FT'} dataCasa={backOver45DataCasa} dataVisitante={backOver45DataVisitante}/>

        <TableBackUnder05 title={'Back Under 0.5 FT'} dataCasa={backUnder05DataCasa} dataVisitante={backUnder05DataVisitante}/>
        <TableBackUnder05 title={'Back Under 1.5 FT'} dataCasa={backUnder15DataCasa} dataVisitante={backUnder15DataVisitante}/>
        <TableBackUnder25 title={'Back Under 2.5 FT'} dataCasa={backUnder25DataCasa} dataVisitante={backUnder25DataVisitante}/>
        <TableBackUnder35 title={'Back Under 3.5 FT'} dataCasa={backUnder35DataCasa} dataVisitante={backUnder35DataVisitante}/>
        <TableBackUnder45 title={'Back Under 4.5 FT'} dataCasa={backUnder45DataCasa} dataVisitante={backUnder45DataVisitante}/>
       
        <TableBackBTTX title={'Back BTTS'} dataCasa={backBTTSDataCasa} dataVisitante={backBTTSDataVisitante}/>
        <TableBackBTTX title={'Back BTTN'} dataCasa={backBTTNDataCasa} dataVisitante={backBTTNDataVisitante}/>
      
        <TableBackHome title={'Lay Home'} dataCasa={layHomeDataCasa} dataVisitante={layHomeDataVisitante}/>
        <TableBackHome title={'Lay Draw'} dataCasa={layDrawDataCasa} dataVisitante={layDrawDataVisitante}/>
        <TableBackHome title={'Lay Away'} dataCasa={layAwayDataCasa} dataVisitante={layAwayDataVisitante}/>
      
    </Flex>
  )
}

export default Home