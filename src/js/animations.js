import AOS from 'aos';
import 'aos/dist/aos.css';

export const initAnimations = () => {
  AOS.init({
    duration: 800,
    offset: 100,
    once: true,
  });
};
