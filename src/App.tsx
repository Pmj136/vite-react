import React, {Suspense} from 'react'
import AppRouter from "@/router";
import {Provider} from "react-redux"
import store from "@/store"

function App() {
    return (
        <Suspense fallback={<div>loading</div>}>
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        </Suspense>
    )
}

export default App