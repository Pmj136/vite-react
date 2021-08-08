import { createTheme } from '@material-ui/core'
import { amber } from '@material-ui/core/colors'

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
        // MuiPaper: {
        //     root: {
        //     }
        // }
    },
})

/*dark theme*/
export const dark = createTheme({
    palette: {
        type: 'dark',
        primary: amber,
    },
    overrides: {
        MuiButton: {
            label: {
                whiteSpace: 'nowrap',
            },
        },
    },
})
