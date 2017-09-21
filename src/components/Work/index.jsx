import React from 'react';

import logo from '../../../static/logos/logo.png';
import { Image } from '../Wrapper';
import TimeLine from './timeline';


const Work = () => (
  <div>
<h1>
<Image src={logo}/>
    Timeline
</h1>
  <TimeLine />
</div>
  );

export default Work;