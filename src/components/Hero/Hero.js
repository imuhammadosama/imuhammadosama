import './Hero.css';
export default function () {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <div className='hero-description'>Hello 👋, This is Osama!</div>
        <div className='hero-title'>
          <div className='hero-title-one'>
            <span className='hero-title-one-colored'>Building websites </span>
            at
            <br />
            afforable price.
          </div>
        </div>
        <a
          className='button email-button'
          href='mailto:imuhammadosama@icloud.com'
        >
          <span>Email Me</span>
          <span className='email-send-button'>
            <svg
              viewBox='0 0 18 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='send-icon'
            >
              <g clipPath='url(#clip0_0_3)'>
                <path
                  d='M7.64577 11.2187L10.3607 7.20436C10.6032 6.84599 10.5089 6.75169 10.1505 6.99418L6.13622 9.70914C5.89718 9.87092 5.51339 9.8775 5.28008 9.72421L1.35887 7.14893C1.00845 6.9189 1.05077 6.6069 1.45328 6.45251L16.2953 0.759965C16.5634 0.657158 16.6978 0.79148 16.5949 1.05958L10.9024 15.9016C10.748 16.3041 10.436 16.3465 10.206 15.996L7.6307 12.0748C7.47741 11.8415 7.48398 11.4577 7.64577 11.2187Z'
                  fill='#fff'
                  id='send-icon'
                />
              </g>
              <defs>
                <clipPath id='clip0_0_3'>
                  <rect width='18' height='17' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </span>
        </a>
        <div className='hero-image-section'>
          <img
            src='https://res.cloudinary.com/dvwpbbisf/image/upload/q_auto:eco/v1668251061/vlgc8dtm5hrtx8on7vsy.webp'
            className='hero-image'
          />
        </div>
      </div>
    </div>
  );
}
