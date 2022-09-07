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
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
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
              <input
                type='submit'
                className='contact-form-submit'
                value='Send'
              />
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
