import React from 'react';

import {Button, Container, Divider, Grid, Header, Icon, Image, List, Segment } from 'semantic-ui-react';

import config from '../../../data/SiteConfig';

import logo from '../../../static/logos/logo.png';
import { content , sharelinks } from './content';

const UserfulLinks = () => (
    <List relaxed>
        
{sharelinks.map(l => (
    <List.Item key={l.name} >
            <List.Icon name="youtube" />
            <List.Content>   
    <List.Header as="a"    
    href={l.link}
    target="_blank">
    {l.name}</List.Header>
    <List.Description>- {l.description}</List.Description>
   </List.Content>
    </List.Item>
))}
    </List>
);

const About = () => (
<Container text style={{ marginTop: '3em' }}>    
     <Header>
    <Header.Content > Welcome to Zihuijie.io </Header.Content>
      <Image src={logo} size="small" shape="circular" style={{marginLeft:'1em'}}/>
</Header>
     {content.map(c => (
        <p dangerouslySetInnerHTML={{ __html: c.p }} 
        key={c.item}/>
       
     ))}
     <Segment compact raised>
<UserfulLinks />
</Segment>
<Header>
    <Header.Content> Contact </Header.Content>
    </Header>
    <p>If you want to get in touch with me, please write a email or contact me with the Social Links below.</p>
    <Container textAlign="center" style={{marginBottom: '1em', marginTop: '1em'}}>
                           
          {config.userLinks.map(link => (
                <Button key={link.label} 
                circular
                size="big" 
                color="olive" 
                icon={link.label}                 
                href={link.url}
                target="_blank"
                key={link.label}
                />
            ))

          }           
         
        </Container>
    </Container>
);

export default About;