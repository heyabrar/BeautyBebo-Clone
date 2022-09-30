import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export default function CartPage ( ) {
    const {CartData,SetCartData} = useContext(CartContext);
    return (
        <>
         <Box h={{base : '83px', md : '125px', lg : '220px'}}></Box>

         <SimpleGrid className="HairPageSimpleGrid" columns={[2,2,2,3]} w={{base : '100%', md : '90%'}} mt={{base : '5%', md :'3%'}} >
            {CartData.map((elem)=>{
                return (
                    <Box key={elem.id} className="HairPageSimpleGridBox" w={{base : '95%', md : '90%'}}  shadow='sm'>
                      <Image w={{base : '150px', md :'200px'}} m='auto'  src={elem.image}/>
                       <Text h={{base : '60px', md : '60px', lg : '40px'}} w={{base : '100%', md : '90%', lg : '80%'}} m='auto' fontSize={{base : '10px', md : '14px'}} color='RGBA(0, 0, 0, 0.48)' >{elem.title}</Text>
                       <Text  fontSize={{base : '10px' , md :'12px'}} h='15px' color='#dd2985'>{elem.out_of_stock || elem.stock}</Text>
                        
                        <Flex gap='10px' fontSize={{base : '12px',md : '14px'}} mt='10px' justifyContent='center'>
                            <Text color='gray' textDecoration='line-through'>{elem.offerPrice}</Text>
                            <Text color='#dd2985' >{elem.price}</Text>
                            <Text color='green'>{elem.off}</Text>
                        </Flex>

                        {/* <Tooltir label="Add To Cart" aria-label='A tooltip'>
                                <Box  w={{base : '150px', md : '150px'}} m='auto'>  
                                    <Button bg='#dd0285' size='sm' colorScheme='none' fontSize='20px' disabled={elem.out_of_stock === 'Out of stock'} className="AddToCartBtn"><BsCartCheck/></Button>
                                </Box>
                            </Tooltip> */}
                     </Box>
                )
            })}
        </SimpleGrid>
        </>
    )
}