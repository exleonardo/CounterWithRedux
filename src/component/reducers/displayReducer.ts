import {DisplayType} from "../store/store";

const INCREMENT_VALUE = "INCREMENT-VALUE"
const RESET_VALUE = "RESET-VALUE"
const SAVE_VALUE = "SAVE-VALUE"
type ActionCreatorType =
    ReturnType<typeof incrementValueAC>
    | ReturnType<typeof resetValueAC>
    | ReturnType<typeof saveValueAC> | ReturnType<typeof errorMessageAC> | ReturnType<typeof buttonsDisabledAC>


const initialState: DisplayType[] = [
    { minValue: 0 , maxValue: 5 , buttonIncrementError: true , buttonResetError: true , errorMessage: '' }
]
export const displayReducer = (state: DisplayType[] = initialState , action: ActionCreatorType): DisplayType[] => {
    switch (action.type) {
        case "INCREMENT-VALUE":
            return state.map ( el => el ? { ...el , minValue: el.minValue + 1 } : el )
        case "RESET-VALUE":
            return state.map ( (el) => el.minValue ? { ...el , minValue: +action.minValue } : el )
        case "SAVE-VALUE":
            return state.map ( el => el ? { ...el , minValue: +action.minValue , maxValue: +action.maxValue } : el )
        case "ERROR-MESSAGE":
            return state.map ( el => el ? { ...el , errorMessage: action.errorMessage } : el )
        case "BUTTONS-DISABLED" :
            return state.map ( el => el ? { ...el , buttonIncrementError: false , buttonResetError: false } : el )
        default:
            return state
    }
}
export const saveValueAC = (minValue: string , maxValue: string) => {
    return {
        type: SAVE_VALUE ,
        minValue ,
        maxValue
    } as const
}
export const incrementValueAC = () => {
    return {
        type: INCREMENT_VALUE ,
    } as const
}
export const resetValueAC = (minValue: string) => {
    return {
        type: RESET_VALUE ,
        minValue
    } as const
}
export const errorMessageAC = (errorMessage: string) => {
    return {
        type: "ERROR-MESSAGE" ,
        errorMessage

    } as const
}
export const buttonsDisabledAC = () => {
    return {
        type: "BUTTONS-DISABLED" ,
    } as const
}