import { Box, Button, Flex, Image, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react"
import { BsCartCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FetchMomAndBabyCarePageData } from "../FetchAPI/Fetch";

export default function MomAndBabyCarePage ( ){
    const [MBCData,setMBCData] = useState([ ]);

    const handleMBCData = ( ) =>{
        FetchMomAndBabyCarePageData( ).then((res)=>{
            setMBCData(res.data)
        })
    }

    useEffect(( )=>{
        handleMBCData( );
    },[ ]);
    return (
        <>
        <Box h={{base : '83px', md : '125px', lg : '180px'}}></Box>
         <SimpleGrid className="HairPageSimpleGrid" columns={[2,2,3]} w={{base : '100%', md : '90%'}} mt={{base : '5%', md :'3%'}} >
            {MBCData.map((elem)=>{
                return (
                    <Box key={elem.id} className="HairPageSimpleGridBox" w={{base : '95%', md : '90%'}} textAlign='center'  fontWeight={'550'} shadow='sm'>
                       <Link to={`/MomAndBabyCare/${elem.id}`}><Image w={{base : '150px', md :'200px'}} m='auto'  src={elem.image}/></Link>
                        <Link to={`/MomAndBabyCare/${elem.id}`}><Text  h={{base : '85px', md : '85px', lg : '40px'}} w={{base : '90%', md : '90%', lg : '80%'}} m='auto' fontSize={{base : '12px', md : '14px'}} color='RGBA(0, 0, 0, 0.48)'>{elem.title}</Text></Link>
                        
                        <Flex gap='10px' fontSize={{base : '12px',md : '14px'}} mt='10px' justifyContent='center'>
                            <Text color='gray' textDecoration='line-through'>{elem.offerPrice}</Text>
                            <Text color='#dd2985' >{elem.price}</Text>
                            <Text color='green'>{elem.off}</Text>
                        </Flex>

                        <Tooltip label="Add To Cart" aria-label='A tooltip'>
                                <Box  w={{base : '150px', md : '150px'}} m='auto'>  
                                    <Button bg='#dd0285' size='sm' colorScheme='none' fontSize='20px' className="AddToCartBtn"><BsCartCheck/></Button>
                                </Box>
                            </Tooltip>
                     </Box>
                )
            })}
        </SimpleGrid>
        </>
    )
}