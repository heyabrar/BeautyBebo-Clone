import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Tooltip, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"
import { Link } from "react-router-dom"

export default function AlertDialogExample({data}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef( );

    return (
      <>
        <Tooltip label={data.Fname === '' || data.Lname === '' || data.phone === '' || data.address === '' ? 'Fill The Credentials' : 'Purchase'}>
          <Button colorScheme='#dd2985' bg='#dd2985' size='sm' onClick={onOpen}  disabled={data.Fname === ''  || data.Lname === '' || data.address === '' || data.phone === ''}>
              Place Order
          </Button>
        </Tooltip>  
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Order Placed Successfully
              </AlertDialogHeader>
  
              <AlertDialogBody>
                ThankYou For Choosing BeautyBebo Your Order Is On Its Way
              </AlertDialogBody>
  
              <AlertDialogFooter>
               <Link to='/'> <Button ref={cancelRef} onClick={onClose}>
                 Back To Home
                </Button></Link>
                <Button colorScheme='red' onClick={onClose} ml={3}>
                  Close
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }