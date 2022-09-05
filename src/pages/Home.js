import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Portfolio from '../components/Porfolio/Portfolio';
import axios from 'axios';
import { samples } from '../data/samples';

import Hero from '../components/Hero/Hero';
import Reviews from '../components/Reviews/Reviews';

export default function Home() {
  const navigate = useNavigate();
  const [portfolioItems, setPortfolioItems] = useState(samples);
  const [currentPortfolioItems, setCurrentPortfolioItems] = useState(samples);
  const [selectedType, setSelectedType] = useState('All');
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   async function fetch() {
  //     setLoading(true);
  //     const getWebsites = (
  //       await axios.get(
  //         'https://opensheet.elk.sh/1dMessZ5rcfU8d2VuZjY13rhJd5iOzW1p2rKH_d2sxio/1'
  //       )
  //     ).data;
  //     setPortfolioItems(getWebsites);
  //     setCurrentPortfolioItems(getWebsites);
  //     setLoading(false);
  //   }
  //   fetch();
  // }, []);
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

  if (loading) {
    return (
      <div className='center-center'>
        <img src='https://res.cloudinary.com/imuhammadosama/image/upload/v1658069428/Portfolio/Loading_b2lqoz.gif' />
      </div>
    );
  }

  return (
    <div>
      <Hero />
      <div>
        <div className='filters'>
          {types.map((type, index) => {
            return (
              <div
                onClick={() => filter(type)}
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
      <div className='flex center pt-24'>
        <button className='secondary-button' onClick={() => navigate('/work')}>
          Check More Work
        </button>
      </div>
      <Reviews />
    </div>
  );
}
