import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FetchSPHairPageData } from "../FetchAPI/Fetch";
import SinglePageRender from "./SinglePageRender";
import SpinnerLoader from "./SpinnerLoader";

export default function SingleHairPage ( ){

    const [SingleHairPageData,SetSingleHairPageData] = useState({ });
    const Params = useParams( );
    const [Loading,SetLoading] =  useState(false);

    const handleSinglePageHairData = ( ) =>{
      SetLoading(true);
      FetchSPHairPageData(Params.id).then((res)=>{
        SetLoading(false)
        SetSingleHairPageData(res.data)
      });
    };

    useEffect(( )=>{
        handleSinglePageHairData( );
    },[ ]);

    return (
        <>
         <Box h={{base : '115px', md : '145px', lg : '200px'}}></Box>
            <Box  width='30%' m='auto' display='flex' justifyContent={'center'} position='relative' top={{base : '100px', md : '70px', lg : '150px'}}>
              {Loading && <SpinnerLoader/>}
            </Box>
         <SinglePageRender data={SingleHairPageData}/>
        </>
    );
};