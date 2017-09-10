import React from 'react';
import glamorous from 'glamorous';

import FaYoutube from 'react-icons/lib/fa/youtube';
import { colors } from '../../utils/constants';
import config from '../../../data/SiteConfig';

import logo from '../../../static/logos/logo.png';
import { content , sharelinks } from './content';

import { Image } from '../Wrapper';

const LinkWrapper = glamorous.ul({
    display:'block',
    padding: '2em',
    backgroundColor: `${colors.WHITE}`,
    boxShadow:`-2px 2px 2px 2px ${colors.TOMATO_LIGHT}`,
});

const Link = glamorous.li({
    listStyle:'none',
});

const UserLink = glamorous.a({
    marginLeft:'1em',
    color: `${colors.TOMATO_DARK}`,
    textDecoration:`underline solid ${colors.TOMATO_DARK}`,
    ':hover': {
        textDecorationStyle:'wavy',
        textDecorationColor:'initial',
    },
    marginBottom:'1em',
});


const UserfulLinks = () => (
    <LinkWrapper>
{sharelinks.map(l => (
    <Link key={l.name} >
            <FaYoutube size="35" color="hsl(0, 100%, 50%)"/>
            <UserLink href={l.link} target="_blank">{l.name} - {l.description}</UserLink>
    </Link>
))}
    </LinkWrapper>
);

const About = () => (
<div>
    <h1>
        <Image src={logo} />
        Welcome to Zihuijie.io
        </h1>
     {content.map(c => (
        <p dangerouslySetInnerHTML={{ __html: c.p }}
        key={c.item}/>
     ))}


<UserfulLinks />

<div>
    <h1> Contact </h1>
    <p>If you want to get in touch with me, please write an email or contact me with the Social Links below.
        </p>
        </div>
    </div>
);

export default About;