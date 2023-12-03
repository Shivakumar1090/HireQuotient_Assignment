import { Box, Divider, Stack, Typography } from "@mui/material";
import FooterCard from "./card";

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return ( 
        <Box style={container} >
            <FooterCard />
            <Box 
                margin="100px 0px 100px 0px" 
                display="flex" 
                flexDirection={{xs: 'column' , md: 'row'}} 
                justifyContent={{xs: 'center' , md: 'space-between'}}
                width='70%' 
                marginTop="50px"
            >
                <Typography variant="heading" fontSize='30px'>ManageWise</Typography>
                <Stack marginTop={{xs:'20px' , md: '0px'}} direction='column' spacing={1} textAlign={{xs: 'center' , md: 'left'}}>
                    <Typography>Features</Typography>
                    <Typography>Faq</Typography>
                    <Typography>Pricing</Typography>
                    <Typography>Testimonials</Typography>
                </Stack> 
            </Box>
            <Divider />
            <Box position="absolute" sx={{bottom: '20px'}} width='70%' display="flex" flexDirection={{xs: 'column' , md: 'row'}} justifyContent={{xs: 'center' , md: 'space-between'}} alignItems="center">
                <Typography fontSize="18px">2022 ManageWise, Inc.</Typography>
                <Stack spacing={2} direction="row" marginTop={{xs: '10px' , md: '0px'} }>
                    <InstagramIcon />
                    <TwitterIcon />
                    <LinkedInIcon />
                </Stack>
            </Box>
        </Box>
     );
}

const container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', 
    position: 'relative',
    textAlign: 'center',
    backgroundImage: 'linear-gradient(#fff,#FDF2EC)',
}
 
export default Footer;