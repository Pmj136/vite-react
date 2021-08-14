import { createTheme } from '@material-ui/core'

/*light theme*/
export const light = createTheme({
    palette: {
        type: 'light',
    },
    typography: {
        fontSize: 15,
        fontFamily: 'Comic Sans MS',
    },
    overrides: {
        MuiButton: {
            label: {
                whiteSpace: 'nowrap',
            },
        },
        MuiListItemIcon: {
            root: {
                minWidth: 42,
            },
        },
        MuiSvgIcon: {
            root: {
                cursor: 'pointer',
            },
        },
        MuiTab: {
            root: {
                '@media (min-width: 600px)': {
                    minWidth: 120,
                },
            },
        },
    },
})

/*dark theme*/
export const dark = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#1a91ca',
        },
    },
    typography: {
        fontSize: 15,
        fontFamily: 'Comic Sans MS',
    },
    overrides: {
        MuiButton: {
            label: {
                whiteSpace: 'nowrap',
            },
        },
        MuiListItemIcon: {
            root: {
                minWidth: 42,
            },
        },
        MuiSvgIcon: {
            root: {
                cursor: 'pointer',
            },
        },
        MuiTab: {
            root: {
                '@media (min-width: 600px)': {
                    minWidth: 120,
                },
            },
        },
    },
})
