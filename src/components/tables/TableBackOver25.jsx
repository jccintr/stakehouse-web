import React from 'react';
import DataTable from 'react-data-table-component';
import { Box,useColorModeValue,Heading,Text } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

const paginationComponentOptions = {
    rowsPerPageText: 'Registros por Página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
  };

const TableBackOver25 = ({dataCasa,dataVisitante,title}) => {


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
    
    const sortRoi = (rowA, rowB) => {
        const a = rowA.roi;
        const b = rowB.roi;
    
        if (a > b) {
            return 1;
        }
    
        if (b > a) {
            return -1;
        }
    
        return 0;
    };

    const sort35 = (rowA, rowB) => {
        const a = rowA.percentual_over_35;
        const b = rowB.percentual_over_35;
    
        if (a > b) {
            return 1;
        }
    
        if (b > a) {
            return -1;
        }
    
        return 0;
    };

    const sort15 = (rowA, rowB) => {
        const a = rowA.percentual_over_15;
        const b = rowB.percentual_over_15;
    
        if (a > b) {
            return 1;
        }
    
        if (b > a) {
            return -1;
        }
    
        return 0;
    };

    const sort25 = (rowA, rowB) => {
        const a = rowA.percentual_over_25;
        const b = rowB.percentual_over_25;
    
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
            name: '+1.5FT',
            selector: row => row.percentual_over_15+'%',
            center: true,
            width:'100px',
            hide: 'sm',
            sortable: true,
            sortFunction: sort15,
        },
        {
            name: '+2.5FT',
            selector: row => row.percentual_over_25+'%',
            width:'100px',
            center: true,
            hide: 'sm',
            sortable: true,
            sortFunction: sort25,
        },
        {
            name: '+3.5FT',
            selector: row => row.percentual_over_35+'%',
            width:'100px',
            center: true,
            hide: 'sm',
            sortable: true,
            sortFunction: sort35,
        },
        {
            name: 'Lucro',
            selector: row => row.lucro.toFixed(2) ,
            width:'100px',
            right: true,
            sortable: true,
            sortFunction: sortLucro,
            conditionalCellStyles: [
                {
                    when: row => row.lucro < 0,
                    style: {
                        color: 'rgba(240, 0, 0, 0.9)',
                    },
                }]
        },
        {
            name: 'ROI',
            selector: row => row.roi+'%',
            width:'100px',
            right: true,
            sortable: true,
            hide: 'sm',
            sortFunction: sortLucro,
            conditionalCellStyles: [
                {
                    when: row => row.roi < 0,
                    style: {
                        color: 'rgba(240, 0, 0, 0.9)',
                    },
                }]
           
        },
      
    
    ];
     

  return (
    <Box w={['350px','1200px']} rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={['none','lg']} p={[1,8]} m={[1,2]}>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
             <AccordionButton>
                <AccordionIcon fontSize={'24px'}/>
                <Text>{title}</Text>
             </AccordionButton>
             <AccordionPanel pb={4}>
             <Tabs>
            <TabList>
                <Tab>Casa</Tab>
                <Tab>Visitante</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <DataTable
                        columns={columns}
                        data={dataCasa}
                        highlightOnHover
                        noDataComponent="Carregando registros."
                        customStyles={customStyles}
                        pagination
                        paginationComponentOptions={paginationComponentOptions}
                    />
                </TabPanel>
                <TabPanel>
                     <DataTable
                        columns={columns}
                        data={dataVisitante}
                        highlightOnHover
                        noDataComponent="Carregando registros."
                        customStyles={customStyles}
                        pagination
                        paginationComponentOptions={paginationComponentOptions}
                     />
                </TabPanel>
            </TabPanels>
        </Tabs>
             </AccordionPanel>
          </AccordionItem>
        </Accordion>
    
      
        

    </Box>
  )
}

export default TableBackOver25