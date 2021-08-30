import React from 'react'

interface IProps {
    active: number
    curr: number
    end: number
}

function WordCounter({ active, curr, end }: IProps) {
    return (
        <span>
            <span style={{ color: curr >= active ? 'red' : '' }}>{curr}</span>/
            {end}
        </span>
    )
}

export default WordCounter
