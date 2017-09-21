import React from 'react';
import glamorous from 'glamorous';

import PageHeader from '../components/Header';
import bg from '../components/Header/work_bg.jpg';
import { Wrapper } from '../components/Wrapper';
import Work from '../components/Work';

const HeaderContainer= glamorous.div({
  height:'200px',
  backgroundImage:`url(${bg})`,
backgroundSize:'100% 100%',
backgroundRepeat:'no-repeat',
backgorundPosition:'center center',
backgroundBlendMode:'luminosity',
backgroundAttachment:'fixed',
borderBottom: '1px solid #ccc',
boxShadow: '0 1px 1px 0 rgba(0,0,0,.2)',
});


const WorkPage = () => (
<section id="work"  className='main'>
<HeaderContainer>
 <PageHeader>
    My Work
     </PageHeader>
     </HeaderContainer>
<Wrapper>
<article className='site-content'>
<Work />
</article>
</Wrapper>
</section>
);



export default WorkPage;