import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Link from 'gatsby-link';
import glamorous from 'glamorous';
import _ from 'underscore';

import FaToggle from 'react-icons/lib/fa/angle-double-down';

import { colors } from '../../utils/constants';

const mediaQueries = {
  phone: '@media only screen and (min-width: 650px)',
}

const Nav = glamorous.nav({
position:'relative',
width:'100%',
textAlign:'center',
height:'50px',
  background:`${colors.TOMATO}`,
  boxShadow: '1px 2px 3px rgba(0,0,0,0.2)',
  borderBottom:`2px solid ${colors.TOMATO}`,
zIndex:'100',
padding:'20px',
[mediaQueries.phone]: {
  padding:'0',
},
});


const Ul = glamorous.ul({
  listStyleType: 'none',
  display: 'flex',
  flexDirection:'column',
  background:`${colors.TOMATO}`,
  width:'100%',
  margin:'0',
  padding:'0',
  [mediaQueries.phone]: {
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  overflow:'hidden',
});

const ListLink = glamorous(Link)({
  textDecoration: 'none',
  textAlign: 'center',
  color:`${colors.WHITE}`,
  lineHeight:'50px',
  height:'50px',
  display: 'block',
  ':hover':{
    backgroundColor:`${colors.TOMATO_LIGHT}`,
  },
  [".active"]: {
    backgroundColor:`${colors.TOMATO_DARK}`,
  },
  transition: 'all 0.5s ease 0s, visibility 0s linear 0.5s',
  [mediaQueries.phone]: {
    flex: '1 100%',
  }
});

const Icon = glamorous.a({
    color:`${colors.WHITE}`,
    fontSize:'30px',
    display:'block',
    [mediaQueries.phone]: {
      display: 'none',
      position:'absolute',
      right:'10px',
      top:'20px',
    },
});


class SiteNavi extends Component {

  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this._handleWindowResize = _.debounce(this._handleWindowResize.bind(this), 100);
    this._toggleOpen = this._toggleOpen.bind(this);
    this._isMounted = false;
    this.state = {
      containerWidth: 0,
      visible: true,
      isOpen: false,
    }
  }


componentDidMount() {
  this._isMounted = true;
  window.addEventListener('resize', this._handleWindowResize);
}

componentWillUnMount() {
  this._isMounted = false;
  window.removeEventListener('resize', this._handleWindowResize);
}

_handleWindowResize() {
  if (this._isMounted) {
    this.setState({
      containerWidth:ReactDOM.findDOMNode(this._containerTarget).offsetWidth + 15,
    });

    if (this.state.containerWidth < 650) {
      this.setState({
        visible: false,
      })
    } else {
      this.setState({
        visible: true,
      })
    }

  }
  }

_toggleOpen() {

  if (!this.state.isOpen) {
    this.setState({
      visible: true,
      isOpen: true,
    })
  }

}

_handleClick() {
if (this.state.isOpen) {
  this.setState({
    visible: false,
    isOpen: false,
  })
}
}

render() {
  const { routes } = this.props;
  const { visible, isOpen, containerWidth } = this.state;

    return (
    <Nav ref={node => {
        if (node !== null) {
          this._containerTarget = node;
          if (!this._isMounted) {
            this._isMounted = true;
            this._handleWindowResize();
          }
        }
      }}>
      <Icon id="toggle" onClick={this._toggleOpen}>
         <FaToggle/>
    </Icon>
    { visible  &&
    <Ul>
{routes.map(route => (
  <ListLink to={route.to}
  key={route.to}
  exact
  onClick={this._handleClick}
  >{route.name}</ListLink>
))}
 </Ul> }

</Nav>
  );
}
}


export default SiteNavi;