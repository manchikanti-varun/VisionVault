import p1_img from '../asserts-varun/p1.png';
import p2_img from '../asserts-varun/p2.png';
import p3_img from '../asserts-varun/p3.png';
import p4_img from '../asserts-varun/p4.png';
import varun from '../asserts-varun/varun.png';
import jyothi from '../asserts-varun/jyothi.png';
import varun1 from '../asserts-varun/varun1.png';

const allProducts = [
  { id: 1, image: varun, name: "Varun_Portfolio", price: 1200, rating: 4.3, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  { id: 2, image: jyothi, name: "Jyothi_Portfolio", price: 1400, rating: 4.6, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  //{ id: 3, image: varun1, name: "Varun_Portfolio", price: 1600, rating: 4.2, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  { id: 4, image: p4_img, name: "Sai Harshitha", price: 1800, rating: 4.8, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 5, image: p1_img, name: "Portfolio Epsilon", price: 2000, rating: 4.5, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 6, image: p2_img, name: "Portfolio Zeta", price: 2200, rating: 4.7, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 7, image: p3_img, name: "Portfolio Eta", price: 2400, rating: 4.4, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 8, image: p4_img, name: "Portfolio Theta", price: 2600, rating: 4.9, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 9, image: p1_img, name: "Portfolio Iota", price: 2800, rating: 4.6, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 10, image: p2_img, name: "Portfolio Kappa", price: 3000, rating: 4.5, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 11, image: p3_img, name: "Portfolio Lambda", price: 3200, rating: 4.3, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 12, image: p4_img, name: "Portfolio Mu", price: 3400, rating: 4.8, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 13, image: p1_img, name: "Portfolio Nu", price: 3600, rating: 4.7, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 14, image: p2_img, name: "Portfolio Xi", price: 3800, rating: 4.2, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 15, image: p3_img, name: "Portfolio Omicron", price: 4000, rating: 4.9, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 16, image: p4_img, name: "Portfolio Pi", price: 4200, rating: 4.4, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 17, image: p1_img, name: "Portfolio Rho", price: 4400, rating: 4.5, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 18, image: p2_img, name: "Portfolio Sigma", price: 4600, rating: 4.6, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 19, image: p3_img, name: "Portfolio Tau", price: 4800, rating: 4.3, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 20, image: p4_img, name: "Portfolio Upsilon", price: 5000, rating: 4.8, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 21, image: p1_img, name: "Portfolio Phi", price: 5200, rating: 4.7, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 22, image: p2_img, name: "Portfolio Chi", price: 5400, rating: 4.2, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 23, image: p3_img, name: "Portfolio Psi", price: 5600, rating: 4.9, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 24, image: p4_img, name: "Portfolio Omega", price: 5800, rating: 4.4, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 25, image: p1_img, name: "Portfolio Alpha 2", price: 6000, rating: 4.5, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 26, image: p2_img, name: "Portfolio Beta 2", price: 6200, rating: 4.6, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 27, image: p3_img, name: "Portfolio Gamma 2", price: 6400, rating: 4.3, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 28, image: p4_img, name: "Portfolio Delta 2", price: 6600, rating: 4.8, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 29, image: p1_img, name: "Portfolio Epsilon 2", price: 6800, rating: 4.7, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 30, image: p2_img, name: "Portfolio Zeta 2", price: 7000, rating: 4.2, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 31, image: p3_img, name: "Portfolio Eta 2", price: 7200, rating: 4.9, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 32, image: p4_img, name: "Portfolio Theta 2", price: 7400, rating: 4.4, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 33, image: p1_img, name: "Portfolio Iota 2", price: 7600, rating: 4.6, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  // { id: 34, image: p2_img, name: "Portfolio Kappa 2", price: 7800, rating: 4.5, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
  //  { id: 35, image: p3_img, name: "Portfolio Lambda 2", price: 8000, rating: 4.3, url: "https://varunmanchikanti2024portfolio-manchikanti-varuns-projects.vercel.app/" },
];

export default allProducts;
