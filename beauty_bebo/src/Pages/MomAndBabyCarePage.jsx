import { Box, Button, Flex, Image, SimpleGrid, Text, Tooltip, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react"
import { BsCartCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import SpinnerLoader from "../Components/SpinnerLoader";
import { CartContext } from "../Context/CartContext";
import { FetchMomAndBabyCarePageData } from "../FetchAPI/Fetch";

export default function MomAndBabyCarePage ( ){
    const [MBCData,setMBCData] = useState([ ]);
    const {CartData,SetCartData} = useContext(CartContext);
    const Toaster = useToast( );
    const [Loading,SetLoading] = useState(false)

    const handleMBCData = ( ) =>{
        SetLoading(true)
        FetchMomAndBabyCarePageData( ).then((res)=>{
            setMBCData(res.data)
            SetLoading(false)
        });
    };

    useEffect(( )=>{
        handleMBCData( );
    },[ ]);

    const handleAddToCart = (elem) =>{
        SetCartData([...CartData,elem]);
        Toaster({title : 'Added To Cart' , position : 'top-center', duration : 2000});
    }
    return (
        <>
        <Box h={{base : '83px', md : '125px', lg : '180px'}}></Box>
        <Flex  justifyContent='center' position='relative' top={{base : '30px'}} >{Loading && <SpinnerLoader/>}</Flex>
         <SimpleGrid className="HairPageSimpleGrid" columns={[2,2,2,3]} w={{base : '100%', md : '100%', lg : '90%'}} mt={{base : '5%', md :'3%'}} >
            {MBCData.map((elem)=>{
                return (
                    <Box key={elem.id} className="HairPageSimpleGridBox" w={{base : '95%', md : '90%'}}   shadow='sm'>
                       <Link to={`/MomAndBabyCare/${elem.id}`}><Image w={{base : '150px', md :'150px', lg : '200px'}} m='auto'  src={elem.image}/></Link>
                       <Link to={`/MomAndBabyCare/${elem.id}`}><Text  h={{base : '70px', md : '50px', lg : '40px'}} w={{base : '100%', md : '90%', lg : '80%'}} m='auto' fontSize={{base : '12px', md : '14px'}} color='RGBA(0, 0, 0, 0.48)'>{elem.title}</Text></Link>
                       <Text  fontSize={{base : '10px' , md :'12px'}} h='15px' color='#dd2985'>{elem.out_of_stock || elem.stock}</Text>

                        <Flex gap='10px' fontSize={{base : '12px',md : '14px'}} mt='10px' justifyContent='center'>
                            <Text color='gray' textDecoration='line-through'>{elem.offerPrice}</Text>
                            <Text color='#dd2985' >{elem.rupee+elem.price}</Text>
                            <Text color='green'>{elem.off}</Text>
                        </Flex>

                        
                        <Tooltip label="Add To Cart" aria-label='A tooltip'>
                                <Box  w={{base : '150px', md : '150px'}} m='auto'>  
                                    <Button onClick={( ) => handleAddToCart(elem)} bg='#dd0285' size='sm' colorScheme='none' fontSize='20px' className="AddToCartBtn" disabled={elem.out_of_stock === 'Out of stock'}><BsCartCheck/></Button>
                                </Box>
                            </Tooltip>
                     </Box>
                )
            })}
        </SimpleGrid>
        </>
    );
}