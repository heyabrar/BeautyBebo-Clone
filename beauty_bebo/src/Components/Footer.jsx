import { Box, List, ListItem, SimpleGrid, Text, UnorderedList } from "@chakra-ui/react";
import {BsFacebook,BsInstagram} from 'react-icons/bs'

export default function Footer ( ) {
    return (
        <>
        <Box className="FooterMainBox" border={{base : '1px solid #dd0285', md : '3px solid #dd0285'}} mt='1%'>
        <SimpleGrid className="FooterSimpleGrid" columns={[2,2,4]} w={{base : '90%', md : '85%'}} rowGap='40px' mt='20px'>
            <Box>
                <Text>CONTACT INFO</Text>
                <Text color='#dd2895' >- - - - - -</Text>
                <Box color='gray' fontWeight='500' fontSize={{base : '12px', md : '14px'}} lineHeight='30px'>
                  <Text _hover={{color : '#dd0285', cursor : 'pointer'}}>(+91) 7877061041</Text>
                  <Text _hover={{color : '#dd0285', cursor : 'pointer'}}>support@beautybebo.com <br /> sales@beautybebo.com</Text>
                  <Text _hover={{color : '#dd0285', cursor : 'pointer'}}>Open time: 10:00AM - 7:00PM</Text>
                  <Box display='flex' gap='30px' fontSize='30px'color='#dd0285' mt='20px'>
                    < BsFacebook></BsFacebook>
                    <BsInstagram/>
                  </Box>
                </Box>
            </Box>

            <Box>
                <Text>QUICK LINKS</Text>
                <Text color='#dd2895' >- - - - - -</Text>
                <UnorderedList color='gray' fontWeight='500' fontSize={{base : '12px', md : '14px'}} lineHeight='30px'>
                    <ListItem _hover={{color : '#dd0285', cursor : 'pointer'}}>About Us</ListItem>
                    <ListItem _hover={{color : '#dd0285', cursor : 'pointer'}}>Contact Us</ListItem>
                    <ListItem _hover={{color : '#dd0285', cursor : 'pointer'}}>Terms & Conditions</ListItem>
                    <ListItem _hover={{color : '#dd0285', cursor : 'pointer'}}>Proivacy Policy</ListItem>
                    <ListItem _hover={{color : '#dd0285', cursor : 'pointer'}}>Return & Refund Policy</ListItem>
                    <ListItem _hover={{color : '#dd0285', cursor : 'pointer'}}>Shipping Policy</ListItem>
                </UnorderedList>
            </Box>

            <Box>
                <Text>CUSTOMER INFO</Text>
                <Text color='#dd2895' >- - - - - -</Text>
                <UnorderedList color='gray' fontWeight='500' fontSize={{base : '12px', md : '14px'}} lineHeight='30px'>
                    <ListItem _hover={{color : '#dd0285', cursor : 'pointer'}}>My Account</ListItem>
                    <ListItem _hover={{color : '#dd0285', cursor : 'pointer'}}>Track your Order</ListItem>
                    <ListItem _hover={{color : '#dd0285', cursor : 'pointer'}}>Order returns</ListItem>
                    <ListItem  _hover={{color : '#dd0285', cursor : 'pointer'}}>Wishlist</ListItem>
                    <ListItem _hover={{color : '#dd0285', cursor : 'pointer'}}>News & Events</ListItem>
                    <ListItem _hover={{color : '#dd0285', cursor : 'pointer'}}>FAQ</ListItem>
                </UnorderedList>
            </Box>

            <Box>
                <Text>CATEGORIES</Text>
                <Text color='#dd2895' >- - - - - -</Text>
                <UnorderedList color='gray' fontWeight='500' fontSize={{base : '12px', md : '14px'}} lineHeight='30px'>
                    <ListItem _hover={{color : '#dd0285', cursor : 'pointer'}}>Makeup</ListItem>
                    <ListItem _hover={{color : '#dd0285', cursor : 'pointer'}}>Skin</ListItem>
                    <ListItem _hover={{color : '#dd0285', cursor : 'pointer'}}>Hair</ListItem>
                    <ListItem _hover={{color : '#dd0285', cursor : 'pointer'}}>Personal Care</ListItem>
                    <ListItem _hover={{color : '#dd0285', cursor : 'pointer'}}>Mom & Baby Care</ListItem>
                    <ListItem _hover={{color : '#dd0285', cursor : 'pointer'}}>Fragrance</ListItem>
                    <ListItem _hover={{color : '#dd0285', cursor : 'pointer'}}>Ayurveda</ListItem>
                </UnorderedList>
            </Box>
        </SimpleGrid>
        </Box>
        </>
    );
};