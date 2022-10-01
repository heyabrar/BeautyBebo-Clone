import { Button, Container, Tooltip } from "@chakra-ui/react"
import {BiRightArrow, BiLeftArrow} from 'react-icons/bi'

export default function Pagination ({current,onChange,totalPage}) {

    const prev = <Button  bg={'#dd0285'} colorScheme='#dd0285' p={{base : '10px',md : 'none'}} size={{base : 'xsm' , md : 'sm'}} fontSize={{base : '10px', md : '14px'}} h='10px' onClick={( ) => onChange(current-1)} disabled={current ===1}><BiLeftArrow/></Button>
    const currentPage = <Button>{current}</Button>
    const next = <Button bg={'#dd0285'} colorScheme='#dd0285' p={{base : '10px',md : 'none'}} size={{base : 'xsm' , md : 'sm'}} fontSize={{base : '10px', md : '14px'}} h='10px' onClick={( ) => onChange(current+1)} disabled={current === Math.ceil(totalPage/4)}><BiRightArrow/></Button>
    
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
    );
};