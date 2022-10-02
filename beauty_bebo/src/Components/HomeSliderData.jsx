import { Box, Image, Text, Grid, Button, Tooltip, useToast} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useState } from "react"
import { FetchHomeSlideData } from "../FetchAPI/Fetch";
import {Link, useSearchParams} from 'react-router-dom'
import Pagination from "./Pagination";
import { BsCartCheck } from "react-icons/bs";
import { CartContext } from "../Context/CartContext";
import SpinnerLoader from "./SpinnerLoader";

const getCurrentPage = (value)=>{
    value = Number(value)
    if(value === 'number' && value <= 0) {
        value = 1;
    };
    if(!value){
        value = 1;
    };
    return value;
};

export default function HomeSliderData ( ) {
    const [sliderData,setSliderData] = useState([ ]);
    const [searchParams,setSearchParams] = useSearchParams( );
    const initialPage = getCurrentPage(searchParams.get('page'))
    const [page,setPage] = useState(initialPage);
    const [totalPage,setTotalPage] = useState(0);
    const {CartData,SetCartData} = useContext(CartContext);
    const [Loading,SetLoading] = useState(false);
    const Toaster = useToast( );

    const handleHomeSliderData = ( ) =>{
        SetLoading(true);
      FetchHomeSlideData(page,setTotalPage).then((res)=>{
        setSliderData(res);
        SetLoading(false);
      })
    }

    useEffect(( )=>{
        handleHomeSliderData( );
    },[page]);

    useEffect(( )=>{
        setSearchParams({page})
    },[page]);

    const handleAddToCart = (elem) =>{
        SetCartData([...CartData,elem]);
        Toaster({title : 'Added To Cart' , position : 'top-center', duration : 2000})
    };

    return (
        <>
            <Box  width='30%' m='auto' display='flex' justifyContent={'center'} position='relative' top={{base : '280px', md : '200px', lg : '250px'}}>
              {Loading && <SpinnerLoader/>}
            </Box>
            <Grid  templateColumns={{base : 'repeat(2,1fr)', md : 'repeat(4,1fr)'}} templateRows='repeat(1,1fr)'  className='SliderSimpleGrid' w={{base : '100%', md : '90%', lg :'85%'}} >
                {sliderData.map((elem)=> {
                    return(
                            <Box key={elem.id}  h={{base : '250px', md : '260px' , lg  :'380px'}} w='90%' m='auto' gap='10px'  textAlign={'center'}>
                                <Link to={`/homeSliderData1/${elem.id}`}><Image boxSize={{base : '120px', md : '130px', lg : '220px'}} m='auto' src={elem.image}/></Link>
                                <Link to={`/homeSliderData1/${elem.id}`}><Text fontSize={{base : '12px', md : '12px', lg : '16px'}} h={{base : '50px', md : '60px', lg : '70px'}} _hover={{color : '#dd2985'}}>{elem.title}</Text></Link>

                            <Box className="Price_Offer_Div"> 
                                <Text fontSize={{base : '10px', md : '10px', lg : '12px'}} className='SliderDataofferPrice'>{elem.offerPrice}</Text>
                                <Text fontSize={{base : '12px', md : '12px', lg : '16px'}} className='SliderDataPrice'>{elem.rupee+elem.price}</Text>
                                <Text fontSize={{base : '12px', md : '12px', lg : '16px'}} className='SliderDataOff'>{elem.off}</Text>
                            </Box> 
                    
                            <Tooltip label="Add To Cart" aria-label='A tooltip'>
                                <Box  w={{base : '150px', md : '150px'}} m='auto'>  
                                    <Button onClick={( ) =>handleAddToCart (elem)} bg='#dd0285' size='sm' colorScheme='none' fontSize='20px' className="AddToCartBtn"><BsCartCheck/></Button>
                                </Box>
                            </Tooltip>
                            </Box>
                    )
                })}
            </Grid>
            <Pagination current = {page} onChange={(page)=> setPage(page)} totalPage={totalPage}/>
        </>
    )
}