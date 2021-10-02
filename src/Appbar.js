import React from 'react';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Appbar() {
    return(
        <div>
            <AppBar position="sticky">
                 <Toolbar>
                     <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                     aria-label="menu"
                     sx={{ mr: 2 }}>
                         <MenuIcon />
                     </IconButton>
                     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                         News
                     </Typography>
                     <Button color="inherit">Login</Button>
                 </Toolbar>
             </AppBar>
             <Typography>
                 sklfskflj lajfljojeoirjlflsjfjsfkskfjsfjeoirojflsjlkfjl lkf ooijklfls klfl slkfjoh
                 Dear Sir or Madam,
Schneider Electric - Myanmar,

I am Kaung Htet Naing from Yangon Technological University and I am writing this email to apply for the internship at Schneider Electric - Myanmar. 

After looking into ‘About Schneider Electric’ , I got amazingly inspired by its purpose of empowering all to make the most of our energy and resources ,bridging progress and sustainability for all. As a person who is currently working in ‘AIESEC in Myanmar’, Youth led INGO, I see the role I can play in Schneider Electric - Myanmar as a young, energetic and active business assistant intern who has theoretical and practical knowledge in Engineering fields and who actively learn new things.
I hereby attach my CV for the application and I am looking forward to hearing from you soon for interview and future process ahead. 

             </Typography>
        </div>
    )
}
export default Appbar