import React from 'react';
import glamorous from 'glamorous';

import { colors } from '../../utils/constants';

import { Image } from '../Wrapper';
import logo from '../../../static/logos/logo.png';

import PortfolioCards from './PortfolioCards';

const Portfolio = () => (
<div>

<Image src={logo}/><h1>
    Web Development
</h1>

 <PortfolioCards />

    </div>
);

export default Portfolio;