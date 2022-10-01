import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";
import { FetchSPMomAndBabyCarePageData } from "../FetchAPI/Fetch";
import SinglePageRender from "./SinglePageRender";
import SpinnerLoader from "./SpinnerLoader";

export default function SingleMBCPage ( ){

    const [SPMBCData,SetSPMBCData] = useState({ });
    const Params = useParams( );
    const [Loading,SetLoading] =  useState(false);

    const handleSPMBC = ( ) =>{
        SetLoading(true)
        FetchSPMomAndBabyCarePageData(Params.id).then((res)=>{
            SetSPMBCData(res.data)
            SetLoading(false)
        });
    };

    useEffect(( )=>{
        handleSPMBC( );
    }, [ ]);
    
    return (
        <>
            <Box h={{base : '115px', md : '145px', lg : '200px'}}></Box>
                 <Box  width='30%' m='auto' display='flex' justifyContent={'center'} position='relative' top={{base : '100px', md : '70px', lg : '150px'}}>
                    {Loading && <SpinnerLoader/>}
                </Box>
            <SinglePageRender data={SPMBCData}/>
        </>
    );
};