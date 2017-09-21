import React , { Component } from 'react';
import glamorous from 'glamorous';

import { colors } from '../../utils/constants';

import FaPencil from 'react-icons/lib/fa/pencil';
import SocialIcons from './socialicons';

import config from '../../../data/SiteConfig';
import bg from './footer_bg.png';


const mediaQueries = {
    phone: '@media only screen and (min-width: 650px)',
  }

const Wrapper = glamorous.footer({
     position:'relative',
     height:'35vh',
    bottom:'0',
    right: '0',
    left:'0',
    width:'100%',
    backgroundImage: `url(${bg})`,
    backgroundSize: '100%',
    backgroundPosition: 'center',
    padding:'2em 1em 1em 1em',
    zIndex: '1',
     overflow: 'hidden',
    });

    const Container = glamorous.div({
        display: 'flex',
        flexDirection:'column',
        flex: '1 1 0',
        alignItems:'center',
        justifyContent:'space-around',
    });

    const TextDecor = glamorous.div({
        color: `${colors.TOMATO}`,
        textDecoration:`underline solid ${colors.TOMATO_DARK}`,
        ':hover': {
            textDecorationStyle:'wavy',
            textDecorationColor:'initial',
        },
        marginBottom:'1em',
    });

const H2 = glamorous.h2({
    textAlign: 'center',
    marginTop: '1em',
    fontSize:'1em',
    color: `${colors.TOMATO}`,
    [mediaQueries.phone]: {
        marginTop: '0.5em',
        fontSize:'1.5em',
      }
});

const Copyright = glamorous.small({
    textAlign: 'center',
    color: `${colors.TOMATO}`,
    marginTop:'-15px',
});


class Footer extends Component {
    render() {
        return (
        <Wrapper>
           <Container>
            <TextDecor>
            <H2>Get in
                <span style={{marginLeft:'5px', marginRight:'5px'}}><FaPencil/></span>
                Touch</H2>
             </TextDecor>
             <SocialIcons />
                <Copyright>
    {config.copyright}
    </Copyright>
           </Container>
        </Wrapper>
        );
}}

export default Footer;
