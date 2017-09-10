import React  from 'react';
import glamorous from 'glamorous';

import { colors } from '../../utils/constants';

import FaFacebook from 'react-icons/lib/fa/facebook-square';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaGoogle from 'react-icons/lib/fa/google';
import FaGithub from 'react-icons/lib/fa/github';
import FaPinterest from 'react-icons/lib/fa/pinterest';
import FaLinkedin from 'react-icons/lib/fa/linkedin-square';
import FaMail from 'react-icons/lib/fa/envelope';
import FaWechat from 'react-icons/lib/fa/wechat';

const mediaQueries = {
    phone: '@media only screen and (min-width: 650px)',
  }
  
const Social = glamorous.div({
 position: 'relative',
 marginTop: '1.5em',
   display:'flex',
   flexFlow:'row wrap',
   justifyContent:'center',
   alignItems:'center',
    transform: 'translateY(-50%)',
});

const Link = glamorous.a({
    display: 'inline-block',
    verticalAlign: 'middle',
    position: 'relative',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: `2px dashed ${colors.TOMATO}`,
    backgroundClip: 'content-box',
    padding: '6px',
    transition: '.5s',
    color: '#D7D0BE',
    marginLeft: '15px',
    marginRight: '15px',
    fontSize: '20px',
    ':hover': {
        padding: '15px',
        color: 'white',
        marginLeft: '-5px',
        transform: 'translateX(10px) rotate(360deg)',
    },
    [mediaQueries.phone]: {
        fontSize: '30px',
        padding: '10px',
        width: '70px',
        height: '70px',
      }
});

const Span = glamorous.span({
    display: 'block',
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
});
const SocialIcons = () => (
<Social>
<Link href="https://www.facebook.com/jane.zi" 
target="_blank"  
style={{backgroundColor: '#3B5998'}}>
<Span><FaFacebook/></Span>
</Link>
<Link href="https://github.com/zihuijie/" 
target="_blank"  
style={{backgroundColor: '#24292e'}}>
<Span><FaGithub/></Span>
</Link>
<Link href="https://www.linkedin.com/in/huijie-jane-zi-8a45533" 
target="_blank"  
style={{backgroundColor: '#0077B5'}}>
<Span><FaLinkedin/></Span>
</Link>
<Link href="https://twitter.com/zihuijie" 
target="_blank"  
style={{backgroundColor: '#00ACEE'}}>
<Span><FaTwitter/></Span>
</Link>
<Link href="http://www.pinterest.com/huijiezi/" 
target="_blank"  
style={{backgroundColor: '#bd081c'}}>
<Span><FaPinterest/></Span>
</Link>
<Link href="#" 
target="_blank"  
style={{backgroundColor: '#09b507'}}>
<Span><FaWechat/></Span>
</Link>
<Link href="mailto:zi.huijie@gmail.com" 
target="_blank"  
style={{backgroundColor: '#A8A8A8'}}>
<Span><FaMail/></Span>
</Link>
</Social>
);

export default SocialIcons;