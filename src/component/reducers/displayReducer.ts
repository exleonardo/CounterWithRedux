import {DisplayType} from "../store/store";

const INCREMENT_VALUE = "INCREMENT-VALUE"
const RESET_VALUE = "RESET-VALUE"
const SAVE_VALUE = "SAVE-VALUE"
const ERROR_MESSAGE = "ERROR-MESSAGE"
const BUTTON_DISABLED = "BUTTONS-DISABLED"

type ActionCreatorType =
    ReturnType<typeof incrementValueAC>
    | ReturnType<typeof resetValueAC>
    | ReturnType<typeof saveValueAC>
    | ReturnType<typeof errorMessageAC>
    | ReturnType<typeof buttonsDisabledAC>
    | ReturnType<typeof switchIncrementAC>

const initialState: DisplayType[] = [
    { minValue: 0 , maxValue: 5 , buttonIncrementError: false , buttonResetError: false , errorMessage: '' }
]
export const displayReducer = (state: DisplayType[] = initialState , action: ActionCreatorType): DisplayType[] => {
    switch (action.type) {
        case INCREMENT_VALUE:
            return state.map ( el => ({
                ...el ,
                minValue: el.minValue + 1 ,
                buttonIncrementError: action.maxValue === el.minValue + 1
            }) )
        case RESET_VALUE:
            return state.map ( (el) => ({ ...el , minValue: +action.minValue }) )
        case SAVE_VALUE:
            return state.map ( el => ({ ...el , minValue: +action.minValue , maxValue: +action.maxValue }) )
        case ERROR_MESSAGE:
            return state.map ( el => ({ ...el , errorMessage: action.errorMessage }) )
        case BUTTON_DISABLED :
            return state.map ( el => ({ ...el , buttonIncrementError: action.check , buttonResetError: action.check }) )
        case "SWITCH-INCREMENT":
            return state.map ( el => ({ ...el , buttonIncrementError: false }) )
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
export const incrementValueAC = (maxValue: number) => {
    return {
        type: INCREMENT_VALUE ,
        maxValue
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
        type: ERROR_MESSAGE ,
        errorMessage

    } as const
}
export const buttonsDisabledAC = (check: boolean) => {
    return {
        type: BUTTON_DISABLED ,
        check
    } as const
}
export const switchIncrementAC = () => {
    return {
        type: "SWITCH-INCREMENT"
    } as const
}