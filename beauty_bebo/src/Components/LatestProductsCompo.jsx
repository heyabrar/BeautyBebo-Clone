import { Box, Button, Container, Flex, Image, Text, Tooltip, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react"
import { BsCartCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { FetchLatestProducts } from "../FetchAPI/Fetch";

export default function LatestProduct ( ){

    const [Products,SetProducts] = useState([ ]);
    const {CartData,SetCartData} = useContext(CartContext);
    const Toaster = useToast( );

    const handleLatestProducts = ( ) =>{
        FetchLatestProducts( ).then((res)=>{
            SetProducts(res.data)
        });
    };

    useEffect(( ) =>{
        handleLatestProducts( );
    },[ ]);

    const handleAddToCart = (elem) =>{
        SetCartData([...CartData,elem]);
        Toaster({title : 'Added To Cart' , position : 'top-center', duration : 2000});
    };

    return (
        <>
        <Container  p='10px' border='1px solid RGBA(0, 0, 0, 0.16)'>
            {Products.map((elem)=>{
                return (
                    <Flex gap='20px' m='auto' key={elem.id}>
                        <Box  w='150px' mt='20px'>  
                            <Link to={`/LatestProducts/${elem.id}`}><Image boxSize='100%' src={elem.image}/></Link>
                        </Box>

                        <Box w='300px' mt='20px'>
                            <Link to={`/LatestProducts/${elem.id}`}><Text fontSize={{base : '12px', md : '15px'}} fontWeight='500' _hover={{color : '#dd2985'}}>{elem.title}</Text></Link>
                            <Flex gap='10px' fontWeight='550' fontSize={{base : '12px', md : '15px'}}>
                                <Text textDecoration='line-through' color='gray'>{elem.offerPrice}</Text>
                                <Text color='#dd2589'>{'₹' +elem.price}</Text>
                                <Text color='green'>{ elem.off}</Text>
                            </Flex>
                            <Tooltip label="Add To Cart" aria-label='A tooltip'>
                                <Box  w={{base : '150px', md : '150px'}}>  
                                    <Button onClick={( ) =>handleAddToCart(elem)} bg='#dd0285' size='sm' colorScheme='none' fontSize='20px' className="AddToCartBtn"><BsCartCheck/></Button>
                                </Box>
                            </Tooltip>
                        </Box>
                    </Flex>
                )
            })}
        </Container>
        </>
    );
};