import { createTheme } from '@material-ui/core'
import type { Overrides } from '@material-ui/core/styles/overrides'
import type { ThemeOptions } from '@material-ui/core/styles/createTheme'

const commonThemeOptions: ThemeOptions = {
    zIndex: {
        modal: 3000,
    },
}

const commonOverrides: Overrides = {
    MuiButton: {
        label: {
            whiteSpace: 'nowrap',
        },
    },
}

/*light theme*/
export const light = createTheme({
    palette: {
        type: 'light',
    },
    ...commonThemeOptions,
    overrides: {
        ...commonOverrides,
    },
})

/*dark theme*/
export const dark = createTheme({
    palette: {
        type: 'dark',
    },
    ...commonThemeOptions,
    overrides: {
        ...commonOverrides,
    },
})
