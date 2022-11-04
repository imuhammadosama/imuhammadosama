import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function () {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        'imuhammadosama',
        'imuhammadosama',
        form.current,
        'VdSVobMfhmKrcOFN4'
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            setIsSubmitted('yes');
            setIsSubmitting(false);
            showToast();
          } else {
            setIsSubmitted('no');
            setIsSubmitting(false);
            showToast();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  function showToast() {
    var x = document.getElementById('toast');
    x.className = 'show';
    setTimeout(function () {
      x.className = x.className.replace('show', '');
    }, 3000);
  }

  return (
    <div className='contact-page'>
      <div className='contact-title'>
        Get in touch with <br />
        <div className='contact-subtitle'>Muhammad Osama</div>
      </div>
      <div className='contact-content'>
        <form className='contact-form' ref={form}>
          <div className='contact-fields'>
            <div className='contact-form-left-inputs'>
              <input
                className='contact-form-input'
                placeholder='Name'
                name='name'
                type='text'
              />
              <input
                className='contact-form-input'
                placeholder='Email'
                name='email'
                type='email'
              />
              <input
                className='contact-form-input'
                placeholder='Subject'
                name='subject'
                type='text'
              />
            </div>
            <div className='contact-form-right-input'>
              <textarea
                className='contact-form-textarea'
                placeholder='Message'
                name='message'
              />
            </div>
          </div>
          <div className='contact-form-button'>
            {isSubmitting ? (
              <input
                type='submit'
                className='contact-form-submit disable'
                value='Sending...'
              />
            ) : (
              <button
                className='button contact-form-submit'
                onClick={sendEmail}
              >
                Send &nbsp;
                <svg
                  width='18'
                  height='17'
                  viewBox='0 0 18 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='send-icon'
                >
                  <g clip-path='url(#clip0_0_3)'>
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
              </button>
            )}
          </div>
        </form>
      </div>
      <div id='toast'>
        I have recieved your message. <br />I will get back to you as soon as
        possible. <br />
        Thanks for your patience.
      </div>

      <div className='contact-page-footer'>
        <div className='contact-details'>
          <div className='contact-detail'>
            <div className='contact-detail-title'>Phone / WhatsApp</div>
            <div className='contact-detail-description'>+923352522522</div>
          </div>
          <div className='contact-detail'>
            <div className='contact-detail-title'>Email</div>
            <div className='contact-detail-description'>
              imuhammadosama@icloud.com
            </div>
          </div>
          <div className='contact-detail'>
            <div className='contact-detail-title'>Address</div>
            <div className='contact-detail-description'>
              Wah Cantt, Pakistan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
