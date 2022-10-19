import './Hero.css';
export default function () {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <div className='hero-description'>Fast • Modern • Optimized</div>
        <div className='hero-title'>
          <div className='hero-title-one'>
            You want,
            <br />I build.
          </div>
        </div>
        <a className='button' href='mailto:imuhammadosama@icloud.com'>
          <span>Email Me</span>
          <span style={{ height: '18px', paddingLeft: '8px' }}>
            <svg
              width='18'
              height='17'
              viewBox='0 0 18 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M13.702 5.02344L10.1531 7.88077C9.48148 8.40732 8.54001 8.40732 7.8684 7.88077L4.28906 5.02344'
                stroke='white'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M17.25 5.17262L15.3155 6.23661L13.381 8.0744V14.381H16.0893C16.7304 14.381 17.25 13.8613 17.25 13.2202V5.17262Z'
                fill='#4CAF50'
              />
              <path
                d='M1 5.17262L2.39827 5.83423L4.86905 8.0744V14.381H2.16071C1.51961 14.381 1 13.8613 1 13.2202V5.17262Z'
                fill='#1E88E5'
              />
              <path
                d='M13.381 3.2381L9.125 6.43006L4.86905 3.2381L4.48214 5.48214L4.86905 8.07441L9.125 11.2664L13.381 8.07441L13.7679 5.48214L13.381 3.2381Z'
                fill='#E53935'
              />
              <path
                d='M1 3.66292V5.17262L4.86905 8.07441V3.2381L3.66036 2.33235C3.3725 2.11646 3.02274 2 2.66292 2C1.7444 2 1 2.7444 1 3.66292Z'
                fill='#C62828'
              />
              <path
                d='M17.25 3.66292V5.17262L13.381 8.07441V3.2381L14.5896 2.33235C14.8775 2.11646 15.2273 2 15.5871 2C16.5056 2 17.25 2.7444 17.25 3.66292Z'
                fill='#FBC02D'
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}
