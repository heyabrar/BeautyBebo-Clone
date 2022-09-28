import { Box,Collapse,Container,Divider,Text } from "@chakra-ui/react";
import { useState } from "react";

export default function WelcomeToBeautyProducts() {
    const [show, setShow] = useState(false)
  
    const handleToggle = () => setShow(!show)
  
    return (
      <>
      <Container  maxW='90%' mt={'20px'}>
        <Collapse startingHeight={200} in={show}>
            <Box >
                <Text fontSize={{base : '16px', md : '24px'}} color='gray'>Welcome to Beauty Products Online Shopping India- Beauty Bebo</Text>
                <Divider/>
            </Box>
            <Box mt='30px' fontSize='14px'>
                <Text>If you are looking for a flawless radiant face outlook for a special occasion, then we have the perfect tips for you. 
                    As you must already know, the conspicuous flawless outlook you want for your wedding, a date, a dinner party or for a 
                    modelling competition is only achieved through makeup. <br />
                    Don’t get me wrong, you are naturally beautiful, that’s obvious. 
                    But everyone else is, so how will you will you ensure that you are different? Read on for hot irresistible tips before <b style={{color : 'RGBA(0, 0, 0, 0.64)'}}>you buy 
                    beauty products online!</b>
                </Text>

                <Text mt='10px'>
                        <b style={{color : 'RGBA(0, 0, 0, 0.64)'}}>Clean Your Face First! </b> <br />
                        Before embarking on any makeup, always ensure that your face is clean. Need some assistance in absolute cleaning?
                        Visit our range of face wash beauty products online for your best pick. We have made it our duty to carefully select the best 
                        products for you, so that you don’t experience breaks and allergies after use. So now you can be confident that your buy cosmetic 
                        online shopping will be worth your time and effort.
                </Text>

                <Text mt='10px'>
                      Wondering then how you will make a choice among the spectrum available? Most of our products are purely natural in ingredient, 
                      so you can as well check for your favorite ingredient combination. If not sure, we are still here for you. We can help narrow down 
                      your options, together with you. 
                </Text>

                <Text mt='10px'>
                        <b style={{color : 'RGBA(0,0,0,0.64'}}>Apply a Moisturizer</b> <br />
                        Next, you need a moisturizer in your <b>makeup kit</b>. Moisturizers keep your face glowing regardless of the mood of the day. 
                        Most essentially, moisturizers will keep your skin hydrated from the outside, while your constant hydration by taking fluids 
                        enhance the efforts. <br />
                        Our moisturizers range from matte, ponds, creams and gels, all to ensure that your specific need is met. Just go through 
                        the list for a better selection, which will aid you through your cosmetic online shopping. With the best moisturizer, it will also 
                        work as a primer. Hence, you don’t have to buy an extra product, which saves you some cost.
                </Text>

                <Text mt='10px'>
                    <b style={{color : 'RGBA(0,0,0,0.64'}}> Get Your Makeup Kit</b> <br />
                    Your general makeup will consist, of more than the moisturizer. Some o the other major components include the foundation, 
                    which you use on your whole face. Then there is the concealer, which you concentrate on areas of the face you want to hide. 
                    There is the brightener and highlighter, which you will highlight areas you want conspicuous on your face.
                    And don’t forget to look into our range of toners for your best shot at a firmer face and neck.
                    We have the most effective beauty products India has dreamt of to replenish your kit, so don’t miss out!
                </Text>
            </Box>  
        </Collapse>

        <Text size='sm' onClick={handleToggle} mt='1rem' color='#dd0285' cursor='pointer'>
          Read {show ? 'Less' : 'More'}
        </Text>
        </Container>
      </>
    )
  }
