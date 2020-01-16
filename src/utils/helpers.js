import {Films} from "./const";
import moment from "moment";

export const checkForActiveState = (target) => {
  const isActive = target.classList.contains(`main-navigation__item--active`);
  const isMenuItem = target.classList.contains(`main-navigation__item`) || target.classList.contains(`main-navigation__item-count`);

  if (isMenuItem && !isActive) {
    target.closest(`.main-navigation`).querySelector(`.main-navigation__item--active`).classList.remove(`main-navigation__item--active`);

    if (target.classList.contains(`main-navigation__item`)) {
      target.classList.add(`main-navigation__item--active`);
    } else {
      target.parentNode.classList.add(`main-navigation__item--active`);
    }

    return true;
  }

  return false;
};

export const getRandomNumber = (min, max) => Math.floor(Math.random() * ((max + 1) - min) + min);

export const getRandomArrayItem = (array) => array[getRandomNumber(0, array.length - 1)];

export const getRandomBoolean = () => Math.random() > 0.5;

export const formatTime = (time) => {
  const hours = time / 60 ^ 0;
  const minutes = time % 60;

  return `${hours}h ${minutes}m`;
};

const formatDateNumber = (number) => number < 10 ? `0${number}` : number;

export const formatDate = (date) => {
  const currentDate = new Date().getDate();
  const day = formatDateNumber(date.getDate());
  const hours = formatDateNumber(date.getHours());
  const minutes = formatDateNumber(date.getMinutes());

  let result = `${date.getFullYear()}/${date.getMonth()}/${day} ${hours}:${minutes}`;

  switch (true) {
    case date.getDate() === currentDate:
      result = `Today`;
      break;
    case (date.getDate() + 1) === currentDate:
      result = `Yesterday`;
      break;
    case (date.getDate() + 2) === currentDate:
      result = `2 days ago`;
      break;
  }

  return result;
};

export const createElement = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template;

  return element.firstElementChild;
};

export const isEscPressed = (evt) => {
  return evt.key === `Escape` || evt.key === `Esc`;
};

export const isSubmitPressed = (evt) => {
  return evt.ctrlKey && (evt.key === `Enter`);
};

export const getFilmsToLoadAmount = (renderedAmount) => {
  if (renderedAmount) {
    let result = renderedAmount;

    for (let i = 0; i < result % Films.INITIAL_AMOUNT; i++) {
      result++;
    }

    return result;
  }

  return Films.INITIAL_AMOUNT;
};
