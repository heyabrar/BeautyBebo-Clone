import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FetchSPHairPageData } from "../FetchAPI/Fetch";
import SinglePageRender from "./SinglePageRender";

export default function SingleHairPage ( ){

    const [SingleHairPageData,SetSingleHairPageData] = useState({ });
    const Params = useParams( );

    const handleSinglePageHairData = ( ) =>{
      FetchSPHairPageData(Params.id).then((res)=>{
        SetSingleHairPageData(res.data)
      })
    }

    useEffect(( )=>{
        handleSinglePageHairData( );
    },[ ]);


    return (
        <>
         <Box h={{base : '115px', md : '145px', lg : '200px'}}></Box>
         <SinglePageRender data={SingleHairPageData}/>
        </>
    )
}