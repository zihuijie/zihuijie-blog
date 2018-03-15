import React from 'react';
import glamorous from 'glamorous';

import { colors } from '../../utils/constants';
import { timelines, summary } from './workinfo';

import FaCalendar from 'react-icons/lib/fa/calendar';

const mediaQueries = {
  phone: '@media only screen and (max-width: 825px)',
}

const Wrapper = glamorous.div({
  fontFamily: 'Raleway',
  color: '#333',
});

const Header =() => (
  <div >
    <h2
    style={{textAlign:'center',
    fontFamily: 'Raleway',
    fontWeight:'bold',
    marginBottom:'1em'}}>
    My Work Timeline
    </h2>
    <p style={{textAlign:'center',
    marginBottom:'0'}}>{summary}</p>
  </div>
  );

  const TimelineWrapper = glamorous.div({
    position:'relative',
    padding:'0',
    width:'100%',
    marginTop: '20px',
    marginLeft:'auto',
    marginRight:'auto',
    ':before':{
      position:'absolute',
      left:'50%',
      top:'0',
      content:'""',
      display:'block',
      width:'2px',
      height:'100%',
      marginLeft:'-1px',
      background:'linear-gradient(to bottom, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%,  rgb(213,213,213) 92%,  rgba(213,213,213,0) 100%)',
    },
    [mediaQueries.phone]: {
      ':before':{
        left:'0%',
      },
    },
  });

  const ContentWrapper = glamorous.div({
    padding:'10px 40px',
    position:'relative',
    backgroundColor:'inherit',
    width:'50%',
      '.left': {
        left:'0',
      },
      '.right': {
        left:'50%',
      },

      '.left:after':{
        content:'""',
        position:'absolute',
        width:'25px',
        height:'25px',
        right:'-13px',
        border:'4px solid rgb(213,213,213)',
        background: `${colors.TOMATO_SHADOW}`,
        top:'15px',
        borderRadius:'50%',
        zIndex: '1',
      },
      '.right:after':{
        content:'""',
        position:'absolute',
        width:'25px',
        height:'25px',
        left:'-13px',
        border:'4px solid rgb(213,213,213)',
        background: `${colors.TOMATO_SHADOW}`,
        top:'15px',
        borderRadius:'50%',
        zIndex: '1',
      },

    '.left::before':{
      content:'""',
      height:'0',
      position:'absolute',
      top:'22px',
      width:'0',
      zIndex:'1',
      right:'30px',
      border:'4px solid rgb(213,213,213)',
      borderWidth:'10px 0 10px 10px',
      borderColor:'transparent transparent transparent rgb(213,213,213)',
    },
    '.right::before':{
      content:'""',
      height:'0',
      position:'absolute',
      top:'22px',
      width:'0',
      zIndex:'1',
      left:'30px',
      border:'4px solid rgb(213,213,213)',
      borderWidth:'10px 10px 10px 0',
      borderColor:'transparent rgb(213,213,213) transparent transparent',
    },
    '.right:: after': {
      left:'-16px',
    },
    [mediaQueries.phone]: {
      width:'100%',
      '.right':{
        left:'0%',
      },
      '.left:after, .right:after':{
        left:'-13px',
      },
      '.left::before':{
        content:'""',
        height:'0',
        position:'absolute',
        top:'22px',
        width:'0',
        zIndex:'1',
        left:'30px',
        border:'4px solid rgb(213,213,213)',
        borderWidth:'10px 10px 10px 0',
        borderColor:'transparent rgb(213,213,213) transparent transparent',
      },
    },
  });

  const Desc = glamorous.div({
    fontSize:'16px',
    [mediaQueries.phone]: {
      fontSize:'14px',
      lineHeight:'0.3em',
    },
    '> p': {
      marginBottom:'5px',
    }
  })

  const JobWrapper = glamorous.div({
    padding:'1em',
    background:'rgb(254,254,254)',
    boxShadow:'0 0 1px rgba(0,0,0,0.20)',
    position:'relative',
    borderRadius:'6px',
    zIndex:'5',

  })
const TimeLine = () => (
  <Wrapper>
<Header summary={summary}/>
<TimelineWrapper>
  {timelines.map((work, item) => (
    <ContentWrapper key={work.date} className={item%2 === 0 ? 'left': 'right'}>
       <JobWrapper>
      <h5 style={{textAlign:'center',
    fontFamily: 'Raleway', marginBottom:'0.7em'}}>{work.company}</h5>
      <Desc>
      <p style={{ fontSize:'14px',lineHeight:'1em'}}>{work.title}</p>
        <p>
          <span style={{marginRight:'5px'}}><FaCalendar color={`${colors.GREEN}`}/></span>
        {work.date}</p>
        <p style={{ fontSize:'12px', lineHeight: '1em'}}>{work.desc}</p>
</Desc>
      </JobWrapper>
  </ContentWrapper>
  ))}

</TimelineWrapper>
  </Wrapper>
);

export default TimeLine;