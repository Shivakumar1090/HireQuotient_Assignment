import { Button } from "@mui/material";

const VioletButton = ({text,endIcon,width}) => {
    const btnStyle = {
        padding: '5px' , 
        fontSize: '16px', 
        backgroundColor: '#8247FF',
        color: '#fff',
        textTransform: 'capitalize', 
        fontWeight: 'bold',
        boxShadow: '0',
        width: width ? width: '150px' ,
        borderRadius: '15px',
        border: '5px solid #8247FF',
        ":hover" : {
            border: '5px solid #bd9ffc',
            backgroundColor: '#8247FF',
            boxShadow: '0',
        }
    }
    return ( 
        <Button
            endIcon={endIcon}
            variant="contained"
            sx={btnStyle}
        >{text}</Button>
     );
}
 
export default VioletButton;