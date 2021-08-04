import React, {
    KeyboardEvent,
    MouseEvent,
    ReactElement,
    useRef,
    useState,
} from 'react'
import {
    ClickAwayListener,
    Grow,
    ListItemIcon,
    MenuItem,
    MenuList,
    Paper,
    Popper,
    Typography,
} from '@material-ui/core'

export interface DropDownItem {
    command: any
    name: string
    icon?: ReactElement
}

interface IProps {
    activeCommand?: string
    top: ReactElement
    dropDownItems: Array<any>
    disableHistory?: boolean
    onSelect: (target: DropDownItem) => void
}

function DropDown(props: IProps) {
    const [activeCommand, setActiveCommand] = useState(props.activeCommand)
    const [open, setOpen] = useState(false)
    const anchorRef = useRef<any>(null)

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen)
    }

    const handleClick = (event: MouseEvent<EventTarget>, v: DropDownItem) => {
        if (activeCommand === v.command) return
        if (!props.disableHistory) setActiveCommand(v.command)
        props.onSelect(v)
        handleClose(event)
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
        <>
            <div
                className="dropdown-top"
                ref={anchorRef}
                onClick={handleToggle}
            >
                {props.top}
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
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    onKeyDown={handleListKeyDown}
                                >
                                    {props.dropDownItems.map(
                                        (v: DropDownItem) => (
                                            <MenuItem
                                                style={{
                                                    backgroundColor:
                                                        activeCommand ===
                                                        v.command
                                                            ? 'rgba(0,0,0,0.04)'
                                                            : '',
                                                }}
                                                key={v.command}
                                                onClick={e => handleClick(e, v)}
                                            >
                                                {v.icon && (
                                                    <ListItemIcon
                                                        style={{ minWidth: 28 }}
                                                    >
                                                        {v.icon}
                                                    </ListItemIcon>
                                                )}
                                                <Typography>
                                                    {v.name}
                                                </Typography>
                                            </MenuItem>
                                        )
                                    )}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    )
}

export default DropDown
