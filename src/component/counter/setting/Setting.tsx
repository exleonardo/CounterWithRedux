import React , {ChangeEvent , useEffect} from 'react';
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
    const changeMessageAndButton = (errorMessage: string , error: boolean , disable: boolean) => {
        dispatch ( errorMessageAC ( errorMessage ) )
        dispatch ( unlockSetAC ( error ) )
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
        dispatch ( getMinValueAC ( e.currentTarget.value ) )
        changeMessageAndButton ( "Enter values and press set" , false , true )
    }
    const inputMaxValueHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch ( getMaxValueAC ( e.currentTarget.value ) )
        changeMessageAndButton ( "Enter values and press set" , false , true )
    }
    const saveInputvalue = () => {
        localStorage.setItem ( "minValue" , setting.inputMinValue )
        localStorage.setItem ( "maxValue" , setting.inputMaxValue )
        dispatch ( saveValueAC ( setting.inputMinValue , setting.inputMaxValue ) )
        changeMessageAndButton ( "" , true , false )
    }
    return (
        <Grid xs={6} className={s.setting}>
            <Grid container spacing={1} className={s.containerValue}>
                <div className={s.value}>
                    <div>Max value:</div>
                    <TextField className={s.inputs} onChange={inputMaxValueHandler} value={setting.inputMaxValue}
                               id="outlined-basic"
                               label="max"
                               variant="outlined"
                               type="number">
                    </TextField>
                </div>
                <div className={s.value}>
                    <div>Min value:</div>
                    <TextField className={s.inputs} onChange={inputMinValueHandler} value={setting.inputMinValue}
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