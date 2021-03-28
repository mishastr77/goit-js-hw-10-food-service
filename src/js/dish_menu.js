import template from '../templates/restorant_menu.hbs';
import data from '../js/menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  list: document.querySelector('.js-menu'),
  input: document.querySelector('.theme-switch__toggle'),
  body: document.body,
};

refs.body.classList.add(
  localStorage.getItem('theme') === null
    ? Theme.LIGHT
    : localStorage.getItem('theme'),
);
refs.input.checked = localStorage.getItem('theme') === Theme.DARK;
const markup = template(data);

refs.list.insertAdjacentHTML('beforeend', markup);

refs.input.addEventListener('change', inputChangeOn);

function changeTheme(add, rem){
  refs.body.classList.remove(rem);
    refs.body.classList.add(add);
    localStorage.setItem('theme', add);
}

function inputChangeOn({ target }) {
  if (target.checked) {
    changeTheme(Theme.DARK, Theme.LIGHT);
  } else {
    changeTheme(Theme.LIGHT, Theme.DARK);
  }
}
