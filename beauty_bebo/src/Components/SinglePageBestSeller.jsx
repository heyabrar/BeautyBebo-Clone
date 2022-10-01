import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { FetchSinglePageBestSellers } from "../FetchAPI/Fetch";
import SinglePageRender from "./SinglePageRender";

export default function SPBestSellers ( ){
    const [SPBestSellers,SetSPBestSellers] = useState({ })
    const Params = useParams( );

    const handleSPBestSellersData = ( ) =>{
            FetchSinglePageBestSellers(Params.id).then((res)=>{
               SetSPBestSellers(res.data)
            });
    };

    useEffect(( )=>{
        handleSPBestSellersData( );
    },[ ])
  
    return (
        <>
          <Box h={{base : '110px', md : '155px', lg : '220px'}}></Box>
          <SinglePageRender data={SPBestSellers}/>
        </>
    )
}