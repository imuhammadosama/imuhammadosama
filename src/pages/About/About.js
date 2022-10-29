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
        {/* <div className='about-socials'>
          <a href='https://twitter.com/imuhammadosama' target='_blank'>
            <img src={Twitter} className='about-social-icon' />
          </a>
          <a href='https://linkedin.com/in/imuhammadosama' target='_blank'>
            <img src={Linkedin} className='about-social-icon' />
          </a>
          <a href='https://instagram.com/imuhammadosama' target='_blank'>
            <img src={Instagram} className='about-social-icon' />
          </a>
        </div> */}
        <div className='about-download-resume'>
          <a
            className='button'
            href='https://drive.google.com/uc?export=download&id=1vGEqBjFlSta9tktaq3vp8o7nt1Usjxh5
'
          >
            <span>Download Resume</span>
            <span style={{ height: '18px', paddingLeft: '8px' }}>
              <svg
                width='15'
                height='17'
                viewBox='0 0 15 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.019 10.811L8.01976 1.41396H5.82971L5.83049 10.8095L2.54773 7.52675L1 9.07448L6.92551 15L12.8503 9.07526L11.3025 7.52752L8.019 10.811Z'
                  fill='#1E1E1E'
                  id='download-icon'
                />
              </svg>
            </span>
          </a>
        </div>
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
