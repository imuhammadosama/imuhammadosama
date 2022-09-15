import { useState } from 'react';

import Portfolio from '../components/Porfolio/Portfolio';

import { websites } from '../data/websites';

import Hero from '../components/Hero/Hero';
import Reviews from '../components/Reviews/Reviews';

export default function Home() {
  const [portfolioItems, setPortfolioItems] = useState(websites);
  const [selectedType, setSelectedType] = useState('All');

  const types = websites
    .map((portfolioItem) => portfolioItem.type)
    .filter((value, index, self) => self.indexOf(value) === index);

  types.unshift('All');

  function filter(value) {
    setSelectedType(value);
    if (value === 'All') {
      setPortfolioItems(websites);
      return;
    }
    setPortfolioItems(
      websites.filter((portfolioItem) => portfolioItem.type === value)
    );
  }

  function getTagClass(type) {
    if (selectedType === type) {
      return 'selected-type';
    }
    return 'type';
  }

  return (
    <div>
      <Hero />
      <div>
        <div className='filters'>
          {types.map((type, index) => {
            return (
              <div
                onClick={() => {
                  filter(type);
                }}
                className={getTagClass(type)}
                key={index}
              >
                {type}
              </div>
            );
          })}
        </div>
        <div className='portfolio'>
          {portfolioItems.map((item, index) => {
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
      </div>

      <Reviews />
    </div>
  );
}
