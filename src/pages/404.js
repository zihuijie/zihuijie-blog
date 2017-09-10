import React from 'react';
import glamorous from 'glamorous';
import Link from 'gatsby-link'

import PageHeader from '../components/Header';
import bg from '../components/Header/notfound_bg.png';

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


const Page404 = () => (
<section id="page404"  className='main'>
<HeaderContainer>
 <PageHeader>
    Page Not Found
     </PageHeader>
     </HeaderContainer>
<article>
<h3>

      Please go back to
      <Link to="/"> Main</Link>
    </h3>
</article>
</section>
);
export default Page404