import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FetchSinglePageMomAndBabyCareTab } from "../FetchAPI/Fetch";
import SinglePageRender from "./SinglePageRender";

export default function SPMomAndBabyCareTab ( ){
    const [SPMomAndBabyCare,SetSPMomAndBabyCare] = useState({ })
    const Params = useParams( );

    const handleSPMomAndBabyCareData = ( ) =>{
            FetchSinglePageMomAndBabyCareTab(Params.id).then((res)=>{
               SetSPMomAndBabyCare(res.data)
            })
    }

    useEffect(( )=>{
        handleSPMomAndBabyCareData( );
    },[ ])

    return (
        <>
          <Box h={{base : '110px', md : '155px', lg : '220px'}}></Box>
          <SinglePageRender data={SPMomAndBabyCare}/>
        </>
    )
}