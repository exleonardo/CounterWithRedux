export const INCREMENT_VALUE = "INCREMENT-VALUE"
export const RESET_VALUE = "RESET-VALUE"
export const SAVE_VALUE = "SAVE-VALUE"
export const ERROR_MESSAGE = "ERROR-MESSAGE"
export const BUTTON_DISABLED = "BUTTONS-DISABLED"
export const SWITCH_INCREMENT = "SWITCH-INCREMENT"
export const SET_MIN_VALUE = "SET-MIN-VALUE"
export const SET_MAX_VALUE = "SET-MAX-VALUE"
export const SWITCH_SET = "SWITCH-SET"
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
        type: SWITCH_INCREMENT
    } as const
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

