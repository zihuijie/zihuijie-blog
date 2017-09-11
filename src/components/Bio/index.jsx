import React from 'react';
import glamorous from 'glamorous';

import logo from '../../../static/logos/logo.png';
import { rhythm } from '../../utils/typography';

import config from '../../../data/SiteConfig';

const Avatar = glamorous.img({
  width: '50px',
  height:'100%',
  marginRight:'1em',
});

const Content = glamorous.div({
  fontFamily: 'Indie Flower',
  size:'8px'
})
const Bio = () => (
  <Content>
  <p>
  Written by <strong>Zi Huijie</strong>.{''} {config.userDescription} .{' '}
  <Avatar src={logo} />
</p>
</Content>
);

export default Bio;
