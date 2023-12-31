import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import {Alert} from "@mui/material";
import Button from "@mui/material/Button";
import {useDispatch , useSelector} from "react-redux";
import {AppRootStateType , DisplayType , SettingType} from "../../store/store";

import s from "./Display.module.css"
import {incrementValueAC , resetValueAC , switchIncrementAC} from "../../actions/action";

const Display = () => {
    const display = useSelector<AppRootStateType , DisplayType> ( (state) => state.display[0] )
    const setting = useSelector<AppRootStateType , SettingType> ( (state) => state.setting[0] )
    const dispatch = useDispatch ()


    const incrementButton = () => {
        dispatch ( incrementValueAC ( +setting.inputMaxValue ) )
    }
    const resetButton = () => {
        dispatch ( resetValueAC ( setting.inputMinValue ) )
        dispatch ( switchIncrementAC () )
    }
    const divClassName = s.errorMessage + (display.buttonIncrementError ? ' ' + s.displayErrorRed : '')
    return (
        <Grid xs={6} className={s.display}>
            {display.errorMessage ?
                <Alert severity="error" className={s.errorMessage}>{display.errorMessage}</Alert> :
                <div className={divClassName}>{display.minValue}</div>}
            <div className={s.button}>
                <Button variant="contained" size='small'
                        disabled={display.buttonIncrementError}
                        onClick={incrementButton}>+</Button>
                <Button variant="contained" size='small' disabled={display.buttonResetError}
                        onClick={resetButton}>x</Button>
            </div>
        </Grid>
    );
};

export default Display;
