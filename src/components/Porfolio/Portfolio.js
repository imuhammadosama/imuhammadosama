import './Portfolio.css';

export default function (props) {
  return (
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
        <svg width='16' height='16' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='m10.743 6.964-6.071 6.072-1.415-1.415 6.071-6.07H5.086v-2h7.657v7.656h-2V6.964Z'
            fill='#1e1e1e'
            fillRule='nonzero'
            className='arrow'
          ></path>
        </svg>
      </div>
      <p className='portfolio-title'>{props.title}</p>
    </a>
  );
}
