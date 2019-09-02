import React from 'react'
import titles from './Titles'
import './SpecialTitle.scss'


function SpecialTitle() {
    const title = titles[Math.floor(Math.random()*titles.length)]

    return (
        <div className="specialTitle-wrap">
            <h1 className="title specialTitle">{title}</h1>
        </div>
    )
}

export default SpecialTitle