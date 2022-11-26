import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import FragranceTab from "./FragranceTab";
import HairTab from "./HairTab";
import MakeUpTab from "./MakeUpTab";
import MomAndBabyTab from "./MomAndBabyTab";

export default function HomeTabs ( ){
    return (
        <>
        <Tabs w={{base : '100%', md :'85%'}}  m='auto' mt='3%' colorScheme={'pink'}>
            <TabList className="HomeTablist">
                <Tab w={'25%'} >
                    <Box>
                       <Image m='auto' boxSize={{base : '30px', md :'40px'}} color='white' src="https://www.beautybebo.com/pub/media/catalog/category/makeup_1.png"/>
                       <Text fontSize={{base : '10px', md : '14px', lg : '16px'}}>Make Up</Text>
                    </Box>
                </Tab>

                <Tab w={'25%'} >
                   <Box>
                       <Image m='auto' boxSize={{base : '30px', md :'40px'}} src="https://www.beautybebo.com/pub/media/catalog/category/hair.png"/>
                       <Text fontSize={{base : '10px', md : '14px', lg : '16px'}}>Hair</Text>
                    </Box>
                </Tab>

                <Tab w={'25%'}>
                     <Box>
                       <Image m='auto' boxSize={{base : '30px', md :'40px'}} src="https://www.beautybebo.com/pub/media/catalog/category/mom-baby-care.png"/>
                       <Text fontSize={{base : '10px', md : '14px', lg : '16px'}}>Mom & Baby Care</Text>
                    </Box>
                </Tab>

                <Tab w={'25%'}>
                    <Box>
                       <Image m='auto' boxSize={{base : '30px', md :'40px'}} src="https://www.beautybebo.com/pub/media/catalog/category/fragrance_3.png"/>
                       <Text fontSize={{base : '10px', md : '14px', lg : '16px'}}>Fragrance</Text>
                    </Box>
                </Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <MakeUpTab/>
                    </TabPanel>
                    <TabPanel>
                        <HairTab/>
                    </TabPanel>
                    <TabPanel>
                    <MomAndBabyTab/>
                    </TabPanel>
                    <TabPanel>
                        <FragranceTab/>
                    </TabPanel>
                </TabPanels>
         </Tabs>
        </>
    )
}