import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FetchSinglePageFragranceTab } from "../FetchAPI/Fetch";
import SinglePageRender from "./SinglePageRender";
import SpinnerLoader from "./SpinnerLoader";

export default function SPFragrance ( ){
    const [SPFragrance,SetSPFragrance] = useState({ })
    const Params = useParams( );
    const [Loading,SetLoading] = useState(false);

    const handleSPFragranceData = ( ) =>{
            SetLoading(true)
            FetchSinglePageFragranceTab(Params.id).then((res)=>{
                SetLoading(false)
               SetSPFragrance(res.data)
            })
    }

    useEffect(( )=>{
        handleSPFragranceData( );
    },[ ])

    return (
        <>
          <Box h={{base : '110px', md : '155px', lg : '220px'}}></Box>
          <SinglePageRender data={SPFragrance}/>
        </>
    )
}