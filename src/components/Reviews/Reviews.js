import './Reviews.css';
import { reviews } from '../../data/reviews';
import { useState } from 'react';

export default function Reviews() {
  const [count, setCount] = useState(6);
  return (
    <div>
      <div className='reviews-section'>
        <div className='reviews-section-title'>Reviews</div>
        <div className='reviews-section-description'>
          Don't take my words for it - Take theirs.
        </div>
      </div>
      <div className='reviews'>
        {reviews
          .filter((reviews, index) => {
            return index < count;
          })
          .map((review) => {
            return (
              <div className='review-container'>
                <div className='review-stars'>
                  <svg
                    width='97'
                    height='16'
                    viewBox='0 0 97 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M9.2856 0.658289C8.7884 0.422473 8.2116 0.422472 7.7144 0.658287C7.3702 0.821535 7.12603 1.13055 6.90968 1.4798C6.69216 1.83095 6.45351 2.30826 6.15632 2.90265L6.15632 2.90267L6.14468 2.92595L5.90515 3.405C5.70136 3.81257 5.6421 3.91939 5.5677 3.99726C5.49095 4.07758 5.39893 4.14175 5.29703 4.18599C5.19824 4.22888 5.07752 4.24757 4.62462 4.29789L4.40718 4.32205L4.38109 4.32495H4.38108C3.66712 4.40427 3.09678 4.46764 2.66499 4.55547C2.23914 4.64209 1.84226 4.77031 1.56444 5.05375C1.16696 5.45929 0.979829 6.02613 1.05775 6.58861C1.11221 6.98173 1.35474 7.32107 1.64532 7.6442C1.93996 7.9718 2.36048 8.36233 2.8869 8.85113L2.90613 8.869L3.13569 9.08213C3.53444 9.4524 3.63668 9.55713 3.69396 9.66867C3.7531 9.78387 3.7846 9.9112 3.78596 10.0407C3.78728 10.1659 3.74482 10.3087 3.5622 10.8292L3.55358 10.8538L3.55356 10.8539C3.28407 11.6219 3.07065 12.2301 2.94948 12.7033C2.83176 13.163 2.76581 13.6144 2.91927 14.0053C3.13522 14.5553 3.60306 14.9675 4.17591 15.1125C4.58185 15.2153 5.0175 15.0956 5.45478 14.9231C5.90368 14.7461 6.4721 14.4619 7.1888 14.1035L7.21226 14.0918L7.76953 13.8131C8.14526 13.6253 8.24786 13.5791 8.34633 13.5605C8.44786 13.5415 8.55213 13.5415 8.65366 13.5605C8.75213 13.5791 8.85473 13.6253 9.23046 13.8131L9.78773 14.0918L9.81126 14.1035C10.5279 14.4619 11.0963 14.7461 11.5452 14.9231C11.9825 15.0956 12.4181 15.2153 12.8241 15.1125C13.3969 14.9675 13.8648 14.5553 14.0807 14.0053C14.2342 13.6144 14.1682 13.163 14.0505 12.7033C13.9293 12.2301 13.7159 11.6219 13.4464 10.8538V10.8537L13.4378 10.8292C13.2552 10.3087 13.2127 10.1659 13.214 10.0407C13.2154 9.9112 13.2469 9.78387 13.3061 9.66867C13.3633 9.55713 13.4655 9.4524 13.8643 9.08213L14.0939 8.869L14.1131 8.85107C14.6395 8.36227 15.0601 7.9718 15.3547 7.6442C15.6453 7.32107 15.8878 6.98173 15.9423 6.58861C16.0202 6.02613 15.8331 5.45929 15.4355 5.05375C15.1577 4.77031 14.7609 4.64209 14.335 4.55547C13.9032 4.46764 13.3329 4.40427 12.6189 4.32495L12.5928 4.32205L12.3754 4.29789C11.9225 4.24757 11.8017 4.22888 11.703 4.18599C11.6011 4.14175 11.5091 4.07758 11.4323 3.99726C11.3579 3.91939 11.2987 3.81257 11.0949 3.40499L10.8553 2.92595L10.8437 2.90266C10.5465 2.30826 10.3079 1.83095 10.0903 1.4798C9.874 1.13055 9.62986 0.821541 9.2856 0.658289Z'
                      fill='#FD7E14'
                    />
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M29.2856 0.658289C28.7884 0.422473 28.2116 0.422472 27.7144 0.658287C27.3702 0.821535 27.126 1.13055 26.9097 1.4798C26.6922 1.83095 26.4535 2.30826 26.1563 2.90265L26.1563 2.90267L26.1447 2.92595L25.9052 3.405C25.7014 3.81257 25.6421 3.91939 25.5677 3.99726C25.491 4.07758 25.3989 4.14175 25.297 4.18599C25.1982 4.22888 25.0775 4.24757 24.6246 4.29789L24.4072 4.32205L24.3811 4.32495H24.3811C23.6671 4.40427 23.0968 4.46764 22.665 4.55547C22.2391 4.64209 21.8423 4.77031 21.5644 5.05375C21.167 5.45929 20.9798 6.02613 21.0577 6.58861C21.1122 6.98173 21.3547 7.32107 21.6453 7.6442C21.94 7.9718 22.3605 8.36233 22.8869 8.85113L22.9061 8.869L23.1357 9.08213C23.5344 9.4524 23.6367 9.55713 23.694 9.66867C23.7531 9.78387 23.7846 9.9112 23.786 10.0407C23.7873 10.1659 23.7448 10.3087 23.5622 10.8292L23.5536 10.8538L23.5536 10.8539C23.2841 11.6219 23.0707 12.2301 22.9495 12.7033C22.8318 13.163 22.7658 13.6144 22.9193 14.0053C23.1352 14.5553 23.6031 14.9675 24.1759 15.1125C24.5819 15.2153 25.0175 15.0956 25.4548 14.9231C25.9037 14.7461 26.4721 14.4619 27.1888 14.1035L27.2123 14.0918L27.7695 13.8131C28.1453 13.6253 28.2479 13.5791 28.3463 13.5605C28.4479 13.5415 28.5521 13.5415 28.6537 13.5605C28.7521 13.5791 28.8547 13.6253 29.2305 13.8131L29.7877 14.0918L29.8113 14.1035C30.5279 14.4619 31.0963 14.7461 31.5452 14.9231C31.9825 15.0956 32.4181 15.2153 32.8241 15.1125C33.3969 14.9675 33.8648 14.5553 34.0807 14.0053C34.2342 13.6144 34.1682 13.163 34.0505 12.7033C33.9293 12.2301 33.7159 11.6219 33.4464 10.8538V10.8537L33.4378 10.8292C33.2552 10.3087 33.2127 10.1659 33.214 10.0407C33.2154 9.9112 33.2469 9.78387 33.3061 9.66867C33.3633 9.55713 33.4655 9.4524 33.8643 9.08213L34.0939 8.869L34.1131 8.85107C34.6395 8.36227 35.0601 7.9718 35.3547 7.6442C35.6453 7.32107 35.8878 6.98173 35.9423 6.58861C36.0202 6.02613 35.8331 5.45929 35.4355 5.05375C35.1577 4.77031 34.7609 4.64209 34.335 4.55547C33.9032 4.46764 33.3329 4.40427 32.6189 4.32495L32.5928 4.32205L32.3754 4.29789C31.9225 4.24757 31.8017 4.22888 31.703 4.18599C31.6011 4.14175 31.5091 4.07758 31.4323 3.99726C31.3579 3.91939 31.2987 3.81257 31.0949 3.40499L30.8553 2.92595L30.8437 2.90266C30.5465 2.30826 30.3079 1.83095 30.0903 1.4798C29.874 1.13055 29.6299 0.821541 29.2856 0.658289Z'
                      fill='#FD7E14'
                    />
                    <g clip-path='url(#clip0_9_201)'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M49.7856 0.658289C49.2884 0.422473 48.7116 0.422472 48.2144 0.658287C47.8702 0.821535 47.626 1.13055 47.4097 1.4798C47.1922 1.83095 46.9535 2.30826 46.6563 2.90265L46.6563 2.90267L46.6447 2.92595L46.4052 3.405C46.2014 3.81257 46.1421 3.91939 46.0677 3.99726C45.991 4.07758 45.8989 4.14175 45.797 4.18599C45.6982 4.22888 45.5775 4.24757 45.1246 4.29789L44.9072 4.32205L44.8811 4.32495H44.8811C44.1671 4.40427 43.5968 4.46764 43.165 4.55547C42.7391 4.64209 42.3423 4.77031 42.0644 5.05375C41.667 5.45929 41.4798 6.02613 41.5577 6.58861C41.6122 6.98173 41.8547 7.32107 42.1453 7.6442C42.44 7.9718 42.8605 8.36233 43.3869 8.85113L43.4061 8.869L43.6357 9.08213C44.0344 9.4524 44.1367 9.55713 44.194 9.66867C44.2531 9.78387 44.2846 9.9112 44.286 10.0407C44.2873 10.1659 44.2448 10.3087 44.0622 10.8292L44.0536 10.8538L44.0536 10.8539C43.7841 11.6219 43.5707 12.2301 43.4495 12.7033C43.3318 13.163 43.2658 13.6144 43.4193 14.0053C43.6352 14.5553 44.1031 14.9675 44.6759 15.1125C45.0819 15.2153 45.5175 15.0956 45.9548 14.9231C46.4037 14.7461 46.9721 14.4619 47.6888 14.1035L47.7123 14.0918L48.2695 13.8131C48.6453 13.6253 48.7479 13.5791 48.8463 13.5605C48.9479 13.5415 49.0521 13.5415 49.1537 13.5605C49.2521 13.5791 49.3547 13.6253 49.7305 13.8131L50.2877 14.0918L50.3113 14.1035C51.0279 14.4619 51.5963 14.7461 52.0452 14.9231C52.4825 15.0956 52.9181 15.2153 53.3241 15.1125C53.8969 14.9675 54.3648 14.5553 54.5807 14.0053C54.7342 13.6144 54.6682 13.163 54.5505 12.7033C54.4293 12.2301 54.2159 11.6219 53.9464 10.8538V10.8537L53.9378 10.8292C53.7552 10.3087 53.7127 10.1659 53.714 10.0407C53.7154 9.9112 53.7469 9.78387 53.8061 9.66867C53.8633 9.55713 53.9655 9.4524 54.3643 9.08213L54.5939 8.869L54.6131 8.85107C55.1395 8.36227 55.5601 7.9718 55.8547 7.6442C56.1453 7.32107 56.3878 6.98173 56.4423 6.58861C56.5202 6.02613 56.3331 5.45929 55.9355 5.05375C55.6577 4.77031 55.2609 4.64209 54.835 4.55547C54.4032 4.46764 53.8329 4.40427 53.1189 4.32495L53.0928 4.32205L52.8754 4.29789C52.4225 4.24757 52.3017 4.22888 52.203 4.18599C52.1011 4.14175 52.0091 4.07758 51.9323 3.99726C51.8579 3.91939 51.7987 3.81257 51.5949 3.40499L51.3553 2.92595L51.3437 2.90266C51.0465 2.30826 50.8079 1.83095 50.5903 1.4798C50.374 1.13055 50.1299 0.821541 49.7856 0.658289Z'
                        fill='#FD7E14'
                      />
                    </g>
                    <g clip-path='url(#clip1_9_201)'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M69.7856 0.658289C69.2884 0.422473 68.7116 0.422472 68.2144 0.658287C67.8702 0.821535 67.626 1.13055 67.4097 1.4798C67.1922 1.83095 66.9535 2.30826 66.6563 2.90265L66.6563 2.90267L66.6447 2.92595L66.4052 3.405C66.2014 3.81257 66.1421 3.91939 66.0677 3.99726C65.991 4.07758 65.8989 4.14175 65.797 4.18599C65.6982 4.22888 65.5775 4.24757 65.1246 4.29789L64.9072 4.32205L64.8811 4.32495H64.8811C64.1671 4.40427 63.5968 4.46764 63.165 4.55547C62.7391 4.64209 62.3423 4.77031 62.0644 5.05375C61.667 5.45929 61.4798 6.02613 61.5577 6.58861C61.6122 6.98173 61.8547 7.32107 62.1453 7.6442C62.44 7.9718 62.8605 8.36233 63.3869 8.85113L63.4061 8.869L63.6357 9.08213C64.0344 9.4524 64.1367 9.55713 64.194 9.66867C64.2531 9.78387 64.2846 9.9112 64.286 10.0407C64.2873 10.1659 64.2448 10.3087 64.0622 10.8292L64.0536 10.8538L64.0536 10.8539C63.7841 11.6219 63.5707 12.2301 63.4495 12.7033C63.3318 13.163 63.2658 13.6144 63.4193 14.0053C63.6352 14.5553 64.1031 14.9675 64.6759 15.1125C65.0819 15.2153 65.5175 15.0956 65.9548 14.9231C66.4037 14.7461 66.9721 14.4619 67.6888 14.1035L67.7123 14.0918L68.2695 13.8131C68.6453 13.6253 68.7479 13.5791 68.8463 13.5605C68.9479 13.5415 69.0521 13.5415 69.1537 13.5605C69.2521 13.5791 69.3547 13.6253 69.7305 13.8131L70.2877 14.0918L70.3113 14.1035C71.0279 14.4619 71.5963 14.7461 72.0452 14.9231C72.4825 15.0956 72.9181 15.2153 73.3241 15.1125C73.8969 14.9675 74.3648 14.5553 74.5807 14.0053C74.7342 13.6144 74.6682 13.163 74.5505 12.7033C74.4293 12.2301 74.2159 11.6219 73.9464 10.8538V10.8537L73.9378 10.8292C73.7552 10.3087 73.7127 10.1659 73.714 10.0407C73.7154 9.9112 73.7469 9.78387 73.8061 9.66867C73.8633 9.55713 73.9655 9.4524 74.3643 9.08213L74.5939 8.869L74.6131 8.85107C75.1395 8.36227 75.5601 7.9718 75.8547 7.6442C76.1453 7.32107 76.3878 6.98173 76.4423 6.58861C76.5202 6.02613 76.3331 5.45929 75.9355 5.05375C75.6577 4.77031 75.2609 4.64209 74.835 4.55547C74.4032 4.46764 73.8329 4.40427 73.1189 4.32495L73.0928 4.32205L72.8754 4.29789C72.4225 4.24757 72.3017 4.22888 72.203 4.18599C72.1011 4.14175 72.0091 4.07758 71.9323 3.99726C71.8579 3.91939 71.7987 3.81257 71.5949 3.40499L71.3553 2.92595L71.3437 2.90266C71.0465 2.30826 70.8079 1.83095 70.5903 1.4798C70.374 1.13055 70.1299 0.821541 69.7856 0.658289Z'
                        fill='#FD7E14'
                      />
                    </g>
                    <g clip-path='url(#clip2_9_201)'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M89.7856 0.658289C89.2884 0.422473 88.7116 0.422472 88.2144 0.658287C87.8702 0.821535 87.626 1.13055 87.4097 1.4798C87.1922 1.83095 86.9535 2.30826 86.6563 2.90265L86.6563 2.90267L86.6447 2.92595L86.4052 3.405C86.2014 3.81257 86.1421 3.91939 86.0677 3.99726C85.991 4.07758 85.8989 4.14175 85.797 4.18599C85.6982 4.22888 85.5775 4.24757 85.1246 4.29789L84.9072 4.32205L84.8811 4.32495H84.8811C84.1671 4.40427 83.5968 4.46764 83.165 4.55547C82.7391 4.64209 82.3423 4.77031 82.0644 5.05375C81.667 5.45929 81.4798 6.02613 81.5577 6.58861C81.6122 6.98173 81.8547 7.32107 82.1453 7.6442C82.44 7.9718 82.8605 8.36233 83.3869 8.85113L83.4061 8.869L83.6357 9.08213C84.0344 9.4524 84.1367 9.55713 84.194 9.66867C84.2531 9.78387 84.2846 9.9112 84.286 10.0407C84.2873 10.1659 84.2448 10.3087 84.0622 10.8292L84.0536 10.8538L84.0536 10.8539C83.7841 11.6219 83.5707 12.2301 83.4495 12.7033C83.3318 13.163 83.2658 13.6144 83.4193 14.0053C83.6352 14.5553 84.1031 14.9675 84.6759 15.1125C85.0819 15.2153 85.5175 15.0956 85.9548 14.9231C86.4037 14.7461 86.9721 14.4619 87.6888 14.1035L87.7123 14.0918L88.2695 13.8131C88.6453 13.6253 88.7479 13.5791 88.8463 13.5605C88.9479 13.5415 89.0521 13.5415 89.1537 13.5605C89.2521 13.5791 89.3547 13.6253 89.7305 13.8131L90.2877 14.0918L90.3113 14.1035C91.0279 14.4619 91.5963 14.7461 92.0452 14.9231C92.4825 15.0956 92.9181 15.2153 93.3241 15.1125C93.8969 14.9675 94.3648 14.5553 94.5807 14.0053C94.7342 13.6144 94.6682 13.163 94.5505 12.7033C94.4293 12.2301 94.2159 11.6219 93.9464 10.8538V10.8537L93.9378 10.8292C93.7552 10.3087 93.7127 10.1659 93.714 10.0407C93.7154 9.9112 93.7469 9.78387 93.8061 9.66867C93.8633 9.55713 93.9655 9.4524 94.3643 9.08213L94.5939 8.869L94.6131 8.85107C95.1395 8.36227 95.5601 7.9718 95.8547 7.6442C96.1453 7.32107 96.3878 6.98173 96.4423 6.58861C96.5202 6.02613 96.3331 5.45929 95.9355 5.05375C95.6577 4.77031 95.2609 4.64209 94.835 4.55547C94.4032 4.46764 93.8329 4.40427 93.1189 4.32495L93.0928 4.32205L92.8754 4.29789C92.4225 4.24757 92.3017 4.22888 92.203 4.18599C92.1011 4.14175 92.0091 4.07758 91.9323 3.99726C91.8579 3.91939 91.7987 3.81257 91.5949 3.40499L91.3553 2.92595L91.3437 2.90266C91.0465 2.30826 90.8079 1.83095 90.5903 1.4798C90.374 1.13055 90.1299 0.821541 89.7856 0.658289Z'
                        fill='#FD7E14'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_9_201'>
                        <rect
                          width='16'
                          height='16'
                          fill='white'
                          transform='translate(41)'
                        />
                      </clipPath>
                      <clipPath id='clip1_9_201'>
                        <rect
                          width='16'
                          height='16'
                          fill='white'
                          transform='translate(61)'
                        />
                      </clipPath>
                      <clipPath id='clip2_9_201'>
                        <rect
                          width='16'
                          height='16'
                          fill='white'
                          transform='translate(81)'
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className='review-review'>{review.review}</div>
                <div className='review-client'>
                  <div className='review-client-image'>
                    <img
                      id='review-client-image'
                      src={review.image}
                      width='48px'
                      height='48px'
                    />
                  </div>
                  <div className='review-client-text'>
                    <div className='review-client-name'>{review.name}</div>
                    <div className='review-client-title'>
                      Client from &nbsp;
                      <img
                        src={review.country}
                        width='16px'
                        className='review-country'
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        {count > reviews.length || count === reviews.length ? (
          ''
        ) : (
          <button className='button mt-16' onClick={() => setCount(count + 3)}>
            Check More
          </button>
        )}
      </div>
    </div>
  );
}