import React from 'react';
import { Typography, Stack, Box } from '@mui/material';

import Chip from './Chip';
import Navbar from './Navbar';

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

import dashboard from '../Assets/dashboard.png';

import WhiteButton from './Buttons/whiteButton';
import VioletButton from './Buttons/violetButton';

const Homepage = () => {
    return(
        <Box  height= {{xs: '100vh' , md: '150vh'}} >
        <Navbar />
        <Stack direction="column" spacing={3} style={container}>
            <Box >
                <Chip text={"WELCOME TO MANAGE WISE!"} icon={'👋'}/>
            </Box>
            <Typography fontSize={{xs: '50px' , md: '65px', lg: '75px'}} variant="heading">
                Empower your business with <span style={{color: '#FE8162'}}>Strategic</span> insights
            </Typography>
            <Typography variant='text'>
                Powerful management platform designed to streamline your business operations, boost productivity, and drive success
            </Typography>
            <Stack direction={{xs: 'column' , md: 'row'}} spacing={{xs: 2,md: 4}} >
               
                <VioletButton endIcon={<ArrowCircleRightIcon />} text="Get Started" width='200px'/>
                <WhiteButton endIcon={<PlayCircleIcon />} width='200px' text="Watch Demo"/>
               
            </Stack>
            <Box width={{xs: '90%' , md: '80%', lg: '70%'}} height={{xs: '200px' , md:'350px', lg: '550px'}}>
                <img src={dashboard} alt="" width='100%'  height='100%'/>
            </Box>
        </Stack>
        </Box>
    )
}

const container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', 
    textAlign: 'center',
    backgroundImage: 'linear-gradient(#FDF2EC,#fff)',
    padding: '10px',
}

const btn1 = {
    padding: '10px' , 
    fontSize: '16px', 
    backgroundColor: '#8247FF',
    color: '#fff',
    textTransform: 'capitalize', 
    fontWeight: 'bold',
    border: '5px solid #bd9ffc',
    minWidth: '200px',
    borderRadius: '15px',
}

export default Homepage;
