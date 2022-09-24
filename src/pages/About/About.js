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
      <div className='about-download-resume'>
        <a
          className='resume-button'
          href='https://drive.google.com/uc?export=download&id=1vGEqBjFlSta9tktaq3vp8o7nt1Usjxh5
'
        >
          <span>Download Resume</span>
          <span style={{ height: '18px', paddingLeft: '8px' }}>
            <svg
              width='15'
              height='18'
              viewBox='0 0 15 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M8.609 1.27462C8.3251 1.25703 7.9523 1.25582 7.3768 1.25582C6.28248 1.25582 5.49678 1.25624 4.87849 1.30307C4.26676 1.34939 3.87022 1.43851 3.54692 1.58929C2.78893 1.9428 2.1797 2.55204 1.82618 3.31002C1.6754 3.63333 1.5863 4.02985 1.53997 4.6416C1.49314 5.25987 1.49272 6.04561 1.49272 7.13988V10.6744C1.49272 11.857 1.49321 12.7062 1.54767 13.3727C1.60153 14.0319 1.70503 14.4569 1.88053 14.8014C2.22166 15.471 2.76599 16.0152 3.4355 16.3564C3.77995 16.5319 4.20503 16.6354 4.86423 16.6893C5.53077 16.7437 6.37993 16.7442 7.56249 16.7442C8.74505 16.7442 9.59423 16.7437 10.2607 16.6893C10.92 16.6354 11.345 16.5319 11.6895 16.3564C12.3589 16.0152 12.9033 15.471 13.2445 14.8014C13.4199 14.4569 13.5234 14.0319 13.5773 13.3727C13.6318 12.7062 13.6323 11.857 13.6323 10.6744V7.58821C13.6323 6.98103 13.6309 6.58275 13.6117 6.2791H11.916H11.8905C11.4433 6.27911 11.0701 6.27912 10.7651 6.2542C10.447 6.22822 10.1485 6.17203 9.86607 6.02817C9.4329 5.80743 9.08069 5.45522 8.85991 5.02202C8.71608 4.73965 8.6599 4.44106 8.63387 4.12301C8.609 3.81807 8.609 3.4448 8.609 2.99761V2.97212V1.27462ZM13.2891 5.02329C13.2348 4.90879 13.1743 4.79711 13.1079 4.68876C12.8969 4.34442 12.5996 4.04137 11.8544 3.29626L11.5374 2.97922C10.8476 2.28939 10.5671 2.0138 10.2519 1.813C10.1272 1.73357 9.99793 1.66213 9.86482 1.59901V2.97212C9.86482 3.45137 9.86532 3.77304 9.88558 4.02075C9.90517 4.26113 9.94025 4.37607 9.97884 4.45188C10.0792 4.6488 10.2393 4.8089 10.4362 4.90923C10.5121 4.94786 10.627 4.98293 10.8674 5.00257C11.1151 5.0228 11.4368 5.02329 11.916 5.02329H13.2891ZM9.38225 0.114151C8.86678 -0.000144852 8.32829 -9.46386e-05 7.45357 5.82657e-06H7.3768H7.35084C6.28809 5.82657e-06 5.4549 5.79794e-06 4.78365 0.0508412C4.1004 0.102589 3.534 0.209635 3.01613 0.451161C1.99061 0.929451 1.16635 1.75371 0.688063 2.77922C0.446537 3.2971 0.339483 3.8635 0.287743 4.54676C0.2369 5.218 0.236908 6.0512 0.236908 7.11392V7.13988V10.6744V10.7025C0.236908 11.8509 0.2369 12.7513 0.296023 13.475C0.356227 14.2118 0.480854 14.8205 0.761595 15.3716C1.22312 16.2774 1.95957 17.0138 2.86537 17.4753C3.41636 17.756 4.0251 17.8807 4.76197 17.9409C5.4856 18 6.38596 18 7.53436 18H7.56249H7.59062C8.73902 18 9.63936 18 10.363 17.9409C11.0999 17.8807 11.7086 17.756 12.2596 17.4753C13.1654 17.0138 13.9018 16.2774 14.3634 15.3716C14.6441 14.8205 14.7688 14.2118 14.829 13.475C14.8881 12.7513 14.8881 11.8509 14.8881 10.7025V10.6744V7.58821V7.50533C14.8882 6.56057 14.8882 5.97887 14.755 5.42408C14.6372 4.93289 14.4426 4.46331 14.1787 4.03259C13.8806 3.54612 13.4692 3.13485 12.8011 2.46689V2.46688L12.7425 2.40826L12.4254 2.09123L12.3712 2.03694C11.7526 1.41833 11.372 1.03752 10.9266 0.753838C10.453 0.452183 9.93045 0.235689 9.38225 0.114151ZM7.56249 7.53488C7.90926 7.53488 8.1904 7.81602 8.1904 8.16279V11.6702L9.21154 10.6491C9.45676 10.4038 9.85427 10.4038 10.0995 10.6491C10.3447 10.8943 10.3447 11.2918 10.0995 11.537L8.00646 13.63C7.76124 13.8752 7.36374 13.8752 7.11852 13.63L5.02547 11.537C4.78026 11.2918 4.78026 10.8943 5.02547 10.6491C5.27068 10.4038 5.66825 10.4038 5.91344 10.6491L6.93458 11.6702V8.16279C6.93458 7.81602 7.21572 7.53488 7.56249 7.53488Z'
                fill='#22272F'
              />
            </svg>
          </span>
        </a>
      </div>
      <div className='about-experience'>
        <div className='about-experience-title'>💼 Experience</div>
        <div className='about-experience-details'>
          <div className='about-experience-date'>Jan 2020 - Present</div>
          <div className='about-experience-description'>
            <div className='about-experience-description-title'>
              Co-Founder, Solver’s Cave
            </div>
            <div className='about-experience-description-details'>
              <ul className='about-experience-list'>
                <li>
                  As my freelancing career excelled, It was becoming difficult
                  to work on multiple projects at same time.
                </li>
                <li>So, Co-Founded Solver’s Cave on Jan 2020.</li>
                <li>Opened first office on May 2020.</li>
                <li>Managed over 500+ Projects.</li>
                <li>Help company raised from 0 employees to multiple.</li>
                <li>Helped interns and employees learn new skills.</li>
                <li>Opened second office on July 2022.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='about-experience-details'>
          <div className='about-experience-date'>Jan 2018 - Present</div>
          <div className='about-experience-description'>
            <div className='about-experience-description-title'>
              Freelance Web Designer, Fiverr / Upwork
            </div>
            <div className='about-experience-description-details'>
              <ul className='about-experience-list'>
                <li>Employement didn’t suit me, so I started freelancing.</li>
                <li>Did my university final year project in MERN Stack.</li>
                <li>
                  Was able to land first order in first month of freelancing.
                </li>
                <li>Have designed over 500+ websites for my clients.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='about-experience-details'>
          <div className='about-experience-date'>Apr 2017 - Jan 2018</div>
          <div className='about-experience-description'>
            <div className='about-experience-description-title'>
              WordPress Designer, Morosoft
            </div>
            <div className='about-experience-description-details'>
              <ul className='about-experience-list'>
                <li>Hired as a non paid intern as a Graphic Designer.</li>
                <li>
                  Learn WordPress Designing while doing Graphic Design work.
                </li>
                <li>Promoted to Paid Employee.</li>
                <li>
                  Designed over 35+ Ecommerce, Business, Portfolio WordPress
                  Websites.
                </li>
                <li>Was guided by university seniors.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='about-experience-details'>
          <div className='about-experience-date'>Apr 2017 - June 2017</div>
          <div className='about-experience-description'>
            <div className='about-experience-description-title'>
              Graphic Designer, AlphaKode
            </div>
            <div className='about-experience-description-details'>
              <ul className='about-experience-list'>
                <li>Hired as an Intern.</li>
                <li>Learn Adobe Photoshop, Adobe Illustrator and Adobe XD.</li>
                <li>
                  Designed Social Media Posts, Banners, Flyers, Logo Designs.
                </li>
                <li>Was guided by university seniors.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='about-education'>
        <div className='about-education-title'>🎓 Education</div>
        <div className='about-education-details'>
          <div className='about-education-date'>Sep 2016 – Sep 2020</div>
          <div className='about-education-description'>
            <div className='about-education-description-title'>
              Bachelor’s in Software Engineering
            </div>
            <div className='about-education-description-details'>
              Comsats University, Islamabad
            </div>
          </div>
        </div>
        <div className='about-education-details'>
          <div className='about-education-date'>Apr 2010 - Apr 2015</div>
          <div className='about-education-description'>
            <div className='about-education-description-title'>
              Pre-Engineering
            </div>
            <div className='about-education-description-details'>
              Abbottabad Public School & College, Abbottabad
            </div>
          </div>
        </div>
      </div>
      <div className='about-others'>
        <div className='about-other'>
          <div className='about-other-title'>💪 Skills</div>
          <ul className='about-other-list'>
            <li>Web design</li>
            <li>Web development</li>
            <li>UI design</li>
            <li>User Experience design</li>
            <li>Prototyping</li>
            <li>Logo designing</li>
            <li>Graphic designing</li>
          </ul>
        </div>
        <div className='about-other'>
          <div className='about-other-title'>🛠️ Tools</div>
          <ul className='about-other-list'>
            <li>Figma</li>
            <li>VS Code</li>
            <li>Adobe XD</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobe After Effects</li>
            <li>Adobe Premiere Pro</li>
          </ul>
        </div>
        <div className='about-other'>
          <div className='about-other-title'>👨🏻‍💻 Technologies</div>
          <ul className='about-other-list'>
            <li>Html</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
