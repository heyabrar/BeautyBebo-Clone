import {Box, Container, Flex, Image, Input} from '@chakra-ui/react'
import {FaSearch,FaHeart,FaUserAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'
export default function Navbar ( ){
    return (
        <>
        <div className='NavMainDiv'>
        <Container maxW='full'  className='TopNav'>
            <Image boxSize='100%' src='https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg'/>
        </Container>

        <Flex className='MiddleNavFlex' w={{base : '100%', md : '90%', lg : '90%'}} p='10px'> 
         <Box  w={{base : '20%', md : '20%', lg : '20%'}}>
            <Image w={{base : '100%', md : '90%' , lg : '90%'}}  src='https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png'/>
         </Box>

            <Box display='flex' gap='10px' w={{base : '50%', md : '50%' , lg : '55%'}} alignItems='center'>
                <Input placeholder='Search' h={{base : '25px', md : '40px'}} fontSize={{base : '10px', md : '14px'}}/>
               <Box className='searchBtn' p={{base : '1px', md :'5px'}}><FaSearch/></Box>
            </Box>

            <Box display='flex' gap={{base : '15px', md : '15px' , lg : '20px'}} alignItems={'center'} justifyContent='center'  w={{base : '18%', md : '20%' , lg : '10%'}}>
                <Box fontSize={{base : '14px', md : '16px', lg : '25px'}}><FaHeart/></Box>
                    <Box display='flex' gap='10px' alignItems='center'>
                    <Box fontSize={{base : '14px', md : '16px', lg : '25px'}}><FaUserAlt/></Box>
                    </Box>
             </Box>
        </Flex>

        <Container  maxW='full' className='BottomNavContainer' fontSize={{base : '10px', md : '16px'}}>
        <Link to='/'>MAKE UP</Link>
        <Link to='/hair'>HAIR</Link>
        <Link to='/mombabycare'>MOM & BABY CARE</Link>
        <Link to='/fragrance'>FRAGRANCE</Link>
        </Container>
        </div>
        </>
    )
}