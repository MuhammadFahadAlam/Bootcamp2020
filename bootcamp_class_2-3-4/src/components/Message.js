import React from 'react'

export default function Message(props) {
    return (
        <div>
            <h3 className={`${props.isMorning ? 'dark' : '' }`}>Counter: {props.count}</h3>
        </div>
    )
}
