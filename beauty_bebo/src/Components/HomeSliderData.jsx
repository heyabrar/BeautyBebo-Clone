import { Box, Image, Text, Grid, Button, Tooltip} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react"
import { FetchHomeSlideData } from "../FetchAPI/Fetch";
import {Link, useSearchParams} from 'react-router-dom'
import Pagination from "./Pagination";
import { BsCartCheck } from "react-icons/bs";

const getCurrentPage = (value)=>{
    value = Number(value)
    if(value === 'number' && value <= 0) {
        value = 1;
    }
    if(!value){
        value = 1;
    }
    return value;
}

export default function HomeSliderData ( ) {
    const [sliderData,setSliderData] = useState([ ]);
    const [searchParams,setSearchParams] = useSearchParams( );
    const initialPage = getCurrentPage(searchParams.get('page'))
    const [page,setPage] = useState(initialPage);
    const [totalPage,setTotalPage] = useState(0);

    const handleHomeSliderData = ( ) =>{
      FetchHomeSlideData(page,setTotalPage).then((res)=>{
        setSliderData(res)
      })
    }

    useEffect(( )=>{
        handleHomeSliderData( );
    },[page])

    useEffect(( )=>{
        setSearchParams({page})
    },[page])
    return (
        <>
            <Grid templateColumns={{base : 'repeat(2,1fr)', md : 'repeat(4,1fr)'}} templateRows='repeat(1,1fr)'  className='SliderSimpleGrid' w={{base : '100%', md : '90%', lg :'85%'}} >
                {sliderData.map((elem)=> {
                    return(
                        <Link className="Link" key={elem.id}>
                         <Box   h={{base : '250px', md : '260px' , lg  :'380px'}} w='90%' m='auto' gap='10px'  textAlign={'center'}>
                            <Image boxSize={{base : '120px', md : '130px', lg : '220px'}} m='auto' src={elem.image}/>
                            <Text fontSize={{base : '12px', md : '12px', lg : '16px'}} h={{base : '50px', md : '60px', lg : '70px'}}>{elem.title}</Text>
                          <Box className="Price_Offer_Div"> 
                           <Text fontSize={{base : '10px', md : '10px', lg : '12px'}} className='SliderDataofferPrice'>{elem.offerPrice}</Text>
                           <Text fontSize={{base : '12px', md : '12px', lg : '16px'}} className='SliderDataPrice'>{'₹' + elem.price}</Text>
                           <Text fontSize={{base : '12px', md : '12px', lg : '16px'}} className='SliderDataOff'>{elem.off}</Text>
                          </Box>
                          <Tooltip label="Add To Cart" aria-label='A tooltip'>
                            <Box  w={{base : '150px', md : '150px'}} m='auto'>  
                                <Button bg='#dd0285' size='sm' colorScheme='none' fontSize='20px' className="AddToCartBtn"><BsCartCheck/></Button>
                            </Box>
                         </Tooltip>
                        </Box>
                        </Link>   
                    )
                })}
            </Grid>
            <Pagination current = {page} onChange={(page)=> setPage(page)} totalPage={totalPage}/>
        </>
    )
}