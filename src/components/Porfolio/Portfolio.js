import './Portfolio.css';

export default function (props) {
  return (
    <div className='portfolio-items'>
      <a className='portfolio-item' href={props.link} target='_blank'>
        <img
          src={props.img}
          alt=''
          className='portfolio-img'
          width='720'
          height='1281'
          loading='lazy'
        />
        <div className='portfolio-link'>
          <div className='portfolio-type'>Visit website</div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='#18181a'
            className='arrow'
            width='16'
            height='16'
          >
            <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z'></path>{' '}
            <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'></path>
          </svg>
        </div>
      </a>
      <div className='portfolio-title'>{props.title}</div>
      <div className='portfolio-date'>October 27, 2022</div>
    </div>
  );
}
