import React from 'react'
import titles from './Titles'


function SpecialTitle() {

    const title = titles[Math.floor(Math.random()*titles.length)]

    return (
        <h1 className="title is-1">{title}</h1>
    )
}

export default SpecialTitle