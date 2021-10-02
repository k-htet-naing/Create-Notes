import React from 'react';
import SubjectIcon from '@mui/icons-material/Subject';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useHistory } from 'react-router';
import Drawer from '@mui/material/Drawer';
import { Typography } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import { Box } from '@mui/system';
import { CssBaseline } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { upperCase } from 'lodash';
import { Divider } from '@mui/material';

const drawerWidth = 200;
const menuItems = [
    {
        title: "My Notes",
        path: "/",
        icon: <SubjectIcon />
    },
    {
        title: "Create Notes",
        path: "/create",
        icon: <AddCircleOutlineIcon />
    }
]
// const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function Layout({children}) {
    const mystyle = {
        alignItem: 'center',
        margin: 20
    };
    const root = {
        width: '100%',
        background: '#f9f9f9'
    };
    const ava = {
        textTransform: 'uppercase',
        margin: 20
    }

    const history = useHistory();
    return(
        <Box sx={{ display: 'flex' }}>
            <AppBar
             position="fixed"
             sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, bgcolor: "#e76f51" }}>
                 <Toolbar>
                     <Typography variant='h6' sx={{flexGrow: 1}}>
                         Collection of Notes
                     </Typography>
                     <Typography variant='h6' style={ava}>
                         Pikachu
                     </Typography>
                     <Avatar alt="Pikachu" src="/pikachu-avatar.png" />
                 </Toolbar>
             </AppBar> 
             {/* <Offset /> */}
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                     width: drawerWidth,
                     boxSizing: 'border-box',
                     },
                 }}
                variant="permanent"
                anchor="left"
             >
                 <Box
                 sx = {{
                     bgcolor: '#f9f9f9',
                     padding: 3
                 }}
                 >
                     <Typography color = 'textSecondary' variant='h6'>
                         PIKACHU-NOTES
                     </Typography>
                 </Box>
                 <Divider />
                 <List>
                     {menuItems.map(menu => (
                         <ListItem
                         sx = {{ bgcolor: '#e76f51', 
                         color: 'white',
                         '&:hover': {
                             bgcolor: '#e14b1e'
                         }}}
                         button
                         key = {menu.title}
                         onClick = {()=> history.push(menu.path)}
                         >
                             <ListItemIcon sx={{color: 'white'}}>
                                 {menu.icon}
                             </ListItemIcon>
                             <ListItemText 
                              primary = {menu.title}
                             />
                         </ListItem>
                     ))}
                 </List>
                 
             </Drawer>
             <Box style = {root}>
                 <Toolbar />
                 {children}
             </Box>
            {/* <div style={root}>
                {children}
             </div> */}
        </Box>
    )
}
export default Layout