import { useEffect, useRef, useState } from "react";
import {Container, Image} from '@chakra-ui/react'
const colors = [
{img : "https://www.beautybebo.com/pub/media/ads/home-slider/Slider_banner_1-min.jpg"}, 
{img : "https://www.beautybebo.com/pub/media/ads/home-slider/Ponds_Forent_Banner_6-min.jpg"}, 
{img : "https://www.beautybebo.com/pub/media/ads/home-slider/Mamaearth_banner_1-min.jpg"},
];
const delay = 2500;

export default function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
        <Container className="slideshow" maxW={{base : '', md : '80%', lg : '90%'}}>
        <div className="slideshowSlider"  style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} >
            {colors.map((backgroundColor, index) => (
            <div className="slide">
               <Image shadow='lg' m='auto' src={backgroundColor.img}/>
            </div>
            ))}
        </div>
        </Container>
    </>
  );
}

