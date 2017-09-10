import React from 'react';
import glamorous from 'glamorous';

const mediaQueries = {
  phone: '@media only screen and (min-width: 650px)',
}

export const Wrapper = glamorous.div({
  maxWidth:'90%',
  margin:'auto',
  marginTop: '2em',
  marginBottom:'4em',
  padding: '2em',
  flex:'1 1 auto',
  boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, .4)',
  [mediaQueries.phone]: {
    marginBottom:'2em',
  }
});

export const Image = glamorous.img({
  height:'50px',
  width:'auto',
  verticalAlign:'middle',
  marginRight:'5px',
});