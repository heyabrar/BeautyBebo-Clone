import { Button, useToast } from "@chakra-ui/react"
import { BsCartCheck } from "react-icons/bs"
import { MdErrorOutline } from "react-icons/md"

export default function Toast({data}) {
    const toast = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            title: 'Added To Cart.',
            description: "Check Cart For More Details",
            status: 'success',
            duration: 3000,
            isClosable: true,
            position : 'top-center',
          })
        }
        bg='#dd0285' size='sm' colorScheme='none' fontSize='25px'  m='auto' className="AddToCartBtn" disabled={data.out_of_stock === 'Out of stock'}>
      {data.stock ?<BsCartCheck/>: <MdErrorOutline/>}
      </Button>
    )
  }