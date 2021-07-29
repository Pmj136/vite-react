import React, {
    ComponentType,
    createContext,
    ReactElement,
    useReducer,
} from 'react'

interface IProps {
    children: ComponentType<any> | ReactElement
}

const initState: any = {
    color: 'pink',
    dispatch: null,
}
const reducer = (state: string, action: any) => {
    switch (action.type) {
        case 'SET_COLOR':
            return action.payload
        default:
            return state
    }
}
export const ColorStore = createContext(initState)

function ColorContext(props: IProps) {
    const [color, dispatch] = useReducer(reducer, initState.color)
    return (
        <ColorStore.Provider value={{ color, dispatch }}>
            {props.children}
        </ColorStore.Provider>
    )
}

export default ColorContext
