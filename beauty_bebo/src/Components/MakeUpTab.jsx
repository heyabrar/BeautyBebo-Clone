import { Box, Button, Flex, Image, SimpleGrid, Text, Tooltip, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import { FetchMakeUpTab } from "../FetchAPI/Fetch";
import {BsCartCheck} from 'react-icons/bs';
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import SpinnerLoader from "./SpinnerLoader";

export default function MakeUpTab ( ){

    const [MakeUpData,SetMakeUpData] = useState([ ]);
    const {CartData,SetCartData} = useContext(CartContext);
    const Toaster = useToast( );
    const [Loading,SetLoading] = useState(false);

    const handleMakeUpData = ( ) =>{
        SetLoading(true);
        FetchMakeUpTab( ).then((res)=>{
           SetMakeUpData(res.data);
           SetLoading(false);
        });
    };

    useEffect(( )=>{
        handleMakeUpData( );
    },[ ]);

    const handleAddToCart = (elem) =>{
        SetCartData([...CartData,elem]);
        Toaster({title : 'Added To Cart' , position : 'top-center', duration : 2000});
    };
    
    return (
        <>
            <Flex justifyContent='center' position='relative' left={{base : '35%', md : '40%', lg :'45%'}}  w='100px'>{Loading && <SpinnerLoader/>}</Flex>
                <SimpleGrid columns={[2,2,4]}>
                    {MakeUpData.map((elem)=>{
                        return (
                            <Box   h={{base : '250px', md : '260px' , lg  :'380px'}} w='90%' m='auto' gap='10px'  textAlign={'center'} key={elem.id}>
                            <Link to={`/MakeUpTab/${elem.id}`}><Image boxSize={{base : '120px', md : '130px', lg : '220px'}} m='auto' src={elem.image}/></Link>
                            <Link to={`/MakeUpTab/${elem.id}`}><Text fontSize={{base : '12px', md : '12px', lg : '16px'}} h={{base : '50px', md : '60px', lg : '70px'}} _hover={{color : '#dd2985'}}>{elem.title}</Text></Link>

                            <Box className="Price_Offer_Div"> 
                            <Text fontSize={{base : '10px', md : '10px', lg : '12px'}} className='SliderDataofferPrice'>{elem.offerPrice}</Text>
                            <Text fontSize={{base : '12px', md : '12px', lg : '16px'}} className='SliderDataPrice'>{elem.rupee+elem.price}</Text>
                            <Text fontSize={{base : '12px', md : '12px', lg : '16px'}} className='SliderDataOff'>{elem.off}</Text>
                            </Box>
                            
                            <Tooltip label="Add To Cart" aria-label='A tooltip'>
                                <Box  w={{base : '150px', md : '150px'}} m='auto'>  
                                <Button onClick={( ) => handleAddToCart(elem)} bg='#dd0285' size='sm' colorScheme='none' fontSize='20px' className="AddToCartBtn"><BsCartCheck/></Button>
                                </Box>
                                </Tooltip>
                        </Box>
                        )
                    })}
                </SimpleGrid>
        </>
    );
};