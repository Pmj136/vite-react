import React from 'react'
import {shallowEqual} from "react-redux"
import {useAppSelector, useAppDispatch} from "@/store"
import {decrement, increment, slowIncrement} from '@/store/slices/counter'

interface IProps {

}

function Counter(props: IProps) {
    const count = useAppSelector(state => state.counter.value, shallowEqual)
    const dispatch = useAppDispatch()

    return (
        <div>
            <h2>{count}</h2>
            <div>
                <button
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <button
                    onClick={() => dispatch(slowIncrement())}
                >
                    SlowIncrement
                </button>
                <button
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Counter;