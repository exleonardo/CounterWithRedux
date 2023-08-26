import {SettingType} from "../store/store";

const SET_MIN_VALUE = "SET-MIN-VALUE"
const SET_MAX_VALUE = "SET-MAX-VALUE"
const SWITCH_SET = "SWITCH-SET"

const initialState: SettingType[] = [{
    inputMinValue: "" ,
    inputMaxValue: "" ,
    inputMaxError: true ,
    inputMinError: true ,
    error: true
}]
type ActionType = ReturnType<typeof getMinValueAC> | ReturnType<typeof getMaxValueAC> | ReturnType<typeof unlockSetAC>
export const settingReducer = (state: SettingType[] = initialState , action: ActionType): SettingType[] => {
    switch (action.type) {
        case SET_MIN_VALUE:
            return state.map ( el => ({ ...el , inputMinValue: action.inputMinValue }) )
        case SET_MAX_VALUE:
            return state.map ( el => ({ ...el , inputMaxValue: action.inputMaxValue }) )
        case SWITCH_SET:
            return state.map ( el => ({ ...el , error: action.error }) )
        default:
            return state
    }
}
export const getMinValueAC = (inputMinValue: string) => {
    return {
        type: SET_MIN_VALUE ,
        inputMinValue
    } as const
}
export const getMaxValueAC = (inputMaxValue: string) => {
    return {
        type: SET_MAX_VALUE ,
        inputMaxValue
    } as const
}
export const unlockSetAC = (error: boolean) => {
    return {
        type: SWITCH_SET ,
        error
    } as const
}
