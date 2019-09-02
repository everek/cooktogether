import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { loader } from 'graphql.macro';
import moment from 'moment'

const GET_DAY = loader('./Day.graphql');

function GetDay(dayId) {
    const { loading, error, data } = useQuery(GET_DAY, {
        variables: { "dayId": dayId.dayId },
        skip: !dayId,
    });

    if (loading) return null;
    if (error) return `Error! ${error}`;

    console.log(data)
    return (
        <div>
            {data.day && data.day.map(day => (
                <div className="card">
                    <div className="card-content">
                        <h1 className="card-title" key={day.uid} className="title">{moment(day.date).format('dddd')}</h1>
                        <p className="subtitle">{moment(day.date).format('D. MMMM')}</p>
                    </div>    
                </div>
            ))}
        </div>
    )
}

function DayDetail(props) {
    return (
        <div>
            <GetDay dayId={props.dayId} />
        </div>
    )
}

export default DayDetail