import { createTheme } from '@material-ui/core'
import { yellow } from '@material-ui/core/colors'

/*light theme*/
export const light = createTheme({
    palette: {
        type: 'light',
    },
    overrides: {
        MuiButton: {
            label: {
                whiteSpace: 'nowrap',
            },
        },
    },
})

/*dark theme*/
export const dark = createTheme({
    palette: {
        type: 'dark',
        primary: yellow,
    },
    overrides: {
        MuiButton: {
            label: {
                whiteSpace: 'nowrap',
            },
        },
    },
})
