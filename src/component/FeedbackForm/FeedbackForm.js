import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import './FeedbackForm.css'
const FeedbackForm = () => {
    const [modal, setModal] = useState(false);

    const buttonClicked = (() => {
        console.log("click");
    })

    const feedbackChange = ((e) => {
        e.preventDefault();
        console.log(e.target.value);
    })

    return (
        <div className="App">
            <h1>Feedback Form</h1>
            <div className="feedback">
                <Button onClick={() => setModal((value) => !value)} variant="outlined">Toggle Feed</Button>
                {
                    modal && <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '45ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField label="Name" variant="outlined" name="name" /><br />
                        <TextField label="Email" variant="outlined" name="email" /><br />
                        <TextField onChange={feedbackChange} label="Feedback" variant="outlined" name="feedback" /><br />
                        <Button variant="outlined">Submit</Button>
                    </Box>
                }
            </div>
        </div>
    );
};

export default FeedbackForm;