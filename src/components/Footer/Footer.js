import './Footer.css';
import Gmail from '../../assets/connect/gmail.svg';
import WhatsApp from '../../assets/connect/whatsapp.svg';
import Skype from '../../assets/connect/skype.svg';
import Messenger from '../../assets/connect/messenger.svg';
import Twitter from '../../assets/connect/twitter.svg';
import Linkedin from '../../assets/connect/linkedin.svg';

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('connect').style.bottom = '10px';
    document.getElementById('topbar').style.top = '0px';
  } else {
    document.getElementById('connect').style.bottom = '-60px';
    document.getElementById('topbar').style.top = '-60px';
  }
  prevScrollpos = currentScrollPos;
};

export default function () {
  return (
    <div className='footer'>
      <div className='flex center'>
        <div className='connect' id='connect'>
          <a href='mailto:themuhammadosama@gmail.com' target='_blank'>
            <img src={Gmail} />
          </a>
          <a href='https://wa.me/+923352522522' target='_blank'>
            <img src={WhatsApp} />
          </a>
          <a href=''>
            <img src={Skype} />
          </a>
          <a href='https://www.messenger.com/t/imuhammadosama' target='_blank'>
            <img src={Messenger} />
          </a>
          <a href='https://www.twitter.com/imuhammadosama' target='_blank'>
            <img src={Twitter} />
          </a>
          <a href='https://www.linkedin.com/imuhammadosama' target='_blank'>
            <img src={Linkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}
