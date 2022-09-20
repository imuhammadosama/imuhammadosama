import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
export default function () {
  const [selectedItem, setSelectedItem] = useState('');
  const [opened, setOpened] = useState(false);
  useEffect(() => {}, []);
  return (
    <div className='navbar' id='navbar'>
      <Link to='/' className='logo clickable'>
        <div className='favicon'>
          <svg
            width='62'
            height='32'
            viewBox='0 0 62 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect width='62' height='32' rx='16' fill='#333333' />
            <rect
              x='35'
              y='5'
              width='21.8182'
              height='21.8182'
              rx='10.9091'
              fill='white'
            />
            <rect
              x='41.6364'
              y='11.6364'
              width='8.72727'
              height='8.72727'
              rx='4.36364'
              fill='#333333'
            />
            <path
              d='M9 8.5C9 6.567 10.567 5 12.5 5V5C14.433 5 16 6.567 16 8.5V23.5C16 25.433 14.433 27 12.5 27V27C10.567 27 9 25.433 9 23.5V8.5Z'
              fill='white'
            />
            <rect x='17' y='5' width='7' height='22' rx='3.5' fill='white' />
            <rect x='25' y='5' width='7' height='22' rx='3.5' fill='white' />
          </svg>
        </div>
        <div className='logo-text'>Muhammad Osama</div>
      </Link>
      <div className='menu'>
        <Link
          to='/'
          className={selectedItem === 'Home' ? 'menu-item-active' : 'menu-item'}
          onClick={() => setSelectedItem('Home')}
        >
          Home
        </Link>

        <Link
          to='about'
          className={
            selectedItem === 'About' ? 'menu-item-active' : 'menu-item'
          }
          onClick={() => setSelectedItem('About')}
        >
          About
        </Link>
        <Link
          to='blog'
          className={selectedItem === 'Blog' ? 'menu-item-active' : 'menu-item'}
          onClick={() => setSelectedItem('Blog')}
        >
          Blog
        </Link>
        <Link
          to='resources'
          className={
            selectedItem === 'Resources' ? 'menu-item-active' : 'menu-item'
          }
          onClick={() => setSelectedItem('Resources')}
        >
          Resources
        </Link>
        <Link
          to='contact'
          className={
            selectedItem === 'Contact' ? 'menu-item-active' : 'menu-item'
          }
          onClick={() => setSelectedItem('Contact')}
        >
          Contact
        </Link>
      </div>
      <div className='burger-menu'>
        <div
          className='burger-parent'
          onClick={() => (opened ? setOpened(false) : setOpened(true))}
        >
          {opened ? (
            <svg
              width='42'
              height='32'
              viewBox='0 0 42 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='42' height='32' rx='16' fill='#333333' />
              <rect
                x='26.9749'
                y='6'
                width='7'
                height='22'
                rx='3.5'
                transform='rotate(45 26.9749 6)'
                fill='white'
              />
              <rect
                x='11'
                y='11.0312'
                width='7'
                height='22'
                rx='3.5'
                transform='rotate(-45 11 11.0312)'
                fill='white'
              />
            </svg>
          ) : (
            <svg
              width='42'
              height='32'
              viewBox='0 0 42 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='42' height='32' rx='16' fill='#333333' />
              <path
                d='M28 4.5C29.933 4.5 31.5 6.067 31.5 8V8C31.5 9.933 29.933 11.5 28 11.5L13 11.5C11.067 11.5 9.5 9.933 9.5 8V8C9.5 6.067 11.067 4.5 13 4.5L28 4.5Z'
                fill='white'
              />
              <rect
                x='31.5'
                y='12.5'
                width='7'
                height='22'
                rx='3.5'
                transform='rotate(90 31.5 12.5)'
                fill='white'
              />
              <rect
                x='31.5'
                y='20.5'
                width='7'
                height='22'
                rx='3.5'
                transform='rotate(90 31.5 20.5)'
                fill='white'
              />
            </svg>
          )}
          <div
            className={`${
              opened ? 'show burger-childern ' : 'hide burger-childern '
            }`}
          >
            <div className='burger-items'>
              <Link
                to='/'
                onClick={() => setSelectedItem('Icons')}
                className='burger-item'
              >
                Home
              </Link>
            </div>
            <div className='burger-items'>
              <Link
                to='/About'
                onClick={() => setSelectedItem('about')}
                className='burger-item'
              >
                About
              </Link>
            </div>
            <div className='burger-items'>
              <Link
                to='/Blog'
                onClick={() => setSelectedItem('blog')}
                className='burger-item'
              >
                Blog
              </Link>
            </div>
            <div className='burger-items'>
              <Link
                to='/contact'
                onClick={() => setSelectedItem('Contact')}
                className='burger-item'
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
