import React, {
    createContext,
    KeyboardEvent,
    MouseEvent,
    ReactElement,
    ReactNode,
    useRef,
    useState,
} from 'react'
import { ClickAwayListener, Grow, List, Paper, Popper } from '@material-ui/core'

interface IProps {
    header: ReactElement
    children: ReactNode
}

const initState: any = {}
export const Store = createContext(initState)

function DropDown(props: IProps) {
    const [open, setOpen] = useState(false)
    const anchorRef = useRef<any>(null)

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen)
    }

    const handleClose = (event: MouseEvent<EventTarget>) => {
        if (anchorRef?.current.contains(event.target as HTMLElement)) {
            return
        }
        setOpen(false)
    }
    const handleListKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
            event.preventDefault()
            setOpen(false)
        }
    }

    return (
        <Store.Provider value={{ setOpen }}>
            <div
                className="dropdown-header"
                ref={anchorRef}
                onClick={handleToggle}
            >
                {props.header}
            </div>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom'
                                    ? 'center top'
                                    : 'center bottom',
                        }}
                    >
                        <Paper elevation={4}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <List
                                    component="div"
                                    onKeyDown={handleListKeyDown}
                                >
                                    {props.children}
                                </List>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Store.Provider>
    )
}

export default DropDown
