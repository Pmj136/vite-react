import { createTheme } from '@mui/material/styles'
import type { PaletteMode } from '@mui/material'

const generateTheme = (mode: PaletteMode) =>
    createTheme({
        palette: {
            mode,
            primary: {
                main: '#2196f3',
            },
            secondary: {
                light: '#ff4081',
                main: '#f50057',
                dark: '#c51162',
                contrastText: '#fff',
            },
            info: {
                main: '#e0e0e0',
                dark: '#cccccc',
            },
            background: {
                paper: mode === 'dark' ? '#333333' : '#ffffff',
                default: mode === 'dark' ? '#303030' : '#fafafa',
            },
        },
        typography: {
            gray: {
                color: mode === 'dark' ? '#f1f1f1' : '#86909c',
            },
            fontSize: 15,
            fontFamily: 'Comic Sans MS',
        },
        components: {
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 4,
                        boxSizing: 'border-box',
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    text: {
                        whiteSpace: 'nowrap',
                    },
                },
            },
            MuiListItemIcon: {
                styleOverrides: {
                    root: {
                        minWidth: 42,
                    },
                },
            },
            MuiSvgIcon: {
                styleOverrides: {
                    root: {
                        cursor: 'pointer',
                    },
                },
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        '@media (min-width: 600px)': {
                            minWidth: 120,
                        },
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        fontSize: 16,
                    },
                    multiline: {
                        padding: 10,
                    },
                },
            },
            MuiBackdrop: {
                styleOverrides: {
                    root: {
                        zIndex: 1200,
                    },
                },
            },
        },
    })
export default generateTheme
