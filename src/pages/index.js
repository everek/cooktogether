import React from 'react'

import '../styles/main.scss'
import DayList from '../components/DayList/DayList';
import SpecialTitle from '../components/SpecialTitle/SpecialTitle';

export default () => (
  <section className="section">
    <div className="container">
      <SpecialTitle />
    </div>
    <div className="container">
      <DayList />
    </div>
  </section>
)
