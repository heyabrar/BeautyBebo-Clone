import { Box, Button, Image, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react"
import { BsCartCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FetchFragranceTab } from "../FetchAPI/Fetch";

export default function FragranceTab ( ){

    const [FragranceData,SetFragranceData] = useState([ ]);

    const handleFragranceData = ( ) =>{
        FetchFragranceTab( ).then((res)=>{
           SetFragranceData(res.data)
        })
    }

    useEffect(( )=>{
        handleFragranceData( );
    },[ ]);
    return (
        <>
        <SimpleGrid columns={[2,2,4]}>
            {FragranceData.map((elem)=>{
                return (
                    <Link className="Link" key={elem.id}>
                    <Box   h={{base : '250px', md : '260px' , lg  :'380px'}} w='90%' m='auto' gap='10px'  textAlign={'center'}>
                       <Image boxSize={{base : '120px', md : '130px', lg : '220px'}} m='auto' src={elem.image}/>
                       <Text fontSize={{base : '12px', md : '12px', lg : '16px'}} h={{base : '50px', md : '60px', lg : '70px'}}>{elem.title}</Text>
                     <Box className="Price_Offer_Div"> 
                      <Text fontSize={{base : '10px', md : '10px', lg : '12px'}} className='SliderDataofferPrice'>{elem.offerPrice}</Text>
                      <Text fontSize={{base : '12px', md : '12px', lg : '16px'}} className='SliderDataPrice'>{'₹' + elem.price}</Text>
                      <Text fontSize={{base : '12px', md : '12px', lg : '16px'}} className='SliderDataOff'>{elem.off}</Text>
                     </Box>
                     <Tooltip label="Add To Cart" aria-label='A tooltip'>
                         <Box  w={{base : '150px', md : '150px'}} m='auto'>  
                           <Button bg='#dd0285' size='sm' colorScheme='none' fontSize='20px' className="AddToCartBtn"><BsCartCheck/></Button>
                         </Box>
                        </Tooltip>
                   </Box>
                   </Link>   
                )
            })}
        </SimpleGrid>

        </>
    )
}