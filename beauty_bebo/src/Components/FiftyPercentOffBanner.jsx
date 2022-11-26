import { Container, Image } from "@chakra-ui/react";

export default function FiftyPercentOffBanner ( ){
    return (
        <>
        <Container maxW={{base : '100%', md : '90%', lg :'90%'}} h={{base : '100px', md : '200px', lg : '280'}}>
            <Image h='100%' w='100%' src="https://www.beautybebo.com/pub/media/ads/Forent_Banner_5-min.jpg"/>
        </Container>
        </>
    );
};