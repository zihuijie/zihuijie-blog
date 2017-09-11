import React, { Component } from 'react';
import glamorous from 'glamorous';

import { colors } from '../../utils/constants';

import { sectionlist } from './workinfo';


const SectionWrapper = glamorous(Section)({
  position: 'relative',
  width: '100%',
  borderBottom:`5px solid ${colors.TOMATO_DARK}`,
  borderLeft:`2px solid ${colors.TOMATO_DARK}`,
  borderRight:`2px solid ${colors.TOMATO_DARK}`,

})

const Button = glamorous.button({
    position:'absolute',
    right:'0',
    margin: '0',
    padding: '0',
    height: '3em',
    width:'3em',
    outline: '0',
    border: '0',
    border: '0',
    background:'none',
    textIndent:'-9999%',
    pointerEvents:'none',
    ':before':{
      content:'""',
      display:'block',
      position:'absolute',
      height: '12px',
      width:'4px',
      borderRadius:'.3em',
      background:`${colors.TOMATO_DARK}`,
      transformOrigin:'50%',
      top:'50%',
      left: '50%',
      transition:'all .25s ease-in-out',
      transform:'translate(75%, -50%) rotate(45deg)',
    },
    ':after':{
      content:'""',
      display:'block',
      position:'absolute',
      height: '12px',
      width:'4px',
      borderRadius:'.3em',
      background:`${colors.TOMATO_DARK}`,
      transformOrigin:'50%',
      top:'50%',
      left: '50%',
      transition:'all .25s ease-in-out',
      transform:'translate(-75%, -50%) rotate(-45deg)',
    },
});
articleWraper = glamorous.div({

});
class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      class: 'section open',
    }
  }

  _handleClick() {
    if (this.state.open) {
      this.setState({
        open: false,
        class:'section',
      })
    } else {
      this.setState({
        open: true,
        class:'section open',
      })
    }
  }
getInitialState() {
  return {
    open: fasle,
    class:'section',
  }
}
  render() {
   const { title, summary } = this.props;
    return (
      <div className={this.state.class}>
      <Button>toggle</Button>
      <div className="sectionhead" onClick={this._handleClick}>{title}</div>
      <div className="articlewrap">
        <div className="article">
          {summary}
        </div>
      </div>
    </div>
    );

}
}

const AccordionMain = () => (
  <div>
    { sectionlist.map(a =>
  <SectionWrapper key={a.title} title={a.title} summary={a.summary}/>
  )}
  </div>
);


export default AccordionMain;