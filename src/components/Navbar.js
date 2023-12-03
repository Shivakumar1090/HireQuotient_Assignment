import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WhiteButton from "./Buttons/whiteButton";

const drawerWidth = "100%";
const navItems = ['Features', 'Faq', 'Pricing','Testimonials'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
       {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
        >
            <MenuIcon />
        </IconButton>
        <Divider /> */}
        <List>
            {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary={item} />
                    </ListItemButton>
                </ListItem>
            ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar elevation={0} position="static"  component="nav" sx={appbar}>
        <Toolbar>
          
          <Typography
            variant="heading"
            component="div"
            fontSize="25px"
            sx={{ flexGrow: 1, display: { sm: 'block' } }}
          >
            ManageWise
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
            //   <Button key={item} sx={{ color: '#000' }}>
            //     {item}
            //   </Button>
                <NavItem navtext={item}/>
            ))}
            <WhiteButton text="Buy Template"></WhiteButton>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
// import { AppBar, Box, Button, Stack, Typography } from "@mui/material";
// import WhiteButton from "./Buttons/whiteButton";

// const Navbar = () => {
//     return ( 
//         <Box position="static" sx={appbar}>
//             <Typography variant="heading" fontSize='25px'>ManageWise</Typography>
//             <Box>
//                 <NavItem navtext={"Features"}/>
//                 <NavItem navtext={"FAQ"}/>
//                 <NavItem navtext={"Pricing"}/>
//                 <NavItem navtext={"Testimonials"}/>
//                 <WhiteButton text="Buy Template"></WhiteButton>
//             </Box>
//         </Box>
//      );
// }

const NavItem = ({navtext}) => {
    return(
        <Typography 
            variant="text" 
            fontSize='15px' 
            color="#000"
            sx={{':hover' : {color: '#8247FF'}, marginRight: '30px',cursor: 'pointer',fontWeight: '500'}} 
        >
            {navtext}
        </Typography>
    )
}

const appbar = {
    backgroundColor: '#FDF2EC',
    // padding: '15px',
    borderBottom: '1px solid #ddd',
   
}
 
// export default Navbar;