import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import { colors } from '../../utils/constants';
import  bg  from './blog_bg.jpg';
const Header = glamorous.header({
  marginTop:'0',
  position:'relative',
  backgroundImage:`url(${bg})`,
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
  backgorundPosition:'center',
  backgroundBlendMode:'luminosity',
  width:'100%',
  height:'200px',
  borderBottom: '1px solid #ccc',
  textAlign:'center',
  paddingTop:'60px',
});


const H1 = glamorous.h1({
  fontSize: '2em',
  padding:'15px 15px',
  display: 'inline-block',
  borderBottom: '2px solid',
  borderTop: '2px solid',
  borderColor:'firebrick',
  textShadow: '0 0 1px rgba(0,0,0,.85)',
  fontFamily: 'merriweather',
})


const PageHeader = ({ children }) =>( 
      
        <Header>
    <H1>
        {children}
        </H1>
        </Header>   
);

PageHeader.propTypes = {
  children: PropTypes.string, 
}
export default PageHeader;
