import './Footer.css';
import Gmail from '../../assets/connect/gmail.svg';
import WhatsApp from '../../assets/connect/whatsapp.svg';
import Skype from '../../assets/connect/skype.svg';
import Messenger from '../../assets/connect/messenger.svg';

export default function () {
  return (
    <div className='footer'>
      <div className='flex center'>
        <div className='connect'>
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
        </div>
      </div>
    </div>
  );
}
