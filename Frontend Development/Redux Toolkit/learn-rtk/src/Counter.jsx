import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>Count:{count}</h2>
            <div className='flex gap-10'>
                <button onClick={() => setCount(count + 1)}>Increament</button>
                <button onClick={() => setCount(count - 1)}>Decreament</button>
            </div>
        </div>
    )
}

export default Counter