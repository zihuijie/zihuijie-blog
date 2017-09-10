import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import { colors } from '../../utils/constants';
import  bg  from './blog_bg.jpg';


const Header = glamorous.header({
  marginTop:'0',
  windth:'100%',
  textAlign:'center',
  paddingTop:'60px',
  overflow:'hidden',
  flex: '1 1 0',
  alignContent:'center',
});


const H1 = glamorous.h1({
  color: `${colors.TOMATO_SHADOW}`,
  fontSize: '3em',
  padding:'15px 15px',
  display: 'inline-block',
  borderBottom: '2px solid',
  borderTop: '2px solid',
  borderColor:'firebrick',
  textTransform:'uppercase',
  textShadow: `0 1px 0 #888, -1px 0 0 #ccc, -1px 2px 0 #888, -2px 1px 0 #ccc, -2px 3px 0 #888, -3px 2px 0 #ccc, -3px 4px 0 #888, -4px 3px 0 #ccc, -4px 5px 0 #888, -5px 4px 0 #ccc, -5px 6px 0 #888, -6px 5px 0 #ccc, -6px 7px 0 #888`,
  fontFamily: 'merriweather',

})


const PageHeader = ({ children }) =>(

        <Header>
    <H1 className='shadow'>
        {children}
        </H1>
        </Header>
);

PageHeader.propTypes = {
  children: PropTypes.string,
}
export default PageHeader;
