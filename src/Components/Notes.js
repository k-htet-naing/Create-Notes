import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Avatar } from '@mui/material';
import { green } from 'jest-matcher-utils/node_modules/chalk';
import { blue, pink, yellow } from '@mui/material/colors';

function Notes() {
    const mystyle = {
        display: 'flex',
        margin: 20
    };
    const avatar = {
        backgroundColor: (item) => {
            if(item.category == 'personal') {
                return yellow[700]
            }
        }
    }

    const [items, setItems] = useState([])

    useEffect(()=> {
        fetch('http://localhost:8000/notes')
         .then(res => res.json())
         .then(data => setItems(data))
    })

    const handleDelete = async (id) => {
        await fetch('http://localhost:8000/notes/' + id, {
            method: 'DELETE'
        })

        const newItems = items.filter(item => item.id != id)
        setItems(newItems)
    }
    return (
        <Box style={mystyle}>
            {/* <AppBar
             position="fixed"
             sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
             >
                 <Toolbar>
                     <Typography variant="h6" noWrap component="div">
                        Today's Date
                     </Typography>
                 </Toolbar>
             </AppBar> */}
            <Grid container spacing={4}>
                {items.map(item => (
                    <Grid item xs={12} sm={6} md={4}>
                        <Card key={item.id}>
                             <CardHeader
                              avatar = {
                                  <Avatar sx = {{bgcolor: yellow[900]}}>
                                      {item.title[0].toUpperCase()}
                                  </Avatar>
                              }
                              action={
                                 <IconButton 
                                 onClick = {()=> handleDelete(item.id)}
                                 aria-label="settings">
                                      <DeleteIcon />
                                 </IconButton>
                                 }
                              title={item.title}
                              subheader={item.category}
                             />
                             <CardContent>
                                 <Typography variant="body2" color="text.secondary">
                                     {item.body}
                                 </Typography>
                             </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
export default Notes

{/* <AppBar
             position="fixed"
             sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
             >
                 <Toolbar>
                     <Typography variant="h6" noWrap component="div">
                        Today's Date
                     </Typography>
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
                variant="permanent"
                anchor="left"
             ></Drawer>
             <Container> */}
             {/* {items.map(item => (
                <p key={item.id}>{item.title}</p>
            ))} */}
             {/* <Grid container spacing={4}>
                {items.map(item => (
                     <Grid item xs={12} sm={6} md={4}>
                     <Card key={item.id}>
                         <CardHeader
                         action={
                             <IconButton aria-label="settings">
                                 <DeleteIcon />
                             </IconButton>
                             }
                         title={item.title}
                         subheader={item.category}
                         />
                         <CardContent>
                             <Typography variant="body2" color="text.secondary">
                                 {item.body}
                             </Typography>
                         </CardContent>
                     </Card>
                     </Grid>
             </Grid> */}