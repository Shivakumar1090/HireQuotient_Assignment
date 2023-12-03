import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import Chip from "../Chip";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialsData } from "../StaticData/data";
import TestimonialCard from "./card";

const Testimonials = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 200,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return ( 
        <Box sx={container}>
            <Box 
                sx={{display: 'flex', flexDirection: 'column', alignItems: 'start',}}
                marginLeft={{xs: '20px' , md: '0px'}}
            >
                <Box >
                    <Chip text={"TESTIMONIALS"} icon={'🧡'}/>
                </Box>
                <Typography fontSize={{xs: '35px' , md: '45px', lg: '55px'}} variant="heading" marginBottom='20px' >
                    Hear from our {" "}<span style={{color: '#FE8162'}}>Satisfied</span> clients
                </Typography>
                <Typography  variant='text' marginBottom='20px'>
                    Discover why our clients love working with us. Read their testimonials and learn how we has helped businesses.
                </Typography>
            </Box>
            <Box width={{md: '70%', xs: '80%'}} sx={slider}>
                <Slider {...settings}>
                    {
                        TestimonialsData.map(testimonial => {
                            return(
                                <TestimonialCard 
                                    key={testimonial.id} 
                                    review={testimonial.review} 
                                    name={testimonial.name} 
                                    job={testimonial.job}
                                    img={testimonial.img}
                                />
                            )
                        })
                    }
                </Slider>
            </Box>
        </Box>
     );
}

const slider = {
    // -moz-box-shadow: 13px 13px 0px 0px #FFFFFF;
    // -webkit-box-shadow: 13px 13px 0px 0px #FFFFFF;
     boxShadow: "0px -5px  50px 0px rgb(255,255,255,2) inset"
}

const container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
}
 
export default Testimonials;