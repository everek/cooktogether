import React from 'react'
import { Router, Link } from "@reach/router";
import '../styles/main.scss'
import DayList from '../components/DayList/DayList';
import SpecialTitle from '../components/SpecialTitle/SpecialTitle';
import DayDetail from '../components/DayDetail/DayDetail';

export default () => (
  <section className="section">
    <div className="container">
      <SpecialTitle />
    </div>
    <div className="container menu-container">
      <Link className="button is-primary is-pulled-right" to="createDay">✨ Neues Menü</Link>
    </div>
    <div className="container">
      <DayList />
    </div>
  </section>
)
