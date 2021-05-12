import React from 'react'
import Child from './Child'
import ChildUsingReducer from './ChildUsingReducer'

const Parent = () => {
    return (
        <div>
            <Child />
            <ChildUsingReducer />
        </div>
    )
}

export default Parent
