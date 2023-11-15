import React from 'react'
import Header from '../../components/header/Header'
import { Flex,Text } from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
      <Header/>
      <Flex align={'center'} h={'100vh'} justify={'center'}>
        <Text>Conteúdo da Home Page</Text>
      </Flex>
      
    </div>
  )
}

export default Home