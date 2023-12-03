import { Box, Grid, Typography } from "@mui/material";
import Chip from "../Chip";
import PriceCard from "./card";

const PricingPage = () => {
    return ( 
        <Box sx={container}>
            <Box >
                <Chip text={"PRICING"} icon={'💲'}/>
            </Box>
            <Typography fontSize={{xs: '35px' , md: '40px' , lg: '50px'}} variant="heading" marginBottom='20px' >
                Select your ideal  <span style={{color: '#FE8162'}}>Pricing</span> plan
            </Typography>
            <Typography variant='text' marginBottom='20px'  fontSize={{xs: '15px' , md: '18px'}}>
                At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.
            </Typography>
            <Grid 
                container 
                direction={{xs: 'column' , lg: 'row'}}
                justifyContent="center"  
                alignItems="center"
                rowSpacing={{xs: 3,lg: 0}}
                columnSpacing={{ xs: 0, lg: 2 }}
            >
                {
                    PriceData.map(data => {
                        return (
                            <Grid item lg={2.7} xs={12}>
                                <PriceCard label={data.label} amount={data.amount} id = {data.id} Plans = {data.Plans}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
     );
}

const container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', 
    textAlign: 'center',

}

const PriceData = [
    {
        id: "0",
        label: 'FREE',
        amount: '0',
        Plans : ["Access to all basic features",
        "Reporting and analytics",
        "Up to 5 individual users",
        "Chat and email support",],
    },
    {
        id: '1',
        label: 'STANDARD',
        amount: '25',
        Plans: ["Access to all basic features",
        "Reporting and analytics",
        "Up to 5 individual users",
        "Chat and email support",
        "3+ integrations",
        "Account performance reporting",],
    },
    {
        id: '2',
        label: 'BUSINESS',
        amount: '42',
        Plans: ["Access to all basic features",
        "Reporting and analytics",
        "Up to 5 individual users",
        "Chat and email support",
        "3+ integrations"],
    }
]
 
export default PricingPage;