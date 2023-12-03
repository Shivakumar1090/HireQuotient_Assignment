import { Box, Button, Typography } from "@mui/material";
import Chip from "../Chip";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Users from '../../Assets/bitmojis.png';

const FooterCard = () => {
    return (
        <Box sx={container} width={{xs: '80%' , lg: '60%'}} margin={{xs:"30px" , lg: '0px'}}  flexDirection={{xs: 'column' ,lg: 'row'}}>
            <Box sx={leftBox}  alignItems={{xs: 'center' , lg: 'start'}} textAlign={{xs: 'center' , lg: 'left'}}>
                <Box >
                    <Chip text={"DON'T MISS OUT"} icon={'👋'}/>
                </Box>
                <Typography fontSize={{xs: '35px' , md: '40px' , lg: '50px'}}variant="heading" marginBottom='10px' >
                    Unleash your <br/><span style={{color: '#FE8162'}}>Potential</span> with us
                </Typography>
                <Typography variant='text' marginBottom='20px' lineHeight={1.4}>
                    Join our community of ambitious individuals and organizations eager to make a difference.
                </Typography>
                <Button endIcon={<PlayCircleIcon />} sx={VioletButton}>Try out now</Button>
            </Box>
            <Box height='300px' width={{xs: '100%' , lg: '70%'}} marginTop={{xs: '20px' , lg: '0px'}}>
                <img src={Users} alt="" height='100%' width="100%" sx={{objectFit: 'cover'}}/>
            </Box>
        </Box>
      );
}

const container = {
    backgroundColor: '#fff',
    padding: {xs: '20px' , lg:'90px'},
    border: '2px solid #EDEDFA',
    borderRadius: '30px',
    display: 'flex',
    // width: '60%',
    justifyContent: 'space-between'
}

const VioletButton = {
    padding: '10px' , 
    fontSize: '16px', 
    backgroundColor: '#8247FF',
    color: '#fff',
    textTransform: 'capitalize', 
    fontWeight: 'bold',
    boxShadow: '0',
    width: '200px',
    borderRadius: '15px',
    
    border: '5px solid #8247FF',
    ":hover" : {
        border: '5px solid #bd9ffc',
        backgroundColor: '#8247FF',
        boxShadow: '0',
    }
}

const leftBox = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // textAlign: 'left',
    // alignItems: 'start',
}
 
export default FooterCard;