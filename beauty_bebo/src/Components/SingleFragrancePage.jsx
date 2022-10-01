import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FetchSPFragranceData } from "../FetchAPI/Fetch";
import SinglePageRender from "./SinglePageRender";
import SpinnerLoader from "./SpinnerLoader";

export default function SingleFragrancePage ( ){

    const [SingleFragranceData,SetSingleFragranceData] = useState({ });
    const Params = useParams( );
    const [Loading,SetLoading] = useState(false)

    const handleSinglePageHairData = ( ) =>{
      SetLoading(true);
      FetchSPFragranceData(Params.id).then((res)=>{
        SetLoading(false);
        SetSingleFragranceData(res.data)
      })
    }

    useEffect(( )=>{
        handleSinglePageHairData( );
    },[ ]);

    return (
        <>
         <Box h={{base : '125px', md : '165px', lg : '220px'}}></Box>
         <Box  width='30%' m='auto' display='flex' justifyContent={'center'} position='relative' top={{base : '100px', md : '70px', lg : '150px'}}>
              {Loading && <SpinnerLoader/>}
            </Box>
         <SinglePageRender data={SingleFragranceData}/>
        </>
    );
};