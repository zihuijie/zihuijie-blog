import React from 'react';
import glamorous from 'glamorous';
import Media from 'react-media';

import { Header, Image, Grid, Reveal, Segment } from 'semantic-ui-react';

import AnimateLink from './AnimateLink';
import bg from './background.png';
import logo from '../../../static/logos/logo.png';

const Wrapper = glamorous.header({
height: '100vh',
padding: '1em 0em',
backgroundImage: `url(${bg})`,
backgroundSize: 'cover',
backgroundPosition: 'center',
display: 'flex',
flexDirection: 'column',
justifyContent: 'center',
alighItems: 'center',
textAlign: 'center',
padding: '0 20px',
});


const Landing = () => (
    <Wrapper>
      <Media query="(max-width: 800px)">
        {matches => matches ? (
          <Grid verticalAlign="middle" centered columns={3} style={{marginBottom:'6em'}}>     
            <Grid.Column >
              <Header as="h2" >Welcome</Header>
              <AnimateLink
                fontFamily="Montserrat"
                fontSize="2em"
                fontWeight="700"
              >
                zihuijie.io
              </AnimateLink>
            <Image src={logo} size="tiny"/>
            </Grid.Column>               
          </Grid>
        ):(
          <Grid verticalAlign="middle" centered columns={8} style={{marginBottom:'6em'}}>     
          <Grid.Column width={2}>
          </Grid.Column>
            <Grid.Column width={4}> 
                <Reveal animated="move up">
                  <Reveal.Content visible>
              <Image src={logo} size="small" style={{backgroundColor:"white"}}/>  
              </Reveal.Content>
              <Reveal.Content hidden>           
              <Header as="h1" >Welcome</Header>
              </Reveal.Content>
              </Reveal>     
            <AnimateLink
                fontFamily="Montserrat"
                fontSize="2.5em"
                fontWeight="700"
              >
                zihuijie.io
              </AnimateLink>   
            </Grid.Column>  
            <Grid.Column width={2}>
            </Grid.Column>           
          </Grid>
        )}
      </Media>

    </Wrapper>
);

export default Landing;