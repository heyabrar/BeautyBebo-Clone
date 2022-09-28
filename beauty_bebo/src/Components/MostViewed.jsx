import { Box, Button, Container,  Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react"
import { BsCartCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FetchMostViewed } from "../FetchAPI/Fetch";

export default function MostViewed ( ){

    const [MostViewed,SetMostViewed] = useState([ ]);

    const handleMostViewed = ( ) =>{
        FetchMostViewed( ).then((res)=>{
            SetMostViewed(res.data)
        })
    }

    useEffect(( ) =>{
        handleMostViewed( );
    },[ ])

    return (
        <>
        <Container  p='10px' border='1px solid RGBA(0, 0, 0, 0.16)'>
            {MostViewed.map((elem)=>{
                return (
                    <Flex gap='20px' m='auto' key={elem.id}>
                        <Box  w='150px' mt='20px'>
                           <Link> <Image boxSize='100%' src={elem.image}/></Link>
                        </Box>

                        <Box w='300px' mt='20px'>

                           <Link><Text fontSize={{base : '12px', md : '15px'}} fontWeight='500' _hover={{color  : '#dd2985'}}>{elem.title}</Text></Link>

                            <Flex gap='10px' fontWeight='550' fontSize={{base : '12px', md : '15px'}}>
                                <Text textDecoration='line-through' color='gray'>{elem.offerPrice}</Text>
                                <Text color='#dd2589'>{'₹' +elem.price}</Text>
                                <Text color='green'>{ elem.off}</Text>
                            </Flex>

                            <Tooltip label="Add To Cart" aria-label='A tooltip'>
                                <Box  w={{base : '150px', md : '150px'}}>  
                                    <Button bg='#dd0285' size='sm' colorScheme='none' fontSize='20px' className="AddToCartBtn"><BsCartCheck/></Button>
                                </Box>
                            </Tooltip>

                        </Box>
                    </Flex>
                )
            })}

        </Container>

        </>
    )

}