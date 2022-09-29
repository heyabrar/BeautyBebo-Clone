import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FetchSinglePageHomeSlider } from "../FetchAPI/Fetch";
import SinglePageRender from "./SinglePageRender";

export default function SinglePageDisplaySlider ( ){
    const [SPHomeSlider,SetSPHomeSlider] = useState({ })
    const Params = useParams( );

    const handleSPHomeSliderData = ( ) =>{
            FetchSinglePageHomeSlider(Params.id).then((res)=>{
               SetSPHomeSlider(res.data)
            })
    }

    useEffect(( )=>{
        handleSPHomeSliderData( );
    },[ ])

    return (
        <>
          <Box h={{base : '110px', md : '155px', lg : '220px'}}></Box>
          <SinglePageRender data={SPHomeSlider}/>
        </>
    )
}