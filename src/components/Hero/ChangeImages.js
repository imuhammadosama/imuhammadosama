let heroPortfolioImg = document.getElementById('hero-portfolio');
setInterval(() => {
  const heroPortfolioImg1 =
    'https://res.cloudinary.com/dvwpbbisf/image/upload/q_auto:eco/v1673088952/knsc5i214ij9xqvyzw0z.webp';
  const heroPortfolioImg2 =
    'https://res.cloudinary.com/dvwpbbisf/image/upload/q_auto:eco/v1673088959/jvhwzztqxprzufwfmxxo.webp';
  const heroPortfolioImg3 =
    'https://res.cloudinary.com/dvwpbbisf/image/upload/q_auto:eco/v1673088965/subnrocu8evuyh2s67zq.webp';
  const heroPortfolioImg4 =
    'https://res.cloudinary.com/dvwpbbisf/image/upload/q_auto:eco/v1673088968/q1k65kvnhwodaanvofyg.webp';
  if (heroPortfolioImg.src === heroPortfolioImg1) {
    heroPortfolioImg.src = heroPortfolioImg2;
  } else if (heroPortfolioImg.src === heroPortfolioImg2) {
    heroPortfolioImg.src = heroPortfolioImg3;
  } else if (heroPortfolioImg.src === heroPortfolioImg3) {
    heroPortfolioImg.src = heroPortfolioImg4;
  } else if (heroPortfolioImg.src === heroPortfolioImg4) {
    heroPortfolioImg.src = heroPortfolioImg1;
  }
}, 3000);
