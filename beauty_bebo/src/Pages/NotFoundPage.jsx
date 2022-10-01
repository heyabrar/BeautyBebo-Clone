import { Box, Skeleton, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFoundPage ( ) {
    return (
        <>
            <Box h={{base : '120px', md : '150px', lg :'200px'}}></Box>
           <Box w={{base :'60%', md :'40%'}} m='auto'>
                <Skeleton startColor='white' endColor='#dd2985' height='20px' />
                <Skeleton startColor='white' endColor='#dd2985' height='20px' />
                <Skeleton startColor='white' endColor='#dd2985' height='20px' />
                <Skeleton startColor='white' endColor='#dd2985' height='20px' />
           </Box>

           <Box w={{base :'60%', md :'40%'}} m='auto' fontSize={{base : '30px', md : '40px'}} fontWeight='550' textAlign='center'>
             <Text>Oops!! Page Not Found</Text>
             <Link to='/'><Text color='#dd2985' textDecoration='underline'>Back Home</Text></Link>
           </Box>
        </>
    )
}