import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import {Alert} from "@mui/material";
import Button from "@mui/material/Button";
import {useDispatch , useSelector} from "react-redux";
import {AppRootStateType , DisplayType , SettingType} from "../../store/store";
import {incrementValueAC , resetValueAC} from "../../reducers/displayReducer";

const Display = () => {
    const display = useSelector<AppRootStateType , DisplayType> ( (state) => state.display[0] )
    const setting = useSelector<AppRootStateType , SettingType> ( (state) => state.setting[0] )
    const dispatch = useDispatch ()
    const incrementButton = () => {
        dispatch ( incrementValueAC () )
    }
    const resetButton = () => {
        dispatch ( resetValueAC ( setting.inputMinValue ) )
    }
    return (
        <Grid xs={8}>
            {display.errorMessage ?
                <Alert severity="error">{display.errorMessage}</Alert> :
                <div>{display.minValue}</div>}
            <Button variant="contained" size='small' disabled={display.buttonIncrementError}
                    onClick={incrementButton}>+</Button>
            <Button variant="contained" size='small' disabled={display.buttonIncrementError}
                    onClick={resetButton}>x</Button>
        </Grid>
    );
};

export default Display;
