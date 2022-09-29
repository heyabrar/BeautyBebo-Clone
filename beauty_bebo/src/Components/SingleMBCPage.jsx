import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";
import { FetchSPMomAndBabyCarePageData } from "../FetchAPI/Fetch";
import SinglePageRender from "./SinglePageRender";

export default function SingleMBCPage ( ){

    const [SPMBCData,SetSPMBCData] = useState({ });
    const Params = useParams( );

    const handleSPMBC = ( ) =>{
        FetchSPMomAndBabyCarePageData(Params.id).then((res)=>{
            SetSPMBCData(res.data)
        })
    }

    useEffect(( )=>{
        handleSPMBC( );
    }, [ ]);
    return (
        <>
        <Box h={{base : '115px', md : '145px', lg : '200px'}}></Box>
         <SinglePageRender data={SPMBCData}/>
        </>
    )
}