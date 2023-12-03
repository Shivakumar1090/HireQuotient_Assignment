import { Box, Grid, Typography } from "@mui/material";
import Chip from "../Chip";

import { ProdCardData } from "../StaticData/data";

import ProdCard from "./card";

const ProductivityPage = () => {
    return ( 
        <Box sx={container}>
            <Box 
                marginTop={{xs: '50px' , lg: '0px'}} 
                sx={{display: 'flex', flexDirection: 'column', alignItems: 'start',width: {xs: '90%' ,md: '80%', lg: '70%'}}}
            >
                <Box >
                    <Chip text={"AND MORE..."} icon={'🤩'}/>
                </Box>
                <Typography fontSize={{xs: '35px' , md: '45px', lg: '55px'}} variant="heading" marginBottom='20px' >
                    Explore an array of features that elevate your {" "}<span style={{color: '#FE8162'}}>Productivity</span>  to new heights 
                </Typography>
                <Typography  variant='text' marginBottom='20px'>
                    Discover the tools that will revolutionize the way you manage and optimize your operations 
                </Typography>
            </Box>
            
            <Grid
                container
                direction={{xs: 'column' , lg: 'row'}}
                justifyContent="center"  
                alignItems="center"
                rowSpacing={{ xs: 2,  md: 4, lg: 0 }} 
                columnSpacing={{ xs: 0, lg: 3 }}
                width={{xs: '90%' , md: '80%', lg: '70%'}}
                
            >
                {ProdCardData.map(data => {
                    return(
                        <Grid md={4} item key={data.id}>
                            <ProdCard cardHead={data.head} cardCaption={data.caption} IconName={data.icon}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
     );
}




 
const container = {
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    minHeight: '100vh', 
    textAlign: 'left',
    backgroundColor: '#1C1C1C',
    margin: 'auto',
}
export default ProductivityPage;