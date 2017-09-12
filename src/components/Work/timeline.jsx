import React, { Component } from 'react';
import glamorous from 'glamorous';


import { colors } from '../../utils/constants';
import { timelines, summary } from './workinfo';

import './timeline.scss';

const mediaQueries = {
  phone: '@media only screen and (min-width: 850px)',
}
const Header =({summary}) => (
<div >
  <h2
  style={{textAlign:'center',
  fontFamily: 'Raleway',
  fontWeight:'bold',
  marginBottom:'0'}}>
  My Work Timeline
  </h2>
  <p style={{textAlign:'center',
  marginBottom:'0'}}>{summary}</p>
</div>
);

const Wrapper = glamorous.div({
  fontFamily: 'Raleway',
  color: '#333',
})

const TimeLine = () => (
  <Wrapper>
<Header summary={summary}/>
<ul className='timeline'>
  {timelines.map((work, item) => (
    <li key={work.date}>
    <div className={'direction-'+(item%2 ? 'r':'l')}>
      <div className="flag-wrapper">
        <span className="hexa"></span>
        <span className="flag">{work.company}</span>
        <span className="time-wrapper"><span className="time">{work.date}</span></span>
      </div>
      <div className="desc">
      <h5>{work.title}</h5>
        <p>{work.desc}</p>
        </div>
    </div>
  </li>
  ))}

</ul>
  </Wrapper>
);

export default TimeLine;