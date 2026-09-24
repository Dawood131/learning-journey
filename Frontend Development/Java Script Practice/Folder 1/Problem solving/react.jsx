import React, { useState } from 'react'

function counter() {
        const {count,setCount} = useState(0);
    return (
        <div>
            <h1>count: {count}</h1>
            <button onClick={() => setCount(count +1)}>increase</button>
            <button onClick={() => setCount(count -1)}>dcrease</button>
            <button onClick={() => setCount(0)}>reset</button>
        </div>
    )
}

export default counter