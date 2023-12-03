import { Button } from "@mui/material";

const WhiteButton = ({text,endIcon,width}) => {
    const btnstyle = {
        padding: '8px' , 
        fontSize: '15px', 
        backgroundColor: '#fff',
        textTransform: 'capitalize', 
        fontWeight: 'bold',
        borderRadius: '15px',
        width: width ? width : '150px',
       
        boxShadow: '0',
        // marginTop: id === '2' ? '20px' : '40px',
        border: '1px solid #aaa',
        ":hover": {
            border: '1px solid #000',
            backgroundColor: '#fff',
            boxShadow: '0',
        }
    }
    return ( 
        <Button 
            size="small" 
            variant="contained" 
            sx={btnstyle}
            endIcon={endIcon}
        >{text}</Button>
     );
}
 
export default WhiteButton;