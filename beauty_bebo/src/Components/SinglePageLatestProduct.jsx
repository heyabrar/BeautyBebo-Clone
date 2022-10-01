import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FetchSinglePageLatestProducts } from "../FetchAPI/Fetch";
import SinglePageRender from "./SinglePageRender";

export default function SPLatestProducts ( ){
    const [SPLatestProducts,SetSPLatestProducts] = useState({ })
    const Params = useParams( );

    const handleSPLatestProductsData = ( ) =>{
            FetchSinglePageLatestProducts(Params.id).then((res)=>{
               SetSPLatestProducts(res.data)
            })
    }

    useEffect(( )=>{
        handleSPLatestProductsData( );
    },[ ])

    return (
        <>
          <Box h={{base : '110px', md : '155px', lg : '220px'}}></Box>
          <SinglePageRender data={SPLatestProducts}/>
        </>
    );
};