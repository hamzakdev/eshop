import React from 'react'
import {data} from "./data"
const example = () => {

  return (
    <div>
        {data.map(d=>(

            <h1>{d}</h1>
        ))}
    </div>
  )
}

export default example