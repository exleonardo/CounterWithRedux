import React , {ChangeEvent} from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useDispatch , useSelector} from "react-redux";
import {getMaxValueAC , getMinValueAC , unlockSetAC} from "../../reducers/settingReducer";
import {buttonsDisabledAC , errorMessageAC , saveValueAC} from "../../reducers/displayReducer";
import {AppRootStateType , SettingType} from "../../store/store";
import s from './Setting.module.css'

const Setting = () => {
    const dispatch = useDispatch ()
    const setting = useSelector<AppRootStateType , SettingType> ( (state) => state.setting[0] )
    const inputMinValueHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch ( getMinValueAC ( e.currentTarget.value ) )
        dispatch ( errorMessageAC ( "Enter values and press set" ) )

    }
    const inputMaxValueHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch ( getMaxValueAC ( e.currentTarget.value ) )
        dispatch ( errorMessageAC ( "Enter values and press set" ) )
        dispatch ( unlockSetAC () )
    }
    const saveInputvalue = () => {
        dispatch ( saveValueAC ( setting.inputMinValue , setting.inputMaxValue ) )
        dispatch ( errorMessageAC ( "" ) )
        dispatch ( buttonsDisabledAC () )
    }
    return (
        <Grid xs={8} className={s.setting}>
            <Grid container spacing={1} className={s.containerValue}>
                <div className={s.value}>
                    <div>Max value:</div>
                    <TextField onChange={inputMaxValueHandler} value={setting.inputMaxValue} id="outlined-basic"
                               label="max"
                               variant="outlined"
                               type="number">
                    </TextField></div>
                <div className={s.value}>
                    <div>Min value:</div>
                    <TextField onChange={inputMinValueHandler} value={setting.inputMinValue} id="outlined-basic"
                               label="min"
                               variant="outlined"
                               type="number">
                    </TextField></div>
            </Grid>
            <div className={s.set}><Button disabled={setting.error} variant="contained" size='small'
                                           onClick={saveInputvalue}>set</Button></div>
        </Grid>
    );
};


export default Setting