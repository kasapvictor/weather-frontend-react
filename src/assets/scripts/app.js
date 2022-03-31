import onChange from 'on-change';
import _ from 'lodash';
import axios from 'axios';
/*
NAME
https://api.openweathermap.org/data/2.5/find?q=moscow&appid=3eeda7da43f6704e77308a8aceb09b0f&units=metric&lang=ru

ID
https://api.openweathermap.org/data/2.5/weather?appid=3eeda7da43f6704e77308a8aceb09b0f&units=metric&id=524894

GROUP
http://api.openweathermap.org/data/2.5/group?id=524894,498817&appid=3eeda7da43f6704e77308a8aceb09b0f&units=metric
*/

const render = (state, elements) => (path, value, prevValue) => {
  console.log('PATH', path);
  console.log('VALUE', value);
  console.log('PREV', prevValue);
};

const formHandler = (e, form, watchedState) => {
  e.preventDefault();

  const formData = new FormData(form);
  const inputSearchValue = formData.get('search').trim();

  console.log(inputSearchValue);
};

export default () => {
  const elements = {
    form: document.forms['form-search'],
  };

  const state = {};

  const watchedState = onChange(state, render(state, elements));

  const { form } = elements;
  form.addEventListener('submit', (e) => formHandler(e, form, watchedState));
  console.log('---12');
};
