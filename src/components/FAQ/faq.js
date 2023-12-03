import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import Chip from "../Chip";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import {questionsData} from '../StaticData/data';

const FaqPage = () => {
    const [expanded, setExpanded] = useState([]);

    const handleAccordionChange = (panelId) => (event, isExpanded) => {
        setExpanded((prev) =>
            isExpanded ? [...prev, panelId] : prev.filter((id) => id !== panelId)
        );
    };

    return ( 
        <Box sx={container} flexDirection={{xs: 'column' , lg: 'row'}}>
            <Box sx={leftBox} alignItems={{xs: 'center' , lg: 'start'}} textAlign={{xs: 'center' , lg: 'left'}} >
                <Box >
                    <Chip text={"FAQ"} icon={'🙋‍♀️'}/>
                </Box>
                <Typography fontSize={{xs: '40px' , md: '50px' , lg: '70px'}} variant="heading" marginBottom='20px' >
                    Need <br/><span style={{color: '#FE8162'}}>Answers ?</span> 
                </Typography>
                <Typography variant='text' marginBottom='20px'>
                    Check out our most commonly asked questions below to find the information you need.
                </Typography>
            </Box>
            <Box width={{xs: '140%' ,sm: '110%', md: '90%', lg: '70%'}} >
                {questionsData.map(faq => {
                    return (
                        <Accordion  sx={accordinStyle} key={faq.id} onChange={handleAccordionChange(faq.id)}>
                            <AccordionSummary
                                expandIcon={
                                    expanded.includes(faq.id) ? (
                                        <CloseIcon sx={{ color: '#8247FF' }} />
                                    ) : (
                                        <AddIcon sx={{ color: '#8247FF' }} />
                                    )
                                }
                                sx = {accordinSummary}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography 
                                    variant="heading" 
                                    fontSize={{xs: '17px' , md: '20px' , lg: '25px'}}
                                    sx={{color: expanded.includes(faq.id) ? '#8247FF' : 'inherit', }}
                                >
                                    {faq.summary}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="text" fontSize='14px'>
                                    {faq.details}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })}
            </Box>
        </Box>
     );
}

const accordinStyle = {
    backgroundColor: '#F7F8FD',
    borderRadius: '20px',
    boxShadow: '0',
    margin: '10px 0',
    border: 'none',
    borderBottom: 'none',
}

const accordinSummary = {
    // marginBottom: -1,
    borderBottom: 'none'
}


const container = {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '90vh',
    alignItems: 'center',
    paddingLeft: '70px',
    paddingRight: '70px',
}

const leftBox = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // height: '90vh',
    // textAlign: 'left',
    
}
 
export default FaqPage;