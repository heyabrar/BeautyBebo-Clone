import {Box, Button, Flex, Image, Input, Text, Tooltip} from '@chakra-ui/react'
import {FaSearch} from 'react-icons/fa'
import {BsCartCheck} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
export default function Navbar ( ){
    const {TotalCartPrice,SetTotalCartPrice,CartData} = useContext(CartContext);
    return (
        <>
        <div className='NavMainDiv'>
        <Box maxW='100%'  className='TopNav'>
            <Link to={'/fragrance'}><Image boxSize='100%' m='auto' src='https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg'/></Link>
        </Box>

        <Box bg='white'>
            <Flex className='MiddleNavFlex' w={{base : '100%', md : '90%', lg : '90%'}} p='10px' bg='white'> 
           <Box  w={{base : '20%', md : '20%', lg : '20%'}}>
                <Link to='/'><Image w={{base : '100%', md : '90%' , lg : '90%'}}  src='https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png'/></Link>
            </Box>
          

                <Box display='flex' gap='10px' w={{base : '50%', md : '50%' , lg : '55%'}} alignItems='center'>
                    <Input placeholder='Search' h={{base : '25px', md : '40px'}} fontSize={{base : '10px', md : '14px'}}/>
                <Box className='searchBtn' p={{base : '1px', md :'5px'}} _hover={{color : '#dd2985', cursor : 'pointer'}}><FaSearch/></Box>
                </Box>

                <Flex  gap={{base : '15px', md : '15px' , lg : '20px'}} alignItems={'center'} justifyContent='center'  w={{base : '18%', md : '20%' , lg : '15%'}}>
                   <Link to={CartData.length === 0 ? '/' : '/cart'}> <Tooltip label={CartData.length === 0 ? 'Cart Is Empty' : 'Cart'}><Button variant='unstyled' size='xsm' disabled={CartData.length === 0}  fontSize={{base : '14px', md : '16px', lg : '25px'}} _hover={{color : '#dd2985'}}><BsCartCheck/></Button></Tooltip></Link>
                    <Tooltip label={CartData.length === 0 ? 'Cart Is Empty' : 'Total In Cart'}>
                    <Text  fontSize={{base :'12px', md : '14px' }} fontWeight='550'>{'₹'+TotalCartPrice}</Text>
                     </Tooltip>  
                </Flex>
            </Flex>
        </Box>

            <Box w='100%' className='BottomNavContainer' fontSize={{base : '12px', md : '16px'}}>
            <Link to='/'>MAKE UP</Link>
            <Link to='/hair'>HAIR</Link>
            <Link to='/mombabycare'>MOM & BABY CARE</Link>
            <Link to='/fragrance'>FRAGRANCE</Link>
            </Box>
        </div>
        </>
    );
};