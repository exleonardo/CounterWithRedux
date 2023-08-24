import {SettingType} from "../store/store";

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
        case "SET-MIN-VALUE":
            return state.map ( el => el ? { ...el , inputMinValue: action.inputMinValue } : el )
        case "SET-MAX-VALUE":
            return state.map ( el => el ? { ...el , inputMaxValue: action.inputMaxValue } : el )
        case "UNLOCK-SET":
            return state.map ( el => el ? { ...el , error: false } : el )
        default:
            return state
    }
}
export const getMinValueAC = (inputMinValue: string) => {
    return {
        type: "SET-MIN-VALUE" ,
        inputMinValue
    } as const
}
export const getMaxValueAC = (inputMaxValue: string) => {
    return {
        type: "SET-MAX-VALUE" ,
        inputMaxValue
    } as const
}
export const unlockSetAC = () => {
    return {
        type: "UNLOCK-SET"
    } as const
}