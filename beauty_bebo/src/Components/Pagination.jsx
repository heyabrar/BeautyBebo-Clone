import { Button, Container, Tooltip } from "@chakra-ui/react"

export default function Pagination ({current,onChange,totalPage}) {

    const prev = <Button  bg={'#dd0285'} colorScheme='#dd0285' p={{base : '10px',md : 'none'}} size={{base : 'xsm' , md : 'sm'}} className="PaginationButtons" onClick={( ) => onChange(current-1)} disabled={current ===1}></Button>
    const currentPage = <Button>{current}</Button>
    const next = <Button bg={'#dd0285'} colorScheme='#dd0285' p={{base : '10px',md : 'none'}} size={{base : 'xsm' , md : 'sm'}} className="PaginationButtons" onClick={( ) => onChange(current+1)} disabled={current === Math.ceil(totalPage/4)}></Button>
    return (
        <>
     <Container className="PaginationContainer" maxW={{base : '120px', md :'170px'}}>
        <Tooltip label="Back" aria-label='A tooltip'>
         {prev}
       </Tooltip>
       <Tooltip label="Next " aria-label='A tooltip'>
         {next}
       </Tooltip>
     </Container>
        </>
    )
}