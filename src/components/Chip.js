import { Stack, Typography } from "@mui/material";

const Chip = ({text,icon}) => {
    return ( 
        <Stack direction="row" spacing={1} sx={chipstyle}>
            <Typography fontSize='14px'>{icon}</Typography>
            <Typography color="#8247FF" fontSize='11px' variant="heading" lineHeight={2}>{text}</Typography>
        </Stack>
    );
}
 
const chipstyle = {
    backgroundColor: '#fff',
    padding: '2px 5px 2px 5px',
    border: '2px solid #EDEDFA',
    borderRadius: '5px',
}

export default Chip;