import React, { Component } from 'react';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

import logo from '../../../static/logos/logo.png';
import { rhythm } from '../../utils/typography';

import config from '../../../data/SiteConfig';

class Bio extends Component {
  render() {
    return (
      <div style={{ marginTop: '1.5em' }}>        
        <p>       
        Written by <strong>Zi Huijie</strong>.{''} {config.userDescription} .{' '}
        <img src={logo} />
      </p>
      </div>
    );
  }
}

export default Bio;
