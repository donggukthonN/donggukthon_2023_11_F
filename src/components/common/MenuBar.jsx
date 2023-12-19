import { useRecoilState } from "recoil";
import { useState } from "react";
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
//
import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
//
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { styled, useTheme } from '@mui/material/styles';

const drawerWidth = 240;

const MenuBar = ({children}) => {
  const theme = useTheme();
  const [isDrawer, setIsDrawer] = useState(false);
  const drawerOpen = () => {
    setIsDrawer(true);
  };
  const drawerClose = () => {
    setIsDrawer(false);
  };

  return(
    <Box sx={{display: 'flex'}}>
      {/* <CssBaseline /> */}
      <AppBar  open={isDrawer} sx={{maxWidth: 400}}>
        <Toolbar style={{ backgroundColor: '#fcfdfb'}}>
          <Typography variant="h6" sx={{ fontFamily: 'YClover-bold', color: '#44403C'}} noWrap component="div">
            김동국님의 우표
          </Typography>
          <Box sx={{display: 'flex', flexGrow: 1,justifyContent: 'flex-end'}}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={drawerOpen}
              edge="end"
              sx={{ color: '#44403C', ...(isDrawer && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="right"
        open={isDrawer}
      >
        <DrawerHeader>
          <IconButton onClick={drawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
};

export default MenuBar; 

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'isDrawer',
})(({ theme, isDrawer }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(isDrawer && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));