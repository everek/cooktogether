import React from 'react'
import { Router, Link } from "@reach/router";
import '../styles/main.scss'
import DayDetail from '../components/DayDetail/DayDetail';

function day() {
    return (
        <Router>
            <DayDetail path="day/:dayId" />
        </Router>
    )
}

export default day