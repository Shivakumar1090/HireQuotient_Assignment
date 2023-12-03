import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import Chip from "../Chip";
import CapCard from "./card";
import smartTaskImg from '../../Assets/smtm.png';
import {CapabilityStaticData} from '../StaticData/data';

const CapabilityPage = () => {
    return ( 
        <Box sx={container} marginBottom="50px">
            <Box>
                <Chip text={"PREMIER FEATURES"} icon={'🔥'}/>
            </Box>
            <Typography variant='heading' fontSize={{xs: '40px' , sm: '50px'}} marginBottom='20px' >
                Discover our product's <span style={{color: '#FE8162'}}>Capabilities</span> 
            </Typography>
            <Typography variant='text' marginBottom='20px'>
                Don't settle for mediocrity - embrace the future of management <br /> with Manage Wise.
            </Typography>
            <Grid
                container 
                direction={{xs: 'column' , lg: 'row'}}
                justifyContent="center"  
                alignItems="center"
                rowSpacing={{ xs: 4, lg: 0}} 
                columnSpacing={{ xs: 0,lg: 5}}
                sx={{margin: '50px 0px 50px 0px' }}
            >
                <Grid item lg={4} md={5} sm={3}  margin={{xs: '0px 20px 0px 20px' , lg: '0px'}}>
                    <Box margin={{xs: '20px' , md: '0px'}}  sx={blueBox}>
                        <Stack spacing={2}>
                            <Box ><Typography fontSize='20px'>⭐️</Typography></Box>
                            <Typography variant='heading' fontSize={{xs:'30px' , md:'35px'}} lineHeight={1.3}> 
                                Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.
                            </Typography>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item md={5} xs={3} sm={4}>
                    <CapCard 
                        image={smartTaskImg}
                        cardHead={"Smart Task Management"} 
                        cardCaption={"Say goodbye to chaos with our smart task management system"}/>
                </Grid>
            </Grid>

            <Grid
                container
                direction={{xs: 'column' , lg: 'row'}}
                justifyContent="center"  
                alignItems="center"
                rowSpacing={{ xs: 4,lg: 0 }} 
                columnSpacing={{ xs: 0, lg: 3 }}
            >
                {CapabilityStaticData.map(data => {
                    return(
                        <Grid xs={5} lg={3} md={5}  item key={data.id}>
                            <CapCard cardHead={data.cardHead} cardCaption={data.cardCaption} image={data.image}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
     );
}

const blueBox = {
    backgroundColor: '#EDEDFA',
    borderRadius: '20px',
    padding: '30px',
    height: '330px', 
    display: 'flex', 
    alignItems: 'flex-end',
    textAlign: 'left' ,
}

const container = {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '150vh',
}
 
export default CapabilityPage;