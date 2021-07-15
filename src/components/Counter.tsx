import React from 'react'
import { shallowEqual } from 'react-redux'
import { useAppSelector, useAppDispatch } from '@/store'
import { decrement, increment, slowIncrement } from '@/store/slices/counter'

import { Button, BackTop, Input } from 'antd'

function Counter() {
    const count = useAppSelector((state) => state.counter.value, shallowEqual)
    const dispatch = useAppDispatch()

    return (
        <div>
            <BackTop />
            <Input />
            <h2>{count}</h2>
            <div>
                <Button onClick={() => dispatch(increment())}>Increment</Button>
                <Button onClick={() => dispatch(slowIncrement())}>
                    SlowIncrement
                </Button>
                <Button onClick={() => dispatch(decrement())}>Decrement</Button>
            </div>
        </div>
    )
}

export default Counter
