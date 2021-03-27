import dishCards from '../templates/restorant_menu.hbs';
import dish from '../js/menu.json';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const menuCardsRef = document.querySelector('.js-menu');

const markup = createMenuMarkup(dish);

menuCardsRef.insertAdjacentHTML('beforeend', markup);

function createMenuMarkup (dish){
    return dish.map(dishCards).join('');
} 