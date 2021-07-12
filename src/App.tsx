import React, {Suspense} from 'react'

import AppRouter from "@/router";

function App() {
    console.log("render App")
    return (
        <Suspense fallback={<div>loading</div>}>
            <AppRouter/>
        </Suspense>
    )
}

export default App