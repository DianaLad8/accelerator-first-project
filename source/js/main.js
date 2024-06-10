// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import {onBurgerButton, onLinkClick, onOverlayClick, toggleSubmenu} from './modules/header';
import './modules/hero';
import {addTabindexBullets} from './modules/hero';
import './modules/form-mask';
import './modules/form-select';
import './modules/modal';
import './modules/programs';
import './modules/news';
import './modules/faq';

onBurgerButton();
onLinkClick();
onOverlayClick();
toggleSubmenu();
addTabindexBullets();
