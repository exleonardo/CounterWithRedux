import React from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import {Container} from '@mui/material';
import Setting from './setting/Setting';
import Display from "./display/Display";
import s from './Counter.module.css'


const Counter = () => {

    return (
        <Container maxWidth="lg">
            <Grid container columns={16} className={s.container}>
                <Setting/>
                <Display/>
            </Grid>
        </Container>
    );
};

export default Counter;