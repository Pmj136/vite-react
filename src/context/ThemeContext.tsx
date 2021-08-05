import React, {
    ComponentType,
    createContext,
    ReactElement,
    useState,
} from 'react'

interface IProps {
    children: ComponentType<any> | ReactElement
}

const initState: any = {
    theme: 'light',
    setTheme: null,
}
export const ThemeStore = createContext(initState)

function ThemeContext(props: IProps) {
    const [theme, setTheme] = useState(initState.theme)

    return (
        <ThemeStore.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeStore.Provider>
    )
}

export default ThemeContext
