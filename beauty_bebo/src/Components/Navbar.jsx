import {Box, Flex, Image, Input} from '@chakra-ui/react'
import {FaSearch,FaUserAlt} from 'react-icons/fa'
import {BsCartCheck} from 'react-icons/bs'
import {Link} from 'react-router-dom'
export default function Navbar ( ){
    return (
        <>
        <div className='NavMainDiv'>
        <Box maxW='100%'  className='TopNav'>
            <Image boxSize='100%' m='auto' src='https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg'/>
        </Box>

        <Box bg='white'>
            <Flex className='MiddleNavFlex' w={{base : '100%', md : '90%', lg : '90%'}} p='10px' bg='white'> 
            <Box  w={{base : '20%', md : '20%', lg : '20%'}}>
                <Image w={{base : '100%', md : '90%' , lg : '90%'}}  src='https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png'/>
            </Box>

                <Box display='flex' gap='10px' w={{base : '50%', md : '50%' , lg : '55%'}} alignItems='center'>
                    <Input placeholder='Search' h={{base : '25px', md : '40px'}} fontSize={{base : '10px', md : '14px'}}/>
                <Box className='searchBtn' p={{base : '1px', md :'5px'}} _hover={{color : '#dd2985', cursor : 'pointer'}}><FaSearch/></Box>
                </Box>

                <Box display='flex' gap={{base : '15px', md : '15px' , lg : '20px'}} alignItems={'center'} justifyContent='center'  w={{base : '18%', md : '20%' , lg : '10%'}}>
                   <Link to='/cart'> <Box fontSize={{base : '14px', md : '16px', lg : '25px'}} _hover={{color : '#dd2985'}}><BsCartCheck/></Box></Link>
                        <Box display='flex' gap='10px' alignItems='center'>
                        <Box fontSize={{base : '14px', md : '16px', lg : '25px'}} _hover={{color : '#dd2985', cursor : 'pointer'}}><FaUserAlt/></Box>
                        </Box>
                </Box>
            </Flex>
        </Box>

            <Box w='100%' className='BottomNavContainer' fontSize={{base : '10px', md : '16px'}}>
            <Link to='/'>MAKE UP</Link>
            <Link to='/hair'>HAIR</Link>
            <Link to='/mombabycare'>MOM & BABY CARE</Link>
            <Link to='/fragrance'>FRAGRANCE</Link>
            </Box>
        </div>
        </>
    )
}