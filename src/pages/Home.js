import { useState } from 'react';

import Portfolio from '../components/Porfolio/Portfolio';

import { websites } from '../data/websites';

import Hero from '../components/Hero/Hero';
import Reviews from '../components/Reviews/Reviews';

export default function Home() {
  const [count, setCount] = useState(8);
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
          {portfolioItems
            .filter((portfolio, index) => {
              return index < count;
            })
            .map((item, index) => {
              return (
                <Portfolio
                  link={item.link}
                  img={item.img}
                  title={item.title}
                  key={index}
                  build={item.build}
                />
              );
            })}
        </div>
        <div className='flex center'>
          {count > portfolioItems.length || count === portfolioItems.length ? (
            ''
          ) : (
            <button
              className='button mt-16'
              onClick={() => setCount(count + 4)}
            >
              Check More
            </button>
          )}
        </div>
      </div>

      <Reviews />
    </div>
  );
}