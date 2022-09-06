import { useState } from 'react';

import Portfolio from '../components/Porfolio/Portfolio';

import { websites } from '../data/websites';

import Hero from '../components/Hero/Hero';
import Reviews from '../components/Reviews/Reviews';

export default function Home() {
  const [currentPortfolioItems, setCurrentPortfolioItems] = useState(websites);
  const [selectedType, setSelectedType] = useState('All');
  const [count, setCount] = useState(4);

  const types = portfolioItems
    .map((portfolioItem) => portfolioItem.type)
    .filter((value, index, self) => self.indexOf(value) === index);
  // .sort();

  types.unshift('All');

  function filter(value) {
    setSelectedType(value);
    if (value === 'All') {
      setCurrentPortfolioItems(portfolioItems);
      return;
    }
    setCurrentPortfolioItems(
      portfolioItems.filter((portfolioItem) => portfolioItem.type === value)
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
          {currentPortfolioItems.map((item, index) => {
            return index < count ? (
              <Portfolio
                link={item.link}
                img={item.img}
                title={item.title}
                key={index}
              />
            ) : (
              ''
            );
          })}
        </div>
      </div>

      {count >= currentPortfolioItems.length ? (
        <div className='flex center pt-24'>
          <button
            className='secondary-button'
            onClick={() => {
              setCount(count + 4);
            }}
          >
            Check More Work
          </button>
        </div>
      ) : (
        ''
      )}

      <Reviews />
    </div>
  );
}
