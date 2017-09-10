import React, { Component } from 'react';

import { portfolios } from './portfolios';


// const PortfolioCard = ({ image, company, date, description, link }) => (
//     <Card fluid style={{boxShadow:'rgb(204, 204, 204) 0px 0px 30px', padding:'0.5em'}}>
//         <Card.Content>
//         <Image src={require(image)} size="tiny" floated='left'/>        
//             <Card.Header>{company}</Card.Header>
//             <Card.Meta>Completed at {date}</Card.Meta>
//            <Card.Description>Made with:
//             {description.map(desc => (
//                 <Label key={desc} color="teal" style={{margin: '0.5em'}}>{desc}</Label>
//                 ))}
//              </Card.Description> 
//             <Card.Content extra>
//                 <Button basic color="teal" href={link} 
//                 target="_blank" 
//                 labelPosition="left" 
//                 icon="world" 
//                 content="Visit" floated='right'
//                 style={{margin:'0.5em'}}/>
//                 </Card.Content>
//            </Card.Content>
//     </Card>
// );

class PortfolioCards extends Component {
    render() {       
        return (
            // <Card.Group>      
            //     {portfolios.map(p =>
            //     <PortfolioCard
            //     image={p.image}
            //     company={p.company}
            //     date={p.date}
            //     description={p.description}
            //     link={p.link}
            //     key={p.link}/>
            //   )}
      
            // </Card.Group>
            <div>cards</div>
        );
    }
}

export default PortfolioCards;