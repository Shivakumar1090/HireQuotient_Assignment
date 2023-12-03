import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';

const PriceCard = ({label,amount,id,Plans}) => {
    const card = {
        backgroundColor: id === '1' ? "#1C1C1C": "#EDEDFA",
        // backgroundColor: '#EDEDFA',

        padding: '25px',
        textAlign: 'start',
        borderRadius: '30px',
        // width: '300px',
        color: id === '1' ? '#fff' : "#000",
        // height: '300px',
    }
    
    const chip = {
        backgroundColor: '#fff',
        color: 'orange',
        fontWeight: '700',
        fontSize: '12px',
    }

    const btn2 = {
        padding: '9px' , 
        fontSize: '15px', 
        backgroundColor: '#fff',
        textTransform: 'capitalize', 
        fontWeight: 'bold',
        borderRadius: '15px',
        minWidth: '150px' ,
        boxShadow: '0',
        marginTop: id === '2' ? '20px' : '40px',
        border: '1px solid #FFF',
        ":hover": {
            border: '1px solid #000',
            backgroundColor: '#fff',
            boxShadow: '0',
        }
    }

    return ( 
        <Stack direction='column' spacing={2} style={card} width={{xs: '300px'}}>
            <Box><Chip label={label} sx={chip} size="small"/></Box>
            <Typography variant="heading" fontSize={{xs:'40px' , md:'50px'}}>${amount}<span style={{fontSize: '15px'}}>/month</span></Typography>
            <Stack direction='column' spacing={1}>
                {Plans.map(plan => {
                    return(
                        <Stack direction='row' spacing={1}>
                            <DoneIcon sx={{color: '#43D67E'}}/>
                            <Typography variant='text' fontSize='14px'>{plan}</Typography>
                        </Stack>
                    )
                })}
            </Stack>
            <Box >
                <Button  size="small" variant="contained" sx={id === '1' ? btn1 : btn2}>Get Started</Button>
            </Box>
        </Stack>
     );
}



const btn1 = {
    padding: '5px' , 
    fontSize: '16px', 
    backgroundColor: '#8247FF',
    color: '#fff',
    textTransform: 'capitalize', 
    fontWeight: 'bold',
    boxShadow: '0',
    width: '150px',
    borderRadius: '15px',
    border: '5px solid #8247FF',
    ":hover" : {
        border: '5px solid #bd9ffc',
        backgroundColor: '#8247FF',
        boxShadow: '0',
    }
}


export default PriceCard;