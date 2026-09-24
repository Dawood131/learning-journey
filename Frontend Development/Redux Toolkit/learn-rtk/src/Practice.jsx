import React from 'react'

const Practice = (props) => {
    return (
        <div>
            <h2>
               {props.name}
            </h2>
            <p>
                {props.role}
            </p>
        </div>
    )
}

export default Practice