import {createSlice, PayloadAction, createAsyncThunk, current} from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
    value: number
}

// Define the initial state using that type
const initialState: CounterState = {
    value: 0,
}
export const slowIncrement = createAsyncThunk("counter/slowIncrement", async () => {
    await mockXhr()
    return null
})

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: (state) => {
            console.log(current(state))
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(slowIncrement.fulfilled, state => {
            state.value += 1
        })
    }
})

function mockXhr() {
    return new Promise<void>(resolve => {
        const timer = setTimeout(() => {
            resolve()
        }, 1000)
    })
}

export const {increment, decrement, incrementByAmount} = counterSlice.actions


export default counterSlice.reducer