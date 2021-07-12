import React, {useState} from 'react';
import "./home.css"


function Home() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>home</div>
            <hr/>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>加1</button>
        </>
    );
}

export default Home;