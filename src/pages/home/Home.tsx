import React, { useContext } from 'react'
import './home.css'
import { ColorStore } from '@/context/ColorContext'

function Home() {
    const { color, dispatch } = useContext(ColorStore)

    const switchColor = () => {
        const arr = [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
        ]
        let str = '#'
        for (let i = 0; i < 6; i++) {
            const k = ~~(Math.random() * arr.length)
            str += arr[k]
        }
        dispatch({
            type: 'SET_COLOR',
            payload: str,
        })
    }
    return (
        <>
            <div style={{ color }}>
                Hello World <pre>{color}</pre>
            </div>

            <button onClick={switchColor}>切换随机颜色</button>
        </>
    )
}

export default Home
