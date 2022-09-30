import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FetchSPFragranceData } from "../FetchAPI/Fetch";
import SinglePageRender from "./SinglePageRender";

export default function SingleFragrancePage ( ){

    const [SingleFragranceData,SetSingleFragranceData] = useState({ });
    const Params = useParams( );

    const handleSinglePageHairData = ( ) =>{
      FetchSPFragranceData(Params.id).then((res)=>{
        SetSingleFragranceData(res.data)
      })
    }

    useEffect(( )=>{
        handleSinglePageHairData( );
    },[ ]);


    return (
        <>
         <Box h={{base : '125px', md : '165px', lg : '220px'}}></Box>
         <SinglePageRender data={SingleFragranceData}/>
        </>
    )
}