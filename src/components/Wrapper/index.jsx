import React from 'react';
import glamorous from 'glamorous';

const mediaQueries = {
  phone: '@media only screen and (min-width: 650px)',
}

export const Wrapper = glamorous.div({
  maxWidth:'90%',
  minHeight:'100%',
  position: 'relative',
  margin:'0 auto',
  marginTop: '2em',
  marginBottom:'4em',
  padding: '2em',
  flex:'1 1 auto',
  [mediaQueries.phone]: {
    marginBottom:'2em',
  },
  borderBottom:'2px solid #e6e6e6',
});

export const Image = glamorous.img({
  height:'50px',
  width:'auto',
  verticalAlign:'middle',
  marginRight:'5px',
});

export const Card = glamorous.div({
  boxShadow: 'inset 0 0 10px #777777',
  transition:'0.3s',
  ':hover':{
      boxShadow: '0 0 10px #777777',
  },
  padding: '2em',

});
export const CardTitle = glamorous.div({
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
});
export const CardSubTitle = glamorous.div({
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'space-between',
});

export const CardContent = glamorous.div({
  padding: '2px 10px',
});

export const Avatar = glamorous.img({
  width: '100px',
  height:'100%',
  marginRight:'1em',
});