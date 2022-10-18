import './Hero.css';
export default function () {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <div className='hero-description'>Fast • Modern • Optimized </div>
        <div className='hero-title'>
          <div className='hero-title-one'>Get your website built!</div>
        </div>
        <a className='hero-button' href='mailto:imuhammadosama@icloud.com'>
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
                class='paint-stroke-22 paint-fill-ffd'
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M5.06674 1.39844H12.9108C14.0418 1.41112 15.1183 1.88926 15.8896 2.7215C16.6608 3.55373 17.0595 4.66741 16.9928 5.80317V11.2344C17.0595 12.3702 16.6608 13.4839 15.8896 14.3161C15.1183 15.1483 14.0418 15.6265 12.9108 15.6391H5.06674C2.63736 15.6391 1 13.6628 1 11.2344V5.80317C1 3.37482 2.63736 1.39844 5.06674 1.39844Z'
                stroke='#333333'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
              <path
                class='paint-stroke-22'
                d='M13.702 6.02344L10.1531 8.88077C9.48148 9.40732 8.54001 9.40732 7.8684 8.88077L4.28906 6.02344'
                stroke='#333333'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></path>
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}
