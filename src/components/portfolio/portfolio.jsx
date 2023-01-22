import React from 'react';
import './portfolio.css'

const Portfolio = () => {
    return (
        <section id="portfolio">
                <h5>My</h5>
                <h2>Portfolio</h2>
            <div className='container__port'>
                <div className='content__port'>
                <a href="https://theboogiesboutique.netlify.app/">Boogie's Boutique</a>
                <p>Mock eCommerce site created for my girlfriend</p>
                </div>
            </div>
        </section>
    )
}

export default Portfolio