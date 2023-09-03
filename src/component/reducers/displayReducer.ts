import {DisplayType} from "../store/store";
import {
    BUTTON_DISABLED , buttonsDisabledAC ,
    ERROR_MESSAGE , errorMessageAC ,
    INCREMENT_VALUE ,
    incrementValueAC ,
    RESET_VALUE ,
    resetValueAC ,
    SAVE_VALUE , saveValueAC , SWITCH_INCREMENT , switchIncrementAC
} from "../actions/action";


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
            const message = action.errorMessage
            return state.map ( el => ({ ...el , errorMessage: message }) )
        case BUTTON_DISABLED :
            return state.map ( el => ({ ...el , buttonIncrementError: action.check , buttonResetError: action.check }) )
        case SWITCH_INCREMENT:
            return state.map ( el => ({ ...el , buttonIncrementError: false }) )
        default:
            return state
    }
}
