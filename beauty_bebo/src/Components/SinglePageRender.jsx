import { Box, Button, Container, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import { BsCartCheck } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import ConentForSingleRenderPage from "./ContentForSingleRenderPage";
import ThressColumn from "./ThreeColumn";
    
export default function SinglePageRender ({data}){
    
    return (
        <>
         <Flex key={data.id} w={{base : '100%', md : '90%' , lg : '50%'}}  m='auto' gap='30px' direction={{base : 'column', md : 'row'}}>
            <Box  m='auto' >
                <Image w={{base : '200px', md : '300px', lg : '400px'}} src={data.image}/>
            </Box>

            <Box  m='auto'  w='80%'>
                <Text fontSize={{base : '14px', md : '16px', lg : '18px'}} w={'90%'} fontWeight='550'>{data.title}</Text>
               <Flex color='#dd2985' mt={{base : '10px', md : '15px'}} fontSize={{base : '12px', md : '16px'}}>
                    <TiTick/> 
                    <Text> {data.stock || data.out_of_stock}</Text>
                </Flex>

                <Flex gap='10px' fontWeight='550' mt={{base : '10px', md : '15px'}}  fontSize={{base : '12px', md : '16px'}}>
                    <Text color='gray' textDecoration='line-through'>{data.offerPrice}</Text>
                    <Text color='#dd2985'>{data.price}</Text>
                    <Text color='green'>{data.off}</Text>
                </Flex>

                <Text  fontSize={{base : '12px', md : '16px'}} mt={{base : '10px', md : '15px'}} color='gray'>Brand : {data.brand}</Text>

                <Tooltip label="Add To Cart" aria-label='A tooltip'>
                    <Box  w={{base : '150px', md : '150px'}}>  
                        <Button bg='#dd0285' size='sm' colorScheme='none' fontSize='20px' className="AddToCartBtn"><BsCartCheck/></Button>
                    </Box>
                </Tooltip>
            </Box>
          </Flex>

          <ConentForSingleRenderPage/>

        </>
    )
}