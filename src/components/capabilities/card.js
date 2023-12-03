import { Box, Stack, Typography } from "@mui/material";

const CapCard = ({image,cardHead,cardCaption}) => {
    return ( 
        <Box margin={{xs: '0px 20px 0px 20px' , lg:'0px'}} style={card}>        
            <Box height={{xs : '250px',md: '300px'}}  style={imageContainer}>
                <img src={image} alt="" style={img} />
            </Box>
            <Stack direction='column' spacing={1} padding='20px'>
                <Typography variant="heading" fontSize='20px' textAlign='left'>{cardHead}</Typography>
                <Typography variant='text' fontSize='14px'>{cardCaption}</Typography>
            </Stack>
        </Box>
    );
}
const imageContainer = {
    // width: '100%',
    overflow: 'hidden',
    borderRadius: '25px',
}

const img = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    padding: '10px'
}

const card = {
    border: '2px solid #EDEDFA',
    borderRadius: '25px',
    textAlign: 'left',
}
 
export default CapCard;