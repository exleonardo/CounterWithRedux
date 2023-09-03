import React , {ChangeEvent , useEffect} from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useDispatch , useSelector} from "react-redux";


import {AppRootStateType , DisplayType , SettingType} from "../../store/store";
import s from './Setting.module.css'
import {
    buttonsDisabledAC ,
    errorMessageAC ,
    getMaxValueAC ,
    getMinValueAC ,
    saveValueAC ,
    unlockSetAC
} from "../../actions/action";

const Setting = () => {
    const dispatch = useDispatch ()
    const setting = useSelector<AppRootStateType , SettingType> ( (state) => state.setting[0] )

    const changeMessageAndButton = (errorMessage: string , disable: boolean) => {
        dispatch ( errorMessageAC ( errorMessage ) )
        dispatch ( buttonsDisabledAC ( disable ) )
    }
    useEffect ( () => {
        const minValue = localStorage.getItem ( "minValue" )
        if ( minValue ) {
            dispatch ( getMinValueAC ( minValue ) )
        }
        const maxValue = localStorage.getItem ( "maxValue" )
        if ( maxValue ) {
            dispatch ( getMaxValueAC ( maxValue ) )
        }
    } , [] );
    const inputMinValueHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if ( +e.currentTarget.value < 0 || +e.currentTarget.value >= +setting.inputMaxValue ) {
            dispatch ( getMinValueAC ( e.currentTarget.value ) )
            changeMessageAndButton ( "Error" , true )
        } else {
            dispatch ( getMinValueAC ( e.currentTarget.value ) )
            changeMessageAndButton ( "Enter values and press set" , true )
        }
    }
    const inputMaxValueHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if ( +e.currentTarget.value < 0 || +e.currentTarget.value <= +setting.inputMinValue ) {
            dispatch ( getMaxValueAC ( e.currentTarget.value ) )
            changeMessageAndButton ( "Error" , true )
        } else {
            dispatch ( getMaxValueAC ( e.currentTarget.value ) )
            changeMessageAndButton ( "Enter values and press set" , true )
        }

    }
    const saveInputvalue = () => {
        localStorage.setItem ( "minValue" , setting.inputMinValue )
        localStorage.setItem ( "maxValue" , setting.inputMaxValue )
        dispatch ( saveValueAC ( setting.inputMinValue , setting.inputMaxValue ) )
        changeMessageAndButton ( "" , false )
        dispatch ( unlockSetAC ( true ) )
    }

    return (
        <Grid xs={6} className={s.setting}>
            <Grid container spacing={1} className={s.containerValue}>
                <div className={s.value}>
                    <div>Max value:</div>
                    <TextField className={s.inputs} error={setting.inputMaxError} onChange={inputMaxValueHandler}
                               value={setting.inputMaxValue}
                               id="outlined-basic"
                               label="max"
                               variant="outlined"
                               type="number">
                    </TextField>
                </div>
                <div className={s.value}>
                    <div>Min value:</div>
                    <TextField className={s.inputs} error={setting.inputMinError} onChange={inputMinValueHandler}
                               value={setting.inputMinValue}
                               id="outlined-basic"
                               label="min"
                               variant="outlined"
                               type="number">
                    </TextField>
                </div>
            </Grid>
            <div className={s.set}>
                <Button disabled={setting.error} variant="contained" size='small'
                        onClick={saveInputvalue}>set</Button>
            </div>
        </Grid>
    );
};


export default Setting