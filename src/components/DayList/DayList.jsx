import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import moment from 'moment'
import { loader } from 'graphql.macro';
import { Link } from 'gatsby';

const GET_DAYS = loader('./Days.graphql');

function DayList() {
    const { loading, error, data } = useQuery(GET_DAYS)

    if (loading) return "loading..."
    if (error) {
        return (
            <p>
                Hmm...
            </p>
        )
    }


    console.log(data)
    moment.locale('de-ch')

    return (
        <div>
            {data.day.map(day => (
                <Link key={day.uid} to="/">
                    <div className="card">
                        <div className="card-content">
                            <p className="title">{moment(day.date).format('dddd')}</p>
                            <p className="subtitle">{moment(day.date).format('DD.MM.YYYY')}</p>
                        </div>

                    </div>
                </Link>
            ))}
        </div>
    )
}

export default DayList