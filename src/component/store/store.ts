import {combineReducers , createStore} from "redux";
import {displayReducer} from "../reducers/displayReducer";
import {settingReducer} from "../reducers/settingReducer";


export type SettingType = {
    inputMinValue: string;
    inputMaxValue: string;
    inputMaxError: boolean;
    inputMinError: boolean;
    error: boolean
}
export type DisplayType = {
    minValue: number;
    maxValue: number
    buttonIncrementError: boolean;
    buttonResetError: boolean
    errorMessage: string
}
export type StateType = {
    display: DisplayType[];
    setting: SettingType[]
}
const state: StateType = {
    display: [{ minValue: 0 , maxValue: 5 , buttonIncrementError: true , buttonResetError: true , errorMessage: "" }] ,
    setting: [{ inputMinValue: "" , inputMaxValue: "" , inputMaxError: true , inputMinError: true , error: true }]
}
const rootReducer = combineReducers ( {
    display: displayReducer ,
    setting: settingReducer
} )

export const store = createStore ( rootReducer )
export type  AppRootStateType = ReturnType<typeof rootReducer>