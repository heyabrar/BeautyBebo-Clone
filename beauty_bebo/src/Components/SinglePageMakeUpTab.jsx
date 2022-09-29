import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FetchSinglePageMakeUpTab } from "../FetchAPI/Fetch";
import SinglePageRender from "./SinglePageRender";

export default function SinglePageMakeUp ( ){
    const [SPMakeUp,SetSPMakeUp] = useState({ })
    const Params = useParams( );

    const handleSPMakeUpData = ( ) =>{
         FetchSinglePageMakeUpTab(Params.id).then((res)=>{
               SetSPMakeUp(res.data)
            })
    }

    useEffect(( )=>{
        handleSPMakeUpData( );
    },[ ])

    return (
        <>
          <Box h={{base : '110px', md : '155px', lg : '220px'}}></Box>
          <SinglePageRender data={SPMakeUp}/>
        </>
    )
}