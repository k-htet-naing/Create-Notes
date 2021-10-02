import { Send } from '@mui/icons-material';
import { Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {useHistory} from 'react-router-dom';

function CreateNotes() {
    const mystyle = {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    };

    const [title, setTitle] = useState('')
    const history = useHistory()
    const [body, setBody] = useState('')
    const [category, setCategory] = useState('')
    const [categoryError, setCategoryError] = useState(false)
    const [titleError, setTitleError] = useState(false)
    const [bodyError, setBodyError] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(false)
        setBodyError(false)
        setCategoryError(false)

        if (title === '') {
            setTitleError(true)
        }
        if (body === '') {
            setBodyError(true)
        }
        if (category === '') {
            setCategoryError(true)
        }

        if (title && body && category) {
            console.log(title, body, category)
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({title, body, category})
            }).then(()=> history.push('/'))
        }
    }
    return (
        <Container>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                 <TextField
                 style = {mystyle}
                 className = 'field'
                 onChange = {(e)=> setTitle(e.target.value)}
                  id = 'title'
                 label = 'Title'
                 variant = 'outlined'
                 color = 'primary'
                 fullWidth
                 required
                 error = {titleError}
                 />
                 <TextField
                 style = {mystyle}
                 onChange = {(e)=> setBody(e.target.value)}
                  id = 'text-body'
                 label = 'Text-Body'
                 variant = 'outlined'
                 color = 'primary'
                 fullWidth
                 required
                 multiline
                 rows = {4}
                 error = {bodyError}
                 />

                 <FormControl style={mystyle} onChange = {(e)=> setCategory(e.target.value)} error={categoryError} required>
                     <FormLabel>Choose your task</FormLabel>
                     <RadioGroup
                      aria-label="Choose your task"
                      defaultValue="work"
                      name="radio-buttons-group">
                         <FormControlLabel value="personal" control={<Radio />} label="Personal" />
                         <FormControlLabel value="aiesec" control={<Radio />} label="AIESEC" />
                         <FormControlLabel value="work" control={<Radio />} label="Work" />
                         <FormControlLabel value="other" control={<Radio />} label="Other" />
                     </RadioGroup>
                 </FormControl>

                 <Button sx={{bgcolor: '#e76f51', '&:hover': {
                     bgcolor: '#e14b1e'
                 }}} type='submit' variant = 'contained' endIcon = {<Send></Send>}>Submit</Button>

            </form>
        </Container>
    )
}
export default CreateNotes