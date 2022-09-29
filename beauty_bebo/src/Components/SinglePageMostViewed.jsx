import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FetchSinglePageMostViewed } from "../FetchAPI/Fetch";
import SinglePageRender from "./SinglePageRender";

export default function SPMostViewed ( ){
    const [SPMostViewed,SetSPMostViewed] = useState({ })
    const Params = useParams( );

    const handleSPMostViewedData = ( ) =>{
            FetchSinglePageMostViewed(Params.id).then((res)=>{
               SetSPMostViewed(res.data)
            })
    }

    useEffect(( )=>{
        handleSPMostViewedData( );
    },[ ])

    return (
        <>
          <Box h={{base : '110px', md : '155px', lg : '220px'}}></Box>
          <SinglePageRender data={SPMostViewed}/>
        </>
    )
}