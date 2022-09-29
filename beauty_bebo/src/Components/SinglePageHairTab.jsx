import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FetchSinglePageHairTab } from "../FetchAPI/Fetch";
import SinglePageRender from "./SinglePageRender";

export default function SPHairTab ( ){
    const [SPHairTab,SetSPHairTab] = useState({ })
    const Params = useParams( );

    const handleSPHairTabData = ( ) =>{
            FetchSinglePageHairTab(Params.id).then((res)=>{
               SetSPHairTab(res.data)
            })
    }

    useEffect(( )=>{
        handleSPHairTabData( );
    },[ ])

    return (
        <>
          <Box h={{base : '110px', md : '155px', lg : '220px'}}></Box>
          <SinglePageRender data={SPHairTab}/>
        </>
    )
}