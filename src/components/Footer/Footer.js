import './Footer.css';

export default function () {
  return (
    <div className='footer'>
      <div>
        <a className='back-to-top' id='backToTop' href='#navbar'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8.9995 5.41381L9.0002 14.0002L6.99909 14.0002L6.9998 5.41522L4.00025 8.41477L2.58604 7.00056L8.00035 1.58624L13.414 6.99985L11.9997 8.41406L8.9995 5.41381Z'
              fill='#1e1e1e'
              className='arrow'
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
