import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: 'Outfit',
        color: '#000',
        text: {
            fontFamily: 'Inter',
            color: 'grey',
            fontSize: '18px',
        },
        heading: {
            fontFamily: 'Outfit',
            fontWeight: '700',
            lineHeight: '1.1',
        }
    },
    palette: {
        primary: {
            main: "#fff",
        },
        dark : {
            main: '#000',
        },
    }
})

export default theme;