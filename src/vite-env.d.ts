/// <reference types="vite/client" />
import React from 'react'

interface ImportMetaEnv {
    VITE_BASEURL: string
}

declare module '@mui/material/styles' {
    interface TypographyVariants {
        gray: React.CSSProperties
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        gray?: React.CSSProperties
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        gray: true
    }
}
