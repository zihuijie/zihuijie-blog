import React from 'react';
import glamorous from 'glamorous';

import FaGlobe from 'react-icons/lib/fa/globe';

import { Avatar, Card, CardTitle, CardSubTitle, CardContent } from '../Wrapper';
import { colors } from '../../utils/constants';
import { portfolios } from './portfolios';


const Button = glamorous.a({
    display: 'inline-block',
    verticalAlign: 'bottom',
    position: 'relative',
    transition: '.5s',
    color: `${colors.BLUE_DARK}`,
    marginLeft: '15px',
    marginRight: '15px',
    fontSize: '20px',
    fontFamily:'Port Lligat Slab',
    textDecoration: 'none',
    borderBottom:'2px solid transparent',
    transition: 'all ease-in-out 1s',
    ':hover':{
       color:`${colors.TOMATO_DARK}`,
       borderColor:`${colors.TOMATO_DARK}`,
    },
});
const Icon = glamorous(FaGlobe)({
   marginRight: '0.5em',
   fontSize:'35px',
   ':hover': {
    padding: '-10px',
    color: `${colors.TOMATO_DARK}`,
    transform: 'translateX(5px) rotate(360deg)',
},
});

const LineBreak = glamorous.hr({
    height: '10px',
    color: `${colors.TOMATO_DARK}`,
    backgroundImage: `linear-gradient(
      currentColor,
      currentColor 33.33%,
      transparent 33.33%,
      transparent 100%)`,
    backgroundSize: '100% 3px',
    width: '150px',
    margin:'1em auto 1em auto',
    textAlign:'center',
});

const Label = glamorous.label({
background:`${colors.TOMATO_LIGHT}`,
display:'inline-block',
position:'relative',
padding:'.25em .75em .25em .5em',
margin:'.5em 1.5em .5em .5em',
borderRadius:'3px 0 0 3px',
boxShadow:'0 1px 1px rgba(0,0,0,0.5)',
fontFamily:'Port Lligat Slab',
textShadow:'0 1px 1px white',
});
const PortfolioCard = ({ image, company, date, description, link}) => (
    <Card key={link}>
        <CardTitle>
        <Avatar src={require(image)} />
            <CardSubTitle>
            <h4><b>{company}</b></h4>
            <p>Completed at {date}</p>
            </CardSubTitle>
            </CardTitle>
        <CardContent>
           <p>Made with:
            {description.map(desc => (
                <Label key={desc} style={{margin: '0.5em'}}>{desc}</Label>
                ))}
             </p>
                <Button href={link}
                target="_blank">
               <span><Icon /></span>Visit Site
                </Button>
           </CardContent>
    </Card>
);

const PortfolioCards = ( ) => (

            <div>
                {portfolios.map((p, i) =>
                <div key={p.link}>
                <PortfolioCard
                image={p.image}
                company={p.company}
                date={p.date}
                description={p.description}
                link={p.link}
                />
                    {i != (portfolios.length -1 ) && <LineBreak />}
                </div>
              )}

            </div>
);

export default PortfolioCards;