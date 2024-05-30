// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import {onBurgerButton, onLinkClick, onOverlayClick, toggleSubmenu} from './modules/header';
import './modules/hero';
import {addTabindexBullets} from './modules/hero';

onBurgerButton();
onLinkClick();
onOverlayClick();
toggleSubmenu();
addTabindexBullets();
