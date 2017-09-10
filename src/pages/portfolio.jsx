import React from 'react';

import Portfolio from '../components/Portfolio';
import PageHeader from '../components/Header';

const PortfolioPage = () => (
<section id="portfolio" style={{ marginTop: '7em' }}>
        <PageHeader>Portfolio</PageHeader>
    <article>
<Portfolio />
</article>
</section>
);

export default PortfolioPage;