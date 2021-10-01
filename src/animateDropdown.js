export let toggleDropdown = () => {
  let dropdown = document.querySelector(`.places__options`);
  dropdown.classList.toggle(`places__options--opened`);
};

export let closeDropdown = () => {
  let dropdown = document.querySelector(`.places__options`);
  dropdown.classList.remove(`places__options--opened`);
};

export let openDropdown = () => {
  let dropdown = document.querySelector(`.places__options`);
  dropdown.classList.add(`places__options--opened`);
};
