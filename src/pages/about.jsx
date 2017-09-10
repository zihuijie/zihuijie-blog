import React from 'react';
import glamorous from 'glamorous';

import Portfolio from '../components/Portfolio';
import PageHeader from '../components/Header';
import { Wrapper } from '../components/Wrapper';
import bg from '../components/Header/about_bg.jpg';

import About from '../components/About';

const HeaderContainer= glamorous.div({
  height:'200px',
  backgroundImage:`url(${bg})`,
backgroundSize:'100% 100%',
backgroundRepeat:'no-repeat',
backgorundPosition:'center center',
backgroundBlendMode:'luminosity',
borderBottom: '1px solid #ccc',
boxShadow: '0 1px 1px 0 rgba(0,0,0,.2)',
});


const AboutPage = () => (
<section id="about"  className='main'>
<HeaderContainer>
 <PageHeader>
    About Me
     </PageHeader>
     </HeaderContainer>
<Wrapper>
<About />
</Wrapper>
</section>
);
export default AboutPage;