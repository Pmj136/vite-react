import React from 'react'
import { useHistory } from 'react-router-dom'
import logo from '@/assets/logo.svg'
import './welcome.css'
import {
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
} from '@material-ui/core'

function Welcome() {
    const history = useHistory()
    const toHome = () => {
        history.replace('/home')
    }
    return (
        <FormControl error={true}>
            <InputLabel htmlFor="component-error">Name</InputLabel>
            <Input />
        </FormControl>
    )
}

export default Welcome
