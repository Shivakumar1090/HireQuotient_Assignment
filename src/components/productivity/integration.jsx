import { Box, Typography } from "@mui/material";
import Chip from "../Chip";
import IntegrtionImg from '../../Assets/integration.png';

const IntegrationPage = () => {
    return ( 
        <Box sx = {container} paddingTop='100px'>
            <Box width={{xs: '90%' , lg: '40%'}} display="flex" flexDirection="column" alignItems="center" >
                <Box >
                    <Chip text={"INTEGRATIONS"} icon={'👋'}/>
                </Box>
                <Typography fontSize={{xs: '35px' , lg: '45px'}} variant="heading" marginBottom='20px' >
                    Enable <span style={{color: '#FE8162'}}>integration</span> with other popular tools and platforms
                </Typography>
                <Typography variant='text' fontSize={{xs: '15px' , lg: '19px'}} marginBottom='20px'>
                    Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms.
                </Typography>
            </Box>
            <Box width={{xs: '90%' , lg: '35%'}} marginTop='50px'>
                <img src={IntegrtionImg} alt="" width='100%'/>
            </Box>
        </Box>
     );
}

const container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#1C1C1C',
    color: '#fff',
}
 
export default IntegrationPage;