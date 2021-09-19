import React from 'react'

interface IProps {
    active: number
    curr: number
    end: number
}

function WordCounter({ active, curr, end }: IProps) {
    return (
        <span>
            <span style={{ color: curr >= active ? '#f604a8' : '' }}>
                {curr}
            </span>
            /{end}
        </span>
    )
}

export default WordCounter
