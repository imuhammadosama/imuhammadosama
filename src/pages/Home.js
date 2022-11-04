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

  const builds = websites
    .map((portfolioItem) => portfolioItem.build)
    .filter((value, index, self) => self.indexOf(value) === index);

  types.unshift('All');

  function filterType(value) {
    setSelectedType(value);
    if (value === 'All') {
      setPortfolioItems(websites);
      return;
    }
    setPortfolioItems(
      websites.filter((portfolioItem) => portfolioItem.type === value)
    );
  }

  function filterBuild(value) {
    setSelectedType(value);
    if (value === 'All') {
      setPortfolioItems(websites);
      return;
    } else if (value === selectedType) {
      setPortfolioItems(websites);
      setSelectedType('All');
      return;
    }
    setPortfolioItems(
      websites.filter((portfolioItem) => portfolioItem.build === value)
    );
  }

  function getTagClass(type) {
    if (selectedType === type) {
      return 'selected-type';
    }
    return 'type';
  }

  function getBuildClass(build) {
    if (selectedType === build) {
      return 'build selected-build';
    }
    return 'build';
  }
  return (
    <div>
      <Hero />
      <div>
        <div className='filters'>
          {builds.map((build, index) => {
            return (
              <div
                onClick={() => {
                  filterBuild(build);
                }}
                className={getBuildClass(build)}
                key={index}
              >
                {build === 'WordPress' ? (
                  <svg
                    width='40'
                    height='40'
                    viewBox='0 0 40 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6.11126 19.9996C6.11034 25.3218 9.15071 30.1764 13.9392 32.4991L7.31364 14.3474C6.51938 16.1258 6.10973 18.0519 6.11126 19.9996ZM20.2441 21.2145L16.0763 33.3232C18.8744 34.1471 21.8609 34.0696 24.6124 33.1016C24.5738 33.0408 24.5405 32.9768 24.5129 32.9102L20.2441 21.2145ZM29.3762 19.2992C29.3576 17.9409 28.9612 16.6146 28.2312 15.4689C27.4847 14.5297 27.0125 13.4023 26.8669 12.2114C26.8332 10.8878 27.8758 9.78596 29.1992 9.7465C29.2609 9.7465 29.3193 9.75393 29.3791 9.75768C23.7241 4.57763 14.9406 4.96276 9.76064 10.6177C9.25944 11.1647 8.80301 11.7511 8.39559 12.3711C8.72153 12.3815 9.02874 12.388 9.28936 12.388C10.7418 12.388 12.9911 12.2113 12.9911 12.2113C13.3077 12.193 13.5792 12.4348 13.5975 12.7514C13.6153 13.0592 13.3867 13.3261 13.0798 13.3559C13.0798 13.3559 12.3271 13.444 11.4905 13.4878L16.5479 28.532L19.5878 19.4165L17.4239 13.4879C16.6756 13.4441 15.9672 13.356 15.9672 13.356C15.6517 13.3255 15.4205 13.0449 15.451 12.7294C15.4807 12.4223 15.7477 12.1936 16.0556 12.2114C16.0556 12.2114 18.3487 12.3881 19.7132 12.3881C21.1657 12.3881 23.4154 12.2114 23.4154 12.2114C23.7319 12.1929 24.0036 12.4345 24.0221 12.7509C24.0401 13.0592 23.8112 13.3265 23.5039 13.356C23.5039 13.356 22.7505 13.4441 21.9146 13.4879L26.9337 28.4175L28.3664 23.8774C28.9259 22.4093 29.2662 20.8666 29.3762 19.2992ZM32.2813 14.7648C32.2572 16.476 31.8983 18.1661 31.2248 19.7394L26.9828 32.0042C33.4889 28.2196 35.7969 19.9418 32.1878 13.3368C32.251 13.8101 32.2822 14.2872 32.2813 14.7648ZM20 3.33353C10.7953 3.33353 3.33334 10.7955 3.33334 20.0002C3.33334 29.2049 10.7953 36.6669 20 36.6669C29.2047 36.6669 36.6667 29.2049 36.6667 20.0002C36.6667 10.7955 29.2047 3.33353 20 3.33353ZM26.0978 34.436C21.2204 36.5001 15.6298 35.9567 11.2413 32.9918C8.72214 31.2911 6.75019 28.8965 5.56398 26.098C3.49936 21.2206 4.04298 15.6298 7.00848 11.2414C8.70891 8.72211 11.1035 6.74996 13.9022 5.56426C18.7796 3.50016 24.3702 4.04358 28.7588 7.00846C31.2779 8.70921 33.2498 11.1038 34.436 13.9023C36.5007 18.7797 35.957 24.3705 32.9915 28.7588C31.2911 31.2782 28.8965 33.2503 26.0978 34.436Z'
                      fill='#02749C'
                    />
                  </svg>
                ) : build === 'ReactJS' ? (
                  <svg
                    width='40'
                    height='40'
                    viewBox='0 0 40 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.0993 23.5333C22.0202 23.5333 23.5774 21.976 23.5774 20.0551C23.5774 18.1342 22.0202 16.577 20.0993 16.577C18.1784 16.577 16.6211 18.1342 16.6211 20.0551C16.6211 21.976 18.1784 23.5333 20.0993 23.5333Z'
                      fill='#61DAFB'
                    />
                    <path
                      d='M33.3101 14.3192C32.6389 14.0751 31.9372 13.8311 31.2049 13.6175C31.388 12.8853 31.5405 12.153 31.6626 11.4513C32.3033 7.42396 31.6016 4.58652 29.6489 3.48816C29.0692 3.15255 28.4285 3 27.6963 3C25.5606 3 22.8452 4.58652 20.0993 7.2409C17.3534 4.58652 14.638 3 12.5023 3C11.77 3 11.1293 3.15255 10.5496 3.48816C8.597 4.61703 7.89527 7.45447 8.53598 11.4513C8.65802 12.153 8.81057 12.8853 8.99363 13.6175C8.26139 13.8311 7.55966 14.0446 6.88844 14.3192C3.07468 15.7837 1 17.7974 1 20.0551C1 22.3129 3.10519 24.3265 6.88844 25.791C7.55966 26.0351 8.26139 26.2792 8.99363 26.4927C8.81057 27.225 8.65802 27.9572 8.53598 28.6589C7.89527 32.6863 8.597 35.5237 10.5496 36.6221C11.1293 36.9577 11.77 37.1102 12.5023 37.1102C14.6685 37.1102 17.3839 35.5237 20.0993 32.8693C22.8452 35.5237 25.5606 37.1102 27.6963 37.1102C28.4285 37.1102 29.0692 36.9577 29.6489 36.6221C31.6016 35.4932 32.3033 32.6558 31.6626 28.6589C31.5405 27.9572 31.388 27.225 31.2049 26.4927C31.9372 26.2792 32.6389 26.0656 33.3101 25.791C37.1239 24.3265 39.1986 22.3129 39.1986 20.0551C39.1986 17.7974 37.1239 15.7837 33.3101 14.3192ZM28.7946 5.01366C30.0456 5.7459 30.4727 8.00365 29.954 11.2072C29.8625 11.8479 29.7099 12.5191 29.5269 13.2209C27.9404 12.8547 26.2623 12.6107 24.4927 12.4581C23.4554 10.9936 22.3875 9.6817 21.3197 8.49181C23.5774 6.26457 25.8657 4.73907 27.7268 4.73907C28.1234 4.73907 28.4895 4.8306 28.7946 5.01366V5.01366ZM25.3775 23.1061C24.8283 24.0824 24.1876 25.0588 23.5164 26.0351C22.3875 26.1266 21.2587 26.1571 20.0993 26.1571C18.9094 26.1571 17.7805 26.1266 16.6822 26.0351C16.0109 25.0588 15.4007 24.0824 14.8516 23.1061C14.2719 22.0993 13.7227 21.0619 13.2345 20.0551C13.7227 19.0483 14.2719 18.0109 14.8516 17.0041C15.4007 16.0278 16.0414 15.0515 16.7127 14.0751C17.8415 13.9836 18.9704 13.9531 20.1298 13.9531C21.3197 13.9531 22.4486 13.9836 23.5469 14.0751C24.2181 15.0515 24.8283 16.0278 25.3775 17.0041C25.9572 18.0109 26.5064 19.0483 26.9946 20.0551C26.4759 21.0619 25.9572 22.0688 25.3775 23.1061ZM27.9099 22.0993C28.3675 23.1671 28.7336 24.2045 29.0692 25.2418C28.0319 25.4859 26.9335 25.669 25.7742 25.8215C26.1403 25.2418 26.5369 24.6316 26.8725 23.9909C27.2386 23.3502 27.5742 22.7095 27.9099 22.0993ZM20.0993 30.3675C19.367 29.5742 18.6653 28.72 17.9941 27.8352C18.6958 27.8657 19.3976 27.8962 20.0993 27.8962C20.801 27.8962 21.5027 27.8657 22.2045 27.8352C21.5333 28.72 20.8315 29.5742 20.0993 30.3675ZM14.4244 25.791C13.265 25.6385 12.1667 25.4554 11.1293 25.2113C11.4649 24.2045 11.8311 23.1366 12.2887 22.0688C12.6243 22.679 12.9599 23.3197 13.3261 23.9299C13.6922 24.6011 14.0583 25.1808 14.4244 25.791V25.791ZM12.2887 18.0109C11.8311 16.9431 11.4649 15.9057 11.1293 14.8684C12.1667 14.6243 13.265 14.4413 14.4244 14.2887C14.0583 14.8684 13.6617 15.4786 13.3261 16.1193C12.9599 16.76 12.6243 17.4007 12.2887 18.0109V18.0109ZM20.0993 9.74272C20.8315 10.536 21.5333 11.3903 22.2045 12.2751C21.5027 12.2445 20.801 12.214 20.0993 12.214C19.3976 12.214 18.6958 12.2445 17.9941 12.2751C18.6653 11.3903 19.367 10.536 20.0993 9.74272V9.74272ZM26.8725 16.1498L25.7742 14.3192C26.9335 14.4718 28.0319 14.6548 29.0692 14.8989C28.7336 15.9057 28.3675 16.9736 27.9099 18.0415C27.5742 17.4007 27.2386 16.76 26.8725 16.1498V16.1498ZM10.2445 11.2072C9.72587 8.00365 10.153 5.7459 11.4039 5.01366C11.709 4.8306 12.0751 4.73907 12.4718 4.73907C14.3024 4.73907 16.5906 6.23406 18.8789 8.49181C17.811 9.65119 16.7432 10.9936 15.7058 12.4581C13.9363 12.6107 12.2582 12.8853 10.6717 13.2209C10.4886 12.5191 10.3666 11.8479 10.2445 11.2072ZM2.70856 20.0551C2.70856 18.6211 4.44763 17.0956 7.49864 15.9668C8.10884 15.7227 8.78006 15.5091 9.45128 15.3261C9.93944 16.8516 10.5496 18.4686 11.2819 20.0856C10.5496 21.7027 9.90893 23.2892 9.45128 24.8147C5.2409 23.5943 2.70856 21.7637 2.70856 20.0551V20.0551ZM11.4039 35.0966C10.153 34.3643 9.72587 32.1066 10.2445 28.903C10.3361 28.2623 10.4886 27.5911 10.6717 26.8894C12.2582 27.2555 13.9363 27.4996 15.7058 27.6521C16.7432 29.1166 17.811 30.4285 18.8789 31.6184C16.6211 33.8457 14.3329 35.3712 12.4718 35.3712C12.0751 35.3712 11.709 35.2796 11.4039 35.0966ZM29.954 28.903C30.4727 32.1066 30.0456 34.3643 28.7946 35.0966C28.4895 35.2796 28.1234 35.3712 27.7268 35.3712C25.8962 35.3712 23.6079 33.8762 21.3197 31.6184C22.3875 30.459 23.4554 29.1166 24.4927 27.6521C26.2623 27.4996 27.9404 27.225 29.5269 26.8894C29.7099 27.5911 29.832 28.2623 29.954 28.903V28.903ZM32.6999 24.1435C32.0897 24.3875 31.4185 24.6011 30.7473 24.7842C30.2591 23.2587 29.6489 21.6416 28.9167 20.0246C29.6489 18.4076 30.2896 16.821 30.7473 15.2955C34.9577 16.5159 37.49 18.3466 37.49 20.0551C37.49 21.4891 35.7204 23.0146 32.6999 24.1435V24.1435Z'
                      fill='#61DAFB'
                    />
                  </svg>
                ) : build === 'figma' ? (
                  <svg
                    width='40'
                    height='40'
                    viewBox='0 0 40 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M14 38C17.312 38 20 35.312 20 32V26H14C10.688 26 8 28.688 8 32C8 35.312 10.688 38 14 38Z'
                      fill='#0ACF83'
                    />
                    <path
                      d='M8 20C8 16.688 10.688 14 14 14H20V26H14C10.688 26 8 23.312 8 20Z'
                      fill='#A259FF'
                    />
                    <path
                      d='M8 8C8 4.688 10.688 2 14 2H20V14H14C10.688 14 8 11.312 8 8Z'
                      fill='#F24E1E'
                    />
                    <path
                      d='M20 2H26C29.312 2 32 4.688 32 8C32 11.312 29.312 14 26 14H20V2Z'
                      fill='#FF7262'
                    />
                    <path
                      d='M32 20C32 23.312 29.312 26 26 26C22.688 26 20 23.312 20 20C20 16.688 22.688 14 26 14C29.312 14 32 16.688 32 20Z'
                      fill='#1ABCFE'
                    />
                  </svg>
                ) : (
                  <svg
                    width='40'
                    height='40'
                    viewBox='0 0 40 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M14 38C17.312 38 20 35.312 20 32V26H14C10.688 26 8 28.688 8 32C8 35.312 10.688 38 14 38Z'
                      fill='#0ACF83'
                    />
                    <path
                      d='M8 20C8 16.688 10.688 14 14 14H20V26H14C10.688 26 8 23.312 8 20Z'
                      fill='#A259FF'
                    />
                    <path
                      d='M8 8C8 4.688 10.688 2 14 2H20V14H14C10.688 14 8 11.312 8 8Z'
                      fill='#F24E1E'
                    />
                    <path
                      d='M20 2H26C29.312 2 32 4.688 32 8C32 11.312 29.312 14 26 14H20V2Z'
                      fill='#FF7262'
                    />
                    <path
                      d='M32 20C32 23.312 29.312 26 26 26C22.688 26 20 23.312 20 20C20 16.688 22.688 14 26 14C29.312 14 32 16.688 32 20Z'
                      fill='#1ABCFE'
                    />
                  </svg>
                )}
              </div>
            );
          })}
        </div>
        <div className='filters'>
          {types.map((type, index) => {
            return (
              <div
                onClick={() => {
                  filterType(type);
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
