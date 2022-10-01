import { Box, Image } from "@chakra-ui/react";

export default function FourtyPercentOffBanner ( ){
    return (
        <>
            <Box maxW={{base : '95%', md : '90%' , lg : '80%'}} m='auto' mt='20px' >
                <Image margin='auto' boxSize='100%' src="https://www.beautybebo.com/pub/media/ads/Blue_heaven_Forent_3-min.jpg"/>
            </Box>
        </>
    );
};