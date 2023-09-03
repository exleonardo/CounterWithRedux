import {SettingType} from "../store/store";
import {
    getMaxValueAC ,
    getMinValueAC ,
    SET_MAX_VALUE ,
    SET_MIN_VALUE ,
    SWITCH_SET ,
    unlockSetAC
} from "../actions/action";


const initialState: SettingType[] = [{
    inputMinValue: "" ,
    inputMaxValue: "" ,
    inputMaxError: false ,
    inputMinError: false ,
    error: true
}]
type ActionType = ReturnType<typeof getMinValueAC> | ReturnType<typeof getMaxValueAC> | ReturnType<typeof unlockSetAC>
export const settingReducer = (state: SettingType[] = initialState , action: ActionType): SettingType[] => {
    switch (action.type) {
        case SET_MIN_VALUE:
            console.log ( state[0].inputMinValue )
            console.log ( state[0].inputMinError )

            return state.map ( el => ({
                ...el ,
                inputMinValue: action.inputMinValue ,
                inputMinError: +action.inputMinValue < 0 || +action.inputMinValue >= +el.inputMaxValue && (el.inputMinValue !== "") ,
                inputMaxError: false ,
                error: +action.inputMinValue < 0 || +action.inputMinValue >= +el.inputMaxValue || +el.inputMaxValue < 0
            }) )
        case SET_MAX_VALUE:
            return state.map ( el => ({
                ...el ,
                inputMaxValue: action.inputMaxValue ,
                inputMaxError: +action.inputMaxValue < 0 || +action.inputMaxValue <= +el.inputMinValue && (el.inputMaxValue !== "") ,
                inputMinError: false ,
                error: +action.inputMaxValue < 0 || +action.inputMaxValue <= +el.inputMinValue || +el.inputMinValue < 0
            }) )
        case SWITCH_SET:
            return state.map ( el => ({ ...el , error: action.error }) )
        default:
            return state
    }
}
