import { Box, Button, Divider, Flex, Image, Select, Text, Tooltip } from "@chakra-ui/react";
import { TiTick } from "react-icons/ti";
import ConentForSingleRenderPage from "./ContentForSingleRenderPage";
import {MdErrorOutline} from 'react-icons/md'
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Toast from "../Components/Toast";
import { useState } from "react";
    
export default function SinglePageRender ({data}){

    const {CartData,SetCartData} = useContext(CartContext);
    const key = Date.now( );
    const [countValue,setCountValue] = useState(0);
    const handleAddToCart = (data) =>{
        SetCartData([...CartData,data]);
    };

    const handleSelect = (e ) =>{
        const {value} = e.target;
        setCountValue(value)
    }


    return (
        <>
         <Flex key={key+data.id} w={{base : '100%', md : '90%' , lg : '50%'}}  m='auto' direction={{base : 'column', md : 'row'}} mt='5%'>
            <Box  m='auto' w={{base : '70%', md : '50%'}} >
                <Image m='auto' w={{base : '200px', md : '300px', lg : '400px'}} src={data.image}/>
            </Box>

            <Box  m='auto'  w={{base : '70%', md : '50%'}}  padding='10px'>
                <Text fontSize={{base : '14px', md : '16px', lg : '18px'}} w={'90%'} fontWeight='550'>{data.title}</Text>
               <Flex color='#dd2985' gap='7px' mt={{base : '10px', md : '15px'}} fontSize={{base : '12px', md : '16px'}} alignItems='center'>
                    { data.stock ? <TiTick/> : <MdErrorOutline/> }
                    <Text> {data.stock || data.out_of_stock}</Text>
                </Flex>

                <Flex gap='10px' fontWeight='550' mt={{base : '10px', md : '15px'}}  fontSize={{base : '12px', md : '16px'}}>
                    <Text color='gray' textDecoration='line-through'>{data.offerPrice} </Text>
                    <Text color='#dd2985'>{countValue === 0 ? '₹' +     data.price :  '₹' + countValue * data.price}</Text>
                    <Text color='green'>{data.off}</Text>
                </Flex>

                <Text  fontSize={{base : '12px', md : '16px'}} mt={{base : '10px', md : '15px'}} color='gray' fontWeight='550'>Brand : {data.brand}</Text>

                <Tooltip label="Add To Cart" aria-label='A tooltip'>
                    <Box  w={{base : '150px', md : '150px'}}>  
                        <Button onClick={( )=> handleAddToCart (data)} bg='#dd0285' size='sm' colorScheme='none' fontSize='20px'  className="AddToCartBtn" disabled={data.out_of_stock === 'Out of stock'}><Toast data={data}/></Button>
                    </Box>
                </Tooltip>
                <Select placeholder='Qty' width={'30%'} mt='20px' onChange={handleSelect} size='sm' disabled={data.out_of_stock === 'Out of stock'}>
                    <option value='1'> 1</option>
                    <option value='2'> 2</option>
                    <option value='3'> 3</option>
                    <option value='4'> 4</option>
                </Select>
              
            </Box>
          </Flex>

          <ConentForSingleRenderPage/>

        </>
    )
}