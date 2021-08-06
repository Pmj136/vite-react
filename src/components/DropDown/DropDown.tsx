import React, {
    createContext,
    KeyboardEvent,
    MouseEvent,
    ReactElement,
    ReactNode,
    useRef,
    useState,
} from 'react'
import {
    ClickAwayListener,
    Grow,
    MenuList,
    Paper,
    Popper,
} from '@material-ui/core'

interface IProps {
    header: ReactElement
    children: ReactNode
    selectedCommand?: any
    disableHistory?: boolean
    onSelect: (target: string) => void
}

const initState: any = {
    selectedCommand: null,
    setSelectedCommand: null,
}

export const Store = createContext(initState.selectedCommand)

function DropDown(props: IProps) {
    const [selectedCommand, setSelectedCommand] = useState(
        props.selectedCommand
    )
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

    const onSelect = (event: MouseEvent<EventTarget>, command: string) => {
        if (!props.disableHistory) {
            setSelectedCommand(command)
        }
        props.onSelect(command)
        handleClose(event)
    }
    return (
        <Store.Provider value={{ selectedCommand, onSelect }}>
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
                                <MenuList
                                    autoFocusItem={open}
                                    onKeyDown={handleListKeyDown}
                                >
                                    {props.children}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Store.Provider>
    )
}

export default DropDown
