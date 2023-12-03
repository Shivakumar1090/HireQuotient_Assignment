import { Avatar, Box, Stack, Typography } from "@mui/material";

const TestimonialCard = ({name,review,job,img,}) => {
    return ( 
        <Box width={{xs: '210px' , sm: '260px' , md: '230px', lg:'290px'}} minHeight='300px' sx={card}>
            <Typography fontSize='20px'>
                "{review}"
            </Typography>
            <Stack  direction='row'spacing={2} marginTop='20px'>
                <Avatar alt={name} src="/static/images/avatar/1.jpg"/>
                <Box>
                    <Typography>{name}</Typography>
                    <Typography>{job}</Typography>
                </Box>
            </Stack>
        </Box>
     );
}

const card = {
    padding: '23px',
    
    border: '2px solid #EDEDFA',
    borderRadius: '25px',
}
 
export default TestimonialCard;