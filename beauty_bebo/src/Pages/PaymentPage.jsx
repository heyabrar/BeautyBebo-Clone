import { Box, Text } from "@chakra-ui/react"
import AlertDialogExample from "../Components/AlertBox"

export default function PaymentPage ({data}) {
    return (
        <>
         <Box border={'2px solid #dd2985'} w={{base : '90%', md : '60%', lg : '40%'}}  m='auto' mt='5%' padding='10px'>
            <Text fontSize={{base : '19px', md : '22px'}} fontWeight='550'>Shipped To,</Text>
            <Box fontSize={{base : '14px', md : '16px'}} lineHeight='35px'>
                <Text>Name : {data.Fname  +' '+  data.Lname}</Text>
                <Text>Address : {data.address}</Text>
                <Text>Country : {data.country}</Text>
                <Text>Phone : {data.phone}</Text>
            </Box>
             <AlertDialogExample data={data}/>
         </Box>
          </>
    );
};