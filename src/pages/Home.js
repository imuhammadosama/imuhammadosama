import { useEffect, useState } from 'react';
import Portfolio from '../components/Porfolio/Portfolio';

import { samples } from '../data/samples';

import Hero from '../components/Hero/Hero';
import Reviews from '../components/Reviews/Reviews';

export default function Home() {
  return (
    <div>
      <Hero />

      <div className='portfolio'>
        {samples.map((item, index) => {
          return (
            <Portfolio
              link={item.link}
              img={item.img}
              title={item.title}
              key={index}
            />
          );
        })}
      </div>

      <div className='flex center pt-24'>
        <a className='secondary-button' href='/work'>
          Check More Work
        </a>
      </div>
      <Reviews />
    </div>
  );
}
