import { Box, Stack, Typography } from "@mui/material";

const ProdCard = ({cardHead,cardCaption,IconName}) => {
    return ( 
        <Stack  height={{xs: '280px' , sm: '300px'}} direction='column' spacing={2} style={container}>
            <Box>
                <IconName sx={icon} />
            </Box>
            <Typography variant="heading" fontSize={{xs: '20px' , sm: '23px'}} lineHeight={1.4}>
                {cardHead}
            </Typography>
            <Typography variant="text" fontSize={{xs: '12px' , sm: '14px'}}  lineHeight={1.5}>
                {cardCaption}
            </Typography>
        </Stack>
     );
}

const container = {
    backgroundColor: '#212121',
    padding: '25px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '30px',
   
    border: '1px solid #222'
}

const icon = {
    backgroundColor: '#8247FF',
    borderRadius: '10px',
    padding: '10px',
    fontSize: '30px',
}
 
export default ProdCard;