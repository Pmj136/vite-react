import React, { useEffect, useState } from 'react'
import { Tween, update as TUpdate } from '@tweenjs/tween.js'

interface IProps {
    toNumber: number
    duration?: number
}

function animate(time: number) {
    requestAnimationFrame(animate)
    TUpdate(time)
}

function AnimationNumber({ toNumber, duration = 900 }: IProps) {
    const [value, setValue] = useState(0)
    useEffect(() => {
        if (toNumber > 0) {
            new Tween({
                number: 0,
            })
                .to(
                    {
                        number: toNumber,
                    },
                    duration
                )
                .onUpdate(val => {
                    setValue(+val.number.toFixed(0))
                })
                .start()
            requestAnimationFrame(animate)
        }
    }, [toNumber])
    return <span>{value}</span>
}

export default AnimationNumber
