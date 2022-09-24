import './About.css';
import Twitter from '../../assets/socials/twitter.png';
import Instagram from '../../assets/socials/instagram.png';
import Linkedin from '../../assets/socials/linkedin.png';

export default function () {
  return (
    <div className='about-page'>
      <div className='about-subheader'>
        <div className='about-subheader-title'>
          Hi 👋, Nice to meet you. I am
        </div>
        <div className='about-subheader-description'>Muhammad Osama</div>
        <div className='about-subheader-subdescription'>
          Website Developer & UI/UX Designer
        </div>
        <div className='about-socials'>
          <a href='https://twitter.com/imuhammadosama' target='_blank'>
            <img src={Twitter} className='about-social-icon' />
          </a>
          <a href='https://linkedin.com/in/imuhammadosama' target='_blank'>
            <img src={Linkedin} className='about-social-icon' />
          </a>
          <a href='https://instagram.com/imuhammadosama' target='_blank'>
            <img src={Instagram} className='about-social-icon' />
          </a>
        </div>
      </div>
    </div>
  );
}
