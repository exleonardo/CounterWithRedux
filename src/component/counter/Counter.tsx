import React from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import {Container} from '@mui/material';
import Setting from './setting/Setting';
import Display from "./display/Display";


const Counter = () => {

    return (
        <Container maxWidth="lg">
            <Grid container spacing={8} columns={16}>
                <Setting/>
                <Display/>
            </Grid>
        </Container>
    );
};

export default Counter;