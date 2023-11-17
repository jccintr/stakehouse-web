import React from 'react';
import DataTable from 'react-data-table-component';
import { Box,useColorModeValue,Heading,Text } from '@chakra-ui/react';

const TableBackHome = ({data}) => {


    const customStyles = {
   
        headCells: {
          style: {
            color: '#000000',
            fontSize: '12px',
            fontWeight: 'bold',
            
          },
        },
       
      };


    const sortEquipes = (rowA, rowB) => {
        const a = rowA.equipe.toLowerCase();
        const b = rowB.equipe.toLowerCase();
    
        if (a > b) {
            return 1;
        }
    
        if (b > a) {
            return -1;
        }
    
        return 0;
    };

    const sortLucro = (rowA, rowB) => {
        const a = rowA.lucro;
        const b = rowB.lucro;
    
        if (a > b) {
            return 1;
        }
    
        if (b > a) {
            return -1;
        }
    
        return 0;
    };
    
   
    const columns = [
        {
            name: 'Temporada',
            selector: row => row.temporada,
            hide: 'sm',
        },
        {
            name: 'País',
            selector: row => row.pais,
            hide: 'sm',
        },
       
        {
          name: 'Time',
          hide: 'sm',
          cell: row => <><img style={{width:20,height:20,marginRight:5}} src={`${row.imagem}`} /><Text>{row.equipe}</Text></>,
          sortable: true,
          sortFunction: sortEquipes
        },
       
        {
            name: 'Partidas',
            
            center: true,
            selector: row => row.partidas,
            hide: 'sm',
           
        },
        {
            name: 'Vitórias',
            selector: row => row.vitorias,
            center: true,
            width:'100px',
            hide: 'sm',
        },
        {
            name: 'Empates',
            selector: row => row.empates,
            width:'100px',
            center: true,
            hide: 'sm',
        },
        {
            name: 'Derrotas',
            selector: row => row.derrotas,
            width:'100px',
            center: true,
            hide: 'sm',
        },
        {
            name: 'Lucro',
            selector: row => row.lucro.toFixed(2) ,
            width:'100px',
            right: true,
            sortable: true,
            sortFunction: sortLucro
        },
        {
            name: 'ROI',
            selector: row => row.roi+'%',
            width:'100px',
            right: true,
            sortable: true,
            sortFunction: sortLucro
           
        },
      
    
    ];
     

  return (
    <Box w={['350px','1200px']} rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={['none','lg']} p={[0,8]} m={[2,2]}>
     <Text>Back Home</Text>
        <DataTable
            columns={columns}
            data={data}
            highlightOnHover
            noDataComponent="Carregando registros."
            customStyles={customStyles}
        />

    </Box>
  )
}

export default TableBackHome